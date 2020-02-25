using System;
namespace ConsoleApp1
{
    class Vehicle
    {
       public int wheels;
       public string model;
        public string country;
        public string color;
        public double price;

       public void start()
        {
            Console.WriteLine("vehicle starting");
        }
        public void brake()
        {
            Console.WriteLine("vehicle braking");
        }
        public void stop()
        {
            Console.WriteLine("vehicle stopping");
        }
        public void refuel()
        {
            Console.WriteLine("vehicle refueling");
        }

        public void display()
        {
            Console.WriteLine("vehicle {0}", model);
            Console.WriteLine("wheels : {0}", wheels);
            Console.WriteLine("country : {0}", country);
            Console.WriteLine("price : {0}", price);
            Console.WriteLine("color : {0}", color);
            Console.WriteLine("----------------------");
        }

    }
}
