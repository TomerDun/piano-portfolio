import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import json

def get_secrets():
    # Get secrets from local secrets file (if hosted locally)
    username = ''
    password = ''
    with open('./secrets.json', 'r') as f:
        content = json.load(f)
        username = content['username']
        password = content['password']

    return (username, password)

def send_email(from_email, to_emails, subject, content):
    username, password = get_secrets()

    # Format parameters
    to_list = to_emails
    if isinstance(to_emails, list):
        to_list = ",".join(to_emails)

    # Create message
    msg = MIMEMultipart('alternative')
    msg['From'] = from_email
    msg['to'] = to_list
    msg['Subject'] = subject
    body = MIMEText(content, 'plain')
    msg.attach(body)

    msg_str = msg.as_string()

    # Make smtp connection and send email
    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.ehlo()
        server.starttls()        
        server.login(username, password)   
        print('--connection established--') 

        server.sendmail(from_email, to_emails, msg_str)
    
    print('email sent')