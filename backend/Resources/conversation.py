from flask_restful import Resource, reqparse
from models.ticket import Ticket as TicketModel
from flask import jsonify, request

class Conversation(Resource):

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('ticket_id', type=str, required=True)
        parser.add_argument('message', type=dict, required=True)

        response = TicketModel.add_message(parser.parse_args())
        if response['error']:
            return response, 400
        
        return jsonify({"error": False, "data": response['data']})
    
    def get(self):
        ticket_id = request.args.get('ticket_id')

        response = TicketModel.get_messages(ticket_id)
        if response['error']:
            return response, 400
        
        messages = response['data']
        print(messages)
        
        return jsonify({"error": False, "data": messages})
        