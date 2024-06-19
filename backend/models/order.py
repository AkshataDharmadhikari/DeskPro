from mongo_engine import db
import datetime

class Order(db.Document):
    created_at = db.DateTimeField(default=datetime.datetime.now, required=True)
    order_id = db.StringField(max_length=255, required=True)
    total = db.FloatField(required=True)
    status = db.StringField(max_length=255, required=True)
    products = db.ListField(db.DictField(), required=True)
    customer = db.ReferenceField('Customer', required=True)

    meta = {'collection': 'orders'}

    @classmethod
    def add(cls, args):
        try:
            order = cls(**args)
            order.save()
            return {"error": False, "data": order}
        except Exception as e:
            return {"error": True, "message": str(e)}
        
    @classmethod
    def get_order_by_order_id(cls, order_id):
        try:
            order = cls.objects(order_id=order_id).get()
            return {"error": False, "data": order}
        except Exception as e:
            return {"error": True, "message": str(e)}
        
    @classmethod
    def get_orders_by_customer(cls, id):
        try:
            orders = cls.objects(customer=id)
            # print(orders)

            return {"error": False, "data": orders}
        except Exception as e:
            return {"error": True, "message": str(e)}
