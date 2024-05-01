import React from 'react';
import Logo from "../../assets/logo.png";

const NavLinks =[
    {
        id: 1,
        title: "Home",
        link: "/#",
    },
    {
        id: 2,
        title: "About",
        link: "/#about",
    },
    {
        id: 3,
        title: "Menu",
        link: "/#menu",
    },
    {
        id: 4,
        title: "Services",
        link: "/#services",
    },
    {
        id: 5,
        title: "Contact US",
        link: "/#Contact US",
    },
]
const Navbar = () => {
  return (
    <div className="shadow-xl">
        <div className="container py-3 sm:py-0">
            <div className="flex justify-between item-center">

            <div>
            <a href="/#">
                    <img src={Logo} alt="" className="w-16"/>
                </a>
            </div>

            <div className="flex justify-between items-center gap-4">
            <ul className="hidden sm:flex items-center gap-4">
                    {NavLinks.map((link) => (
                        <li key={link.id}>
                            <a className="inline-block
                            py-4 px-4
                            hover:text-primary duration-300"
                            href={link.link}>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className="bg-gradient-to-r from-pink-500 to-red-500 text-while
                px-4 py-1 rounded-full hover:scale-105 duration-200"
                >Order</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;