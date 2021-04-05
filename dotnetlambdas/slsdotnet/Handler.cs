using Amazon.Lambda.Core;

[assembly:LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]
namespace AwsDotnetCsharp
{
    public class Handler
    {
       public Response Hello(Request request)
       {
         string data="";
         switch (request.Key1)
         {
             case "f1":
             data=f1(request.Key2);
             break;
              case "f2":
             data= f2(request.Key2);
             break;


             default:
             break;
         }
           return new Response("Go Serverless v1.0! Your function executed successfully!", data);
       }
       public string f1(string k2)
       {
         return k2+"f1";
       }
        public string f2(string k2)
       {
         return k2+"f2";
       }
    }

    public class Response
    {
      public string Message {get; set;}
      public Request Request {get; set;}
      public string data {get; set;}

      public Response(string message, Request request){
        Message = message;
        Request = request;
      }
      public Response(string message, string data){
        Message = message;
        this.data = data;
      }
    }

    public class Request
    {
      public string Key1 {get; set;}
      public string Key2 {get; set;}
      public string Key3 {get; set;}
    }
}
