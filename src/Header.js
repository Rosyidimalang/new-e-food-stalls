import React from "react";
import "./App.css";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Header() {
  const customers = JSON.parse(localStorage.getItem("customers"));
  return (
    <header>
      <div className="flex gap-3 items-center px-[10rem] py-2  bg-[#9be2ea]">
        <div>
          <ul>
            <li>
              <a href="facebook.com/ahmdyabduallah">
                <BsFacebook className="text-[#323ff5]" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="/">
                <BsYoutube className="text-[#fa1b1b]" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="/">
                <BsInstagram className="text-[#f60632]" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="https://wa.me/081239495425">
                <BsWhatsapp className="text-[#45c747]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:grid grid-cols-2 py-2 bg-slate-200">
        <div
          className={` md:px-[10rem] font-bold text-2xl hover:text-yellow-500 text-[#5cc0cb] flex items-center justify-center md:justify-start`}
        >
          <h1>
            <a href="/index.js">WARMINDO ROSYIDI</a>
          </h1>
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
          <div className="border rounded-xl bg-slate-200 py-2 w-[120px] mx-auto text-center hover:text-[#ffff] hover:bg-[#9be2ea]">
            <ul>
              <li>
                <a href="/contact.js">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
