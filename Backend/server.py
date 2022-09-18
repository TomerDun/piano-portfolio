from flask import Flask
from flask_restful import Api, Resource, reqparse
from email_api import send_email
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)

# CORS middleware
CORS(app)
cors = CORS(app, resources={
    r"/*": {'origins': '*'}
})

# Arguments
email_args = reqparse.RequestParser()
email_args.add_argument('to_email', type=str)
email_args.add_argument('from_email', type=str)
email_args.add_argument('subject', type=str)
email_args.add_argument('content', type=str)


class Email (Resource):
    def post(self):       

        args = email_args.parse_args()
        try:
            send_email(args['from_email'], args['to_email'], args['subject'], args['content'])
        except:
            print('--ERROR--')

        print('--sent email--')
        return {'email': args}

# Add endpoints
api.add_resource(Email, '/mail')

if __name__ == "__main__":
    app.run(debug=True)