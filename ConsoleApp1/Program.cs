using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    
    class Program
    {
        static void Main()
        {

            Vehicle v = new Vehicle();
            v.color = "black";
            v.country = "japan";
            v.model = "toyota";
            v.price = 100000;
            v.wheels = 4;
            v.start();
            v.stop();
            v.display();

            Vehicle v1 = new Vehicle();
            v1.color = "red";
            v1.model = "ferrari";
            v1.country = "italy";
            v1.wheels = 4;
            v1.refuel();
            v1.start();
            v1.display();
        }


       
        
    }
}
