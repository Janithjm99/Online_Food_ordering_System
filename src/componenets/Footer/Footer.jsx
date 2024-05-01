import React from "react";

import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/logo.png";

const FooterLinks = [
    {
        id: 1,
        title: "Home",
        links: "#"
        
    },
    {
        id: 2,
        title: "About",
        links: "#"
        
    },
    {
        id: 3,
        title: "Services",
        links: "#"
        
    },
    {
        id: 4,
        title: "Contact US",
        links: "#"
        
    },
]
const Footer = () => {
  return <div data-aos="fade-up" className="bg-gray-100">
    <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
            <div className=" py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3"
                ><img src={footerLogo}alt="" className="w-16"/>
                    Joy Food
                </h1>
                <p>
                Welcome to Joy Food, your go-to destination for delicious meals delivered right to your doorstep. Our user-friendly online ordering system makes it easy to explore our diverse menu and place your order with ease. From mouthwatering classics to exciting new flavors, Joy Food is here to bring joy to your dining experience.{" "}
                </p>
                <br />
                <div className="flex items-center gap-3">
                    <FaLocationArrow />
                    123/B, New York, USA.
                </div>
                <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            
            <div className="flex items-center gap-3 mt-6">
                <a href="#">
                    <FaInstagram className="text-3xl"/>
                </a>
                <a href="#">
                <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                <FaLinkedin className="text-3xl" />
                </a>
            </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                <div>
                    <div className="py-8 px-4">
                        <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3"
                        >Important Links</h1>
                        <ul className={`flex flex-col gap-3`}>
                            {FooterLinks.map((link) => (
                                <li className="hover:text-primary duration-300">
                                    <a href={link.title}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="py-8 px-4">
                        <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3"
                        >Company Links</h1>
                        <ul className={`flex flex-col gap-3`}>
                            {FooterLinks.map((link) => (
                                <li className="hover:text-primary duration-300">
                                    <a href={link.title}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="py-8 px-4">
                        <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3"
                        >Links</h1>
                        <ul className={`flex flex-col gap-3`}>
                            {FooterLinks.map((link) => (
                                <li className="hover:text-primary duration-300">
                                    <a href={link.title}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 || The Joy Food
        </div>
        </div>
    </div>
    </div>
  
};


export default Footer;