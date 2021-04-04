using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace lambda1
{
    public class Function
    {

        /// <summary>
        /// A simple function that takes a string and does a ToUpper
        /// </summary>
        /// <param name="input"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        public string FunctionHandler(string input, ILambdaContext context)
        {
            return input?.ToUpper();
        }
        public string TheTimePlease()
        {
            return "The time is: " + DateTime.Now.ToString("hh:mm:ss");
        }
         public APIGatewayProxyResponse TheTimePleaseapi()
        {          
            LambdaLogger.Log("started 'WhatIsTheTime' method\n");
               
            var response = new APIGatewayProxyResponse
            {
                StatusCode = (int)HttpStatusCode.OK,
                Body = "Hello AWS Serverless! the time is: " + DateTime.Now.ToString("hh:mm:ss"),
                Headers = new Dictionary<string, string> { { "Content-Type", "text/plain" } }
            };

            return response;         
        }
    }
}
