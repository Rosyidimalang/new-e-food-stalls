import React from "react";
import { ReactDOM } from "react";
import "./App.css";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

export default function Header() {
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
              <a href="#">
                <BsYoutube className="text-[#fa1b1b]" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#">
                <BsInstagram className="text-[#f60632]" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="wa.me/081239495425">
                <BsWhatsapp className="text-[#45c747]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-2 py-2 bg-slate-200">
        <div className={` md:px-[10rem] font-bold text-2xl hover:text-yellow-500 text-[#5cc0cb] flex items-center`}>
          <h1>
            <a href="/index.js">WARMINDO H2</a>
          </h1>
        </div>
        <div className="grid grid-cols-3 font-bold text-[#5cc0cb]">
          <div className="border rounded-xl bg-slate-200 py-2 w-[120px] mx-auto text-center hover:text-[#ffff] hover:bg-[#9be2ea]">
            <ul>
              <li>
                <a href="/index.js">HOME</a>
              </li>
            </ul>
          </div>
          <div className="border rounded-xl bg-slate-200 py-2 w-[120px] mx-auto text-center hover:text-[#ffff] hover:bg-[#9be2ea]">
            <ul>
              <li>
                <a href="/produck.js">PRODUCK</a>
              </li>
            </ul>
          </div>
          <div className="border rounded-xl bg-slate-200 py-2 w-[120px] mx-auto text-center hover:text-[#ffff] hover:bg-[#9be2ea]">
            <ul>
              <li>
                <a href="/contact.js">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="block md:hidden">MENUS</div>
      <div className="grid grid-cols-4">
        <div className="py-2 flex gap-2 items-center justify-center font-semibold text-[#0d5489]">
          Pembeli :
          <input type={onchange} placeholder="atas nama" className="ml-1 pl-1 py-1 border border-[#5cc0cb]" />
        </div>
        <div className="py-2 mx-2 flex items-center font-semibold text-[#0d5489] justify-end">
          <input type={"checkbox"} />
          <label className="ml-2">BUNGKUS</label>
        </div>
        <div className="py-2 mx-2 flex items-center font-semibold text-[#0d5489] justify-end">
          <label>TEMPAT DUDUK :</label>
          <input type={"number"} min={"1"} max={"10"} className="ml-1 pl-1 py-1 border border-[#5cc0cb]" />
        </div>
        <div className=" py-2 hidden md:flex items-center justify-center shadow w-[120px] mx-auto hover:shadow hover:bg-[#9be2ea] font-semibold text-[#0d5489] hover:text-[#ffff]">
          <button className="">BATAL LOGIN</button>
        </div>
      </div>
    </header>
  );
}
