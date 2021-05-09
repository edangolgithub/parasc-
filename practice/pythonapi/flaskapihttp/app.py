import boto3
from flask import Flask,request
import json


app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/evan")
def evan():
    
    return "Hello evan!"

@app.route('/sendsns')
def sendsns():
    message = {"foo": "bar"}
    sns = boto3.client('sns')
    sns.publish(
       TargetArn='arn:aws:sns:us-east-1:984648741180:EvanFlask',
       Message=json.dumps({'default': json.dumps(message)}),
       MessageStructure='json'
        
    )
    return f'Thanks for stopping by, we are sending a nice text now!'

@app.route('/sendses')
def sendses():
    message = {"hello": "from evan"}
    ses = boto3.client('ses',region_name="us-east-1")
    CHARSET = "UTF-8"
    response =ses.send_email(
        Destination={
            "ToAddresses": [
                "dangolevan@gmail.com",
            ],
        },
        Message={
            "Body": {
                "Text": {
                    "Charset": CHARSET,
                    "Data": "Hello, world! from evan dangol",
                }
            },
            "Subject": {
                "Charset": CHARSET,
                "Data": "This test message aws ses",
            },
        },
        Source="admin@mail.fundnepal.ml")
    return f'Thanks for stopping by, we are sending a nice text now!'

@app.route('/sendsesemail',methods=['GET', 'POST'])
def sendsesemail():
    data= request.json   
    print (data["emails"]) 
    print (data["body"]) 
    print (data["subject"]) 
    ses = boto3.client('ses',region_name="us-east-1")
    CHARSET = "UTF-8"
    #return "jij"
    response =ses.send_email(
        Destination={
            "ToAddresses":data["emails"],
        },
        Message={
            "Body": {
                "Text": {
                    "Charset": CHARSET,
                    "Data": data["body"],
                }
            },
            "Subject": {
                "Charset": CHARSET,
                "Data": data["subject"],
            },
        },
        Source="admin@mail.fundnepal.ml")
    return f'Thanks for stopping by, we are sending a nice text now!'