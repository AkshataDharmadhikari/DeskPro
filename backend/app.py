from flask import Flask
from flask_socketio import SocketIO,send
from flask_cors import CORS
from flask import Flask
from flask_restful import Api
from dotenv import load_dotenv
import os
from mongo_engine import db
from flask_cors import CORS

from Resources.employee import Employee
from Resources.ticket import Ticket
from Resources.order import Order
from Resources.customer import Customer
from Resources.conversation import Conversation

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
socketio = SocketIO(app,cors_allowed_origins="*")

@socketio.on('send_message')
def handle_message(json_data):
    text = str(json_data["message"]).encode("ascii","ignore").decode("utf-8")
    print("Received message:", text)
    send(text,broadcast=True,include_self=False)

load_dotenv()
app.config['MONGODB_HOST'] = os.getenv('MONGODB_URI')

db.init_app(app)
api = Api(app)

api.add_resource(Employee, '/employee')
api.add_resource(Ticket, '/ticket')
api.add_resource(Order, '/order')
api.add_resource(Customer, '/customer')
api.add_resource(Conversation, '/conversation')


@app.route('/check')
def check():
    return "Checking"

if __name__ == '__main__':
    socketio.run(app, debug=True)  # Enable debug mode for development
