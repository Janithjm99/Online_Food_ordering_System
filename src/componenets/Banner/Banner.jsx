import React from "react";
import { IoFastFood } from "react-icons/io5";
import { MdSecurity, MdSendToMobile } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import PizzachefImg from "../../assets/Products/Pizzachef.png";

const Banner = () => {
  return <div className="min-h-[550px]">
    <div className="min-h-[550px] flex justify-center items-center">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div data-aos="flip-up">
                <img src={PizzachefImg} alt="" 
                    className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
                </div>
                <div className="flex flex-col justify-center gap-6 sm:pt-0">
                    <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">Buy 2 Pizza get 1 Free!</h1>
                    <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">
                    Embark on a flavor-filled journey with our special offer: "Buy 2 Pizzas, Get 1 Free!" Indulge in our mouthwatering selection of gourmet pizzas, each crafted with the finest ingredients and bursting with flavor. Whether you're craving a classic Margherita or a savory Meat Lover's, there's something for everyone to enjoy.
                  <br />
                  <br />
                  With this exclusive deal, you can treat yourself to two of your favorite pizzas and receive an extra one on the house. It's the perfect opportunity to gather with friends and family, share a delicious meal, and create lasting memories together. Don't miss out on this incredible offer—come and experience pizza perfection today!
                  </p>
                  <div className="flex gap-6">
                    <div data-aos="fade-up">
                        <MdSecurity className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200">
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100" /> 
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400">
                    <TbTruckDelivery className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100" />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600">
                    <MdSendToMobile className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-blue-100" />
                    </div>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="700">
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                        Order Now
                    </button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </div>;

};

export default Banner;