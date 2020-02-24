using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class array
    {
        public static void fun1()
        {
            int[] x = { 1, 2, 3, 4, 51, 6, 7, 8, 9 };
            for (int i = 0; i <= x.Length-1; i++)
            {
                Console.WriteLine(x[i]);
            }
        }

        public static void fun2()
        {
            //123
            //456
            //789
            int[,] x = { {1,2,3 },{ 4, 5, 6 },{ 7, 8, 9 } };

            for (int row = 0; row < 3; row++)
            {
                for (int col = 0; col < 3; col++)
                {
                    Console.Write(x[row, col]);
                }
                Console.WriteLine();
            }

        }
    }
}
