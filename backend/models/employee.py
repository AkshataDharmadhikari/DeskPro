from mongo_engine import db

class Employee(db.Document):
    name = db.StringField(required=True)
    email = db.StringField(required=True)
    mobile = db.StringField(required=True)
    employee_id = db.StringField(required=True)
    department = db.StringField(required=True)
    designation = db.StringField(required=True)
    rank = db.StringField(required=True)
    engaged = db.BooleanField(default=False)

    meta = {"collection": "employees"}

    @classmethod
    def add_single_employee(cls, args):
        try:
            employee = Employee(**args)
            employee.save()
            return {"error": False, "data": employee}
        
        except Exception as e:
            return {"error": True, "message": str(e)}
        

    @classmethod
    def get_single_employee(cls, args):
        try:
            employee = Employee.objects.get(employee_id=args['employee_id'])
            return {"error": False, "data": employee}
        
        except cls.DoesNotExist:
            return {"error": True, "message": "Employee does not exist"}
        
        except Exception as e:
            return {"error": True, "message": str(e)}
        
    @classmethod
    def get_all_employees(cls):
        try:
            employees = cls.objects()
            return {"error": False, "data": employees}
        
        except Exception as e:
            return {"error": True, "message": str(e)}
        
    @classmethod
    def update_employee_status(cls, id, engaged):
        try:
            employee = cls.objects.get(id=id)
            employee.update(engaged=engaged)
            return {"error": False, "data": employee}
        
        except cls.DoesNotExist:
            return {"error": True, "message": "Employee does not exist"}
        
        except Exception as e:
            return {"error": True, "message": str(e)}

