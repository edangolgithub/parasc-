using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class functions
    {
        //4 types of functions

            //return type
            //parameters

            //1 no return type no parameter
            //2 no retur type yes parameter
            //3 yes return type no parameter
            //4 yes return type yes parameter

        public static void add()
        {
            Console.WriteLine("{0} + {1} = {2}", 10, 20, 10 + 20);
        }

        public static void makemomo(int pitho,int masala, int keema)
        {
            int momo = (pitho * (masala + keema));
            Console.WriteLine(" you can make {0} plates of MoMo with"
                + "{1} kilo pitho with {2} gram masala and {3} kg keema", momo, pitho, masala, keema);
        }
        
    }
}
