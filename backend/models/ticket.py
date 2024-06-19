from mongo_engine import db
import datetime

class Ticket(db.Document):
    created_at = db.DateTimeField(default=datetime.datetime.utcnow)
    ticket_id = db.StringField(required=True)
    customer_id = db.StringField(required=True)
    order_id = db.StringField(required=True)
    customer_query = db.StringField(required=True)
    sentiment = db.StringField(required=True)
    emotions = db.StringField()
    status = db.StringField(required=True)
    assigned_to = db.ReferenceField('Employee')
    assigned_to_name = db.StringField()
    assigned_to_id = db.StringField()
    messages = db.ListField(db.DictField(), default=[])
    
    meta = {"collection": "tickets"}

    @classmethod
    def add_single_ticket(cls, args):
        try:
            # find the length of tickets
            args['ticket_id'] = str(Ticket.objects.count() + 1 + 1000)
            ticket = Ticket(**args)
            ticket.save()
            return {"error": False, "data": ticket}
        
        except Exception as e:
            return {"error": True, "message": str(e)}
        
    @classmethod
    def get_single_ticket(cls, args):
        try:
            ticket = Ticket.objects.get(ticket_id=args['ticket_id'])
            print(ticket)
            return {"error": False, "data": ticket}
        
        except cls.DoesNotExist:
            return {"error": True, "message": "Ticket does not exist"}
        
        except Exception as e:
            return {"error": True, "message": str(e)}
        
    @classmethod
    def get_all_tickets(cls):
        try:
            tickets = cls.objects()
            return {"error": False, "data": tickets}
        except Exception as e:
            return {"error": True, "message": str(e)}
        
    @classmethod
    def update_ticket_status(cls, args):
        try:
            ticket = Ticket.objects.get(ticket_id=args['ticket_id'])
            ticket.status = args['status']
            ticket.save()
            return {"error": False, "data": ticket}
        
        except cls.DoesNotExist:
            return {"error": True, "message": "Ticket does not exist"}
        
        except Exception as e:
            return {"error": True, "message": str(e)}
        
    @classmethod
    def add_message(cls, args):
        try:
            ticket = Ticket.objects.get(ticket_id=args['ticket_id'])
            ticket.messages.append(args['message'])
            ticket.save()
            return {"error": False, "data": ticket}
        
        except cls.DoesNotExist:
            return {"error": True, "message": "Ticket does not exist"}
        
        except Exception as e:
            return {"error": True, "message": str(e)}
        
    @classmethod
    def get_messages(cls, ticket_id):
        try:
            ticket = Ticket.objects.get(ticket_id=ticket_id)
            return {"error": False, "data": ticket.messages}
        
        except cls.DoesNotExist:
            return {"error": True, "message": "Ticket does not exist"}
        
        except Exception as e:
            return {"error": True, "message": str(e)}
        
    @classmethod
    def get_tickets_by_customer(cls, args):
        try:
            tickets = cls.objects(customer_id=args['customer_id'])
            return {"error": False, "data": tickets}
        
        except Exception as e:
            return {"error": True, "message": str(e)}
        
    @classmethod
    def get_tickets_by_employee(cls, employee_id):
        try:
            tickets = cls.objects(assigned_to=employee_id)
            return {"error": False, "data": tickets}
        
        except Exception as e:
            return {"error": True, "message": str(e)}