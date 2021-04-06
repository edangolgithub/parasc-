using System.Collections.Generic;
using System.Net;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;

[assembly:LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]
namespace AwsDotnetCsharp
{
    public class Handler
    {
       public Response Hello(Request request)
       {
           return new Response("Go Serverless v1.0! Your function executed successfully!", request);
       }
       public string Hello1()
        {
            return "hello";
        }

        public APIGatewayProxyResponse Hello2(object request, ILambdaContext context)
        {
            try
            {
                var req = request as APIGatewayProxyRequest;
            }
            catch (WebException e)
            {
                context.Logger.LogLine(e.Message);
            }
            // Log entries show up in CloudWatch
            context.Logger.LogLine("Example log entry\n");

            var response = new APIGatewayProxyResponse
            {
                StatusCode = (int)HttpStatusCode.OK,
                Body = "{ \"Message\": \"Hello World\" }",
                Headers = new Dictionary<string, string> { { "Content-Type", "application/json" } }
            };

            return response;
        }
    }

    public class Response
    {
      public string Message {get; set;}
      public Request Request {get; set;}

      public Response(string message, Request request){
        Message = message;
        Request = request;
      }
    }

    public class Request
    {
      public string Key1 {get; set;}
      public string Key2 {get; set;}
      public string Key3 {get; set;}
    }
}
