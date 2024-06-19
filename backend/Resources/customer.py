from flask import jsonify, request
from flask_restful import Resource, reqparse
from models.customer import Customer as CustomerModel

class Customer(Resource):

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True, help="Name is required")
        parser.add_argument('email', type=str, required=True, help="Email is required")
        parser.add_argument('mobile', type=str, required=True, help="Mobile is required")
        parser.add_argument('address', type=str, required=True, help="Address is required")
        args = parser.parse_args()

        response = CustomerModel.add(args)
        if response["error"]:
            return response
        
        customer = response["data"]

        return jsonify({
            "error": False,
            "data": customer
        })
    
    def get(self):
        mobile = request.args.get('mobile')
        if not mobile:
            return jsonify({
                "error": True,
                "message": "Mobile is required"
            })
        
        response = CustomerModel.get_customer_by_mobile(mobile=mobile)
        if response["error"]:
            return response
        
        customer = response["data"]

        return jsonify({
            "error": False,
            "data": customer
        })