using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Xunit;
using Amazon.Lambda.Core;
using Amazon.Lambda.TestUtilities;

using lambda2;
using Amazon.Lambda.APIGatewayEvents;

namespace lambda2.Tests
{
    public class FunctionTest
    {
        [Fact]
        public void TestToUpperFunction()
        {

            // Invoke the lambda function and confirm the string was upper cased.
            var function = new Function();
            var context = new TestLambdaContext();
            var pay=new APIGatewayProxyRequest();
            pay.Body="{'event':'toupper','data':'it works'}";
            
            var response = function.FunctionHandler
            (pay, context);
           Console.Write(response.Body);
            //Assert.Equal("HELLO WORLD", upperCase);
    
        }
    }
}
