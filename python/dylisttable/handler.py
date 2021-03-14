import json
import boto3
from boto3.dynamodb.conditions import Key

TABLE_NAME = "evantable"

# Creating the DynamoDB Client
dynamodb_client = boto3.client('dynamodb', region_name="us-east-1")

# Creating the DynamoDB Table Resource
dynamodb = boto3.resource('dynamodb', region_name="us-east-1")
table = dynamodb.Table(TABLE_NAME)
# Use the DynamoDB Table resource get item method to get a single item
# Use the DynamoDB client to query for all songs by artist Arturus Ardvarkian

def start(event, context):

    res = dynamodb_client.query(
    TableName=TABLE_NAME,
    KeyConditionExpression='evanid = :evanid',
    ExpressionAttributeValues={
        ':evanid': {'S': '2001'}
    } )
    print(res['Items'])
    body = {
        "message": "Go Serverless v1.0! Your function executed successfully!",
        "input": event
    }

    response = {
        "statusCode": 200,
        "body": json.dumps(res["Items"])
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
