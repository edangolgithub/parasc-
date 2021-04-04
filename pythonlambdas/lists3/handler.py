import json
import boto3           # no error



def start(event, context):
    s3 = boto3.resource('s3')
    l=[]
    for bucket in s3.buckets.all():
      l.append(bucket.name)
    body = {
        "buckets": l,
        "input": event
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(body)
    }

    return response

    # Use this code if you don't use the http event with the LAMBDA-PROXY
    # integration
    """
    return {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "event": event
    }
    """
