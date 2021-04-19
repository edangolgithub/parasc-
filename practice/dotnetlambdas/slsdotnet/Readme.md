### APIGatewayProxyRequest
```
{
    "body": "{\"data\":\"toupper\",\"event\":\"toupper\"  }"
}
public APIGatewayProxyResponse FunctionHandler(APIGatewayProxyRequest request, ILambdaContext context)
        {
            JObject bdy = JObject.Parse(request.Body);
            string req = bdy["data"].ToString();
            string res= "";
            switch (bdy["event"].ToString())
            {
                case "tolower":
                    res = tolower(req);
                    break;
                case "toupper":
                    res = toupper(req);
                    break;
                default:
                    res = "what";
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
                Body = res
            };
            return data;
        }
```