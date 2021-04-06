using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace lambda2
{
    public class Function
    {

        /// <summary>
        /// A simple function that takes a string and does a ToUpper
        /// </summary>
        /// <param name="input"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        public APIGatewayProxyResponse FunctionHandler(APIGatewayProxyRequest request, ILambdaContext context)
        {
            // var abc = JsonConvert.SerializeObject(request);

            JObject bdy = JObject.Parse(request.Body);
            string req = bdy["data"].ToString();
            switch (bdy["event"].ToString())
            {
                case "tolower":
                    req = tolower(req);
                    break;
                case "toupper":
                    req = toupper(req);
                    break;
                default:
                    req = "what";
                    break;
            }

            var data = new APIGatewayProxyResponse
            {
                StatusCode = 200,
                Headers =
                     new Dictionary<string, string>
                      {
                          { "Content-Type", "application/json" },
                          { "Access-Control-Allow-Origin","*"}
                       },
                Body = req
            };
            return data;
        }

        public string toupper(string data)
        {
            return data.ToUpper();
        }
        public string tolower(string data)
        {
            return data.ToLower();
        }
    }
}
