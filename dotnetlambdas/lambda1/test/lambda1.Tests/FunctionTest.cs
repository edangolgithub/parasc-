using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Xunit;
using Amazon.Lambda.Core;
using Amazon.Lambda.TestUtilities;

using lambda1;

namespace lambda1.Tests
{
    public class FunctionTest
    {
        [Fact]
        public void TestToUpperFunction()
        {

            // Invoke the lambda function and confirm the string was upper cased.
            var function = new Function();
            var context = new TestLambdaContext();
            var upperCase = function.FunctionHandler("hello world", context);

            Assert.Equal("HELLO WORLD", upperCase);

            
        }
        [Fact]
        public void TestTimeFunction()        {

            // Invoke the lambda function and confirm the string was upper cased.
            var function = new Function();
            var context = new TestLambdaContext();
            
            var x=function.TheTimePlease();
            Console.WriteLine(x);
            //Assert.True(x.Contains("The time is:"));
        }
         [Fact]
        public void TestTimeFunctionapi()        {

            // Invoke the lambda function and confirm the string was upper cased.
            var function = new Function();
            var context = new TestLambdaContext();
            
            var x=function.TheTimePleaseapi();
            Console.WriteLine(x.Body);
             Console.WriteLine(x.StatusCode);
              Console.WriteLine(x.Headers);
            //Assert.True(x.Contains("The time is:"));
        }
    }
}
