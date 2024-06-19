from flask import jsonify, request
from flask_restful import Resource, reqparse
from models.order import Order as OrderModel
from models.customer import Customer as CustomerModel

class Order(Resource):

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('order_id', type=str, required=True, help="Order ID is required")
        parser.add_argument('products', type=dict, location='json', action='append', required=True, help="Products is required")
        parser.add_argument('total', type=float, required=True, help="Total is required")
        parser.add_argument('status', type=str, required=True, help="Status is required")
        parser.add_argument('customer', type=str, required=True)
        args = parser.parse_args()

        response = CustomerModel.get(args["customer"])
        if response["error"]:
            return response
        
        customer = response["data"]
        args["customer"] = customer

        response = OrderModel.add(args)
        if response["error"]:
            return response
        
        order = response["data"]

        return jsonify({
            "error": False,
            "data": order
        })
    
    def get(self):
        order_id = request.args.get('order_id')
        mobile = request.args.get('mobile')

        if order_id:
            response = OrderModel.get_order_by_order_id(order_id)
            if response["error"]:
                return response
            
            order = response["data"]
            return jsonify({
                "error": False,
                "data": order
            })
        
        if mobile:
            response = CustomerModel.get_customer_by_mobile(mobile)
            if response["error"]:
                return response
            
            customer = response["data"]
            response = OrderModel.get_orders_by_customer(customer['id'])
            if response["error"]:
                return response
            
            orders = response["data"]
            return jsonify({
                "error": False,
                "data": orders
            })

