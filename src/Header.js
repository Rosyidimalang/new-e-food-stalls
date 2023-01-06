import React from "react";
import "./App.css";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    name: "Facebook",
    icon: BsFacebook,
    url: "facebook.com/ahmdyabduallah",
    color: "[#323ff5]",
  },
  {
    name: "Youtube",
    icon: BsYoutube,
    url: "/",
    color: "[#fa1b1b]",
  },
  {
    name: "Instagram",
    icon: BsInstagram,
    url: "/",
    color: "[#f60632]",
  },
  {
    name: "Whatsapp",
    icon: BsWhatsapp,
    url: "https://wa.me/6281239495425",
    color: "[#45c747]",
  },
];

export default function Header() {
  const customers = JSON.parse(localStorage.getItem("customers"));
  return (
    <header>
      <div className="flex gap-3 items-center px-[10rem] py-2  bg-[#9be2ea]">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link key={link.name} to={link.url}>
              <Icon className={`text-${link.color}`} />
            </Link>
          );
        })}
      </div>
      <div className="md:grid grid-cols-2 py-2 bg-slate-200">
        <div
          className={` md:px-[10rem] font-bold text-2xl hover:text-yellow-500 text-[#5cc0cb] flex items-center justify-center md:justify-start`}
        >
          <Link to="/index.js">WARMINDO ROSYIDI</Link>
        </div>
        <div className="grid grid-cols-3 font-bold text-[#5cc0cb]">
          <Link
            to="/customer"
            className="border rounded-xl bg-slate-200 py-2 w-[120px] mx-auto text-center hover:text-[#ffff] hover:bg-[#9be2ea]"
          >
            CUSTOMER <span>{customers.length} </span>
          </Link>
          <Link
            to="/"
            className="border rounded-xl bg-slate-200 py-2 w-[120px] mx-auto text-center hover:text-[#ffff] hover:bg-[#9be2ea]"
          >
            HOME
          </Link>
          <Link
            to="/contact.js"
            className="border rounded-xl bg-slate-200 py-2 w-[120px] mx-auto text-center hover:text-[#ffff] hover:bg-[#9be2ea]"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
}
