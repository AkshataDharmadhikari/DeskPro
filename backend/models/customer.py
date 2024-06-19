from mongo_engine import db

class Customer(db.Document):
    name = db.StringField(required=True)
    email = db.StringField(required=True)
    mobile = db.StringField(required=True)
    address = db.StringField(required=True)
    customer_id = db.StringField(required=True)

    meta = {"collection": "customers"}

    @classmethod
    def add(cls, args):
        try:
            customer = cls(**args)
            customer.save()
            return {"error": False, "data": customer}
        except Exception as e:
            return {"error": True, "message": str(e)}
        
    @classmethod
    def get_customer_by_mobile(cls, mobile):
        try:
            customer = cls.objects.get(mobile=mobile)
            return {"error": False, "data": customer}
        
        except cls.DoesNotExist:
            return {"error": True, "message": "Customer does not exist"}

        except Exception as e:
            print(str(e))
            return {"error": True, "message": str(e)}
