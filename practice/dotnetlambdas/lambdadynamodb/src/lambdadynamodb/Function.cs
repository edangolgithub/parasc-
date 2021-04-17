using System;
using System.IO;
using System.Text;

using Amazon.Lambda.Core;
using Amazon.Lambda.DynamoDBEvents;
using Amazon.DynamoDBv2.Model;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace lambdadynamodb
{
    public class Function
    {
        public void FunctionHandler(DynamoDBEvent dynamoEvent, ILambdaContext context)
        {
            context.Logger.LogLine($"Beginning to process {dynamoEvent.Records.Count} records...");
            context.Logger.LogLine("what ever");
            foreach (var record in dynamoEvent.Records)
            {
                Console.WriteLine(record.AwsRegion);
                context.Logger.LogLine(record.Dynamodb.ToString());
                context.Logger.LogLine($"Event ID: {record.EventID}");
                context.Logger.LogLine($"Event Name: {record.EventName}");

                // TODO: Add business logic processing the record.Dynamodb object.
            }

            context.Logger.LogLine("Stream processing complete.");
        }
    }
}