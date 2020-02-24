using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class old
    {
        public static void fun7()
        {
            for (int i = 1; i <= 5; i++)
            {
                for (int j = 1; j <= i; j++)
                {
                    Console.Write(j);
                }
                Console.WriteLine();
            }

        }
        static void fun1()
        {
            Console.WriteLine("enter a number for multiplication table");
            string a = Console.ReadLine();
            int num = Convert.ToInt32(a);

            for (int i = 1; i <= 10; i++)
            {
                Console.WriteLine("{0} X {1} = {2}", num, i, num * i);
            }

        }

        static void fun2()
        {
            for (int i = 1; i <= 10; i++)
            {
                Console.WriteLine(i * i * i);
            }
        }
        static void fun3()
        {
            int sum = 0;
            for (int i = 1; i < 8; i++)
            {
                Console.WriteLine(i);
                sum = sum + i;
            }
            Console.WriteLine(sum);
        }

        static void fun4()
        {
            //1 2 3 4 5 6 7 8 9 10
            int sum = 1;
            for (int i = 1; i <= 10; i++)
            {
                sum = sum * i;
            }
            Console.WriteLine(sum);
        }

        static void fun8()
        {
           

            for (int i = 1; i <= 10; i = i + 1)
            {
                if (i % 2 == 1)
                {
                    Console.WriteLine(i);
                }

            }
        }




        static void fun5()
        {
            //loop

            // for while do

            //            1 initialization  a = 1
            //2 condition a<10
            //3 increment / decrement  a = a + 1 a = a - 1

            for (int c = 1; c <= 10; c = c + 1)
            {
                Console.WriteLine(c);
            }

            for (int b = 10; b >= 1; b = b - 1)
            {
                Console.WriteLine(b);
                Console.WriteLine("hi");
            }

            int a = 1;
            while (a <= 10)
            {
                Console.WriteLine(a);
                a = a + 1;
            }

            a = 1;

            do
            {
                Console.WriteLine(a);
                a = a + 1;
            } while (a <= 10);

        }



        static void fun6(string[] args)
        {
            //operators

            //arithematic operator  +- / *  %
            //relational == < > <= >= !=
            //logical and or not && || !
            //bitwise &  | ~  ^
            //assignment = += -= *= /= %=

            // operand operator



            if (5 > 10 || 6 <= 3)
            {
                Console.WriteLine("if");
            }
            else
            {
                Console.WriteLine("else");
            }




            int a = 3;
            int b = 4;

            if (a != b)
            {
                Console.WriteLine("if");
            }
            else
            {
                Console.WriteLine("else");
            }


            if (!(5 < 10))
            {
                Console.WriteLine("if");
            }
            else
            {
                Console.WriteLine("else");
            }

            Console.WriteLine(3 ^ 9);

            //11
            //1001
            //-- -
            // 1010

            a = 5;
            a += 5;   // a=a+5;

            a -= 5; // a=a-5;

            a *= 5; // a= a*5;
            a /= 5;
            a %= 3;// a= a % 5;
            Console.WriteLine(a);

            a = 5;

            if (a == 5)
            {

            }
            else if (a == 6)
            {

            }
            else if (a == 7)
            {

            }
            else
            {

            }
            switch (a)
            {
                case 5:
                    break;
                case 6:
                    break;
                case 7:
                    break;
                default:
                    break;
            }
        }
    }
}
