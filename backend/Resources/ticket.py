from bson import ObjectId
from flask_restful import Resource, reqparse
from models.ticket import Ticket as TicketModel
from models.employee import Employee as EmployeeModel
from flask import jsonify, request
import requests
import os

priority = {
    'negative': 1,
    'neutral': 2,
    'positive': 3
}

class Ticket(Resource):

    def post(self):
        create = request.args.get('create')
        update = request.args.get('update')

        if(create == 'True'):
            parser = reqparse.RequestParser()
            parser.add_argument('customer_id', type=str, required=True)
            parser.add_argument('order_id', type=str, required=True)
            parser.add_argument('customer_query', type=str, required=True)
            args = parser.parse_args()

            return create_ticket(args)
        
        if(update == 'True'):
            parser = reqparse.RequestParser()
            parser.add_argument('ticket_id', type=str, required=True)
            parser.add_argument('status', type=str, required=True)
            args = parser.parse_args()

            return update_ticket(args)
        

    def get(self):
        ticket = request.args.get('ticket')
        customer = request.args.get('customer')
        employee = request.args.get('employee')

        if ticket:
            args = {
                'ticket_id': ticket
            }

            return get_ticket_by_ticket_id(args)
        
        if customer:
            args = {
                'customer_id': customer
            }

            return get_tickets_by_customer_id(args)
        
        if employee:
            args = {
                'employee_id': str(employee)
            }

            return get_tickets_by_employee(args)
        
        response = TicketModel.get_all_tickets()
        if response["error"]:
            return response
        
        tickets = response["data"]

        return jsonify({
            "error": False,
            "data": tickets
        })

        
def get_sentiment_of_query(args):
    inferenceAPI = os.getenv('SENTIMENT_ANALYSIS_MODEL_INFERENCE_API')
    token = os.getenv('HUGGING_FACE_ACCESS_TOKEN')
    output = requests.post(
        inferenceAPI, 
        headers={"Authorization": f"Bearer {token}"},
        json=args['customer_query']
    )
    max_score = 0
    max_label = ''

    for i in output.json()[0]:
        if i['score'] > max_score:
            max_score = i['score']
            max_label = i['label']

    return max_label
    
def get_emotion_of_query(args):
    inferenceAPI = os.getenv('EMOTION_ANALYSIS_MODEL_INFERENCE_API')
    token = os.getenv('HUGGING_FACE_ACCESS_TOKEN')
    output = requests.post(
        inferenceAPI, 
        headers={"Authorization": f"Bearer {token}"},
        json=args['customer_query']
    )

    emotions = sorted(output.json()[0], key=lambda x: x['score'], reverse=True)
    emotions = emotions[:5]
    emotions = [emotion['label'] for emotion in emotions]
    emotions = ', '.join(emotions)

    return emotions

def select_employee(sentiment):
    response = EmployeeModel.get_all_employees()
    if response["error"]:
        return response
    
    employees = response["data"]

    expected_rank = priority[sentiment]
    selected_employee = {}
    alternate_employee = {}
    for employee in employees:
        if int(employee['rank']) == expected_rank and employee['engaged'] == False:
            selected_employee = employee
            break
        elif alternate_employee == {} or int(employee['rank']) < int(alternate_employee['rank']):
            if employee['engaged'] == False:
                alternate_employee = employee

    if selected_employee == {}:
        selected_employee = alternate_employee

    return selected_employee

def create_ticket(args):
    sentiment = get_sentiment_of_query(args)
    selected_employee = select_employee(sentiment)

    args['assigned_to'] = selected_employee if selected_employee != {} else None
    args['assigned_to_name'] = selected_employee['name'] if selected_employee != {} else None
    args['assigned_to_id'] = selected_employee['employee_id'] if selected_employee != {} else None
    args['status'] = 'assigned'
    args['sentiment'] = sentiment
    args['emotions'] = get_emotion_of_query(args)

    response = TicketModel.add_single_ticket(args)
    if response["error"]:
        return response
    
    ticket = response["data"]

    if selected_employee == {}:
        return jsonify({
            "error": False,
            "data": ticket
        })

    response = EmployeeModel.update_employee_status(id=ObjectId(selected_employee['id']), engaged=True)
    if response["error"]:
        return response

    return jsonify({
        "error": False,
        "data": ticket
    })

def update_ticket(args):
    response = TicketModel.update_ticket_status(args)
    if response["error"]:
        return response
    
    ticket = response["data"]

    if ticket['status'] == 'resolved':
        response = EmployeeModel.update_employee_status(id=ObjectId(ticket['assigned_to']['id']), engaged=False)
        if response["error"]:
            return response

    return jsonify({
        "error": False,
        "data": ticket
    })

def get_ticket_by_ticket_id(args):
    response = TicketModel.get_single_ticket(args)
    if response["error"]:
        return response
    
    ticket = response["data"]
    print(ticket)

    return jsonify({
        "error": False,
        "data": ticket
    })

def get_tickets_by_customer_id(args):
    response = TicketModel.get_tickets_by_customer(args)
    if response["error"]:
        return response
    
    tickets = response["data"]

    return jsonify({
        "error": False,
        "data": tickets
    })

def get_tickets_by_employee(args):
    response = EmployeeModel.get_single_employee(args)
    if response["error"]:
        return response
    
    employee = response["data"]

    response = TicketModel.get_tickets_by_employee(employee_id=employee['id'])
    if response["error"]:
        return response
    
    tickets = response["data"]

    return jsonify({
        "error": False,
        "data": tickets
    })
