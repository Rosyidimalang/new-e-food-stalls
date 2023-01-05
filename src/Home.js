import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { HiMinusCircle } from "react-icons/hi";
import { HiPlusCircle } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { animation } from "./utils/constant";
import Header from "./Header";

const menus = ["makanan", "minuman", "lainnya"];
const product = {
  makanan: [
    { nama: "Sate Ayam", harga: 16000, gambar: "sate-ayam.jpg" },
    {
      nama: "Nasi Goreng Telur",
      harga: 14000,
      gambar: "nasi-goreng-telor.jpg",
    },
    { nama: "Nasi Rames", harga: 12000, gambar: "nasi-rames.jpg" },
    {
      nama: "Lontong Opor Ayam",
      harga: 18000,
      gambar: "lontong-opor-ayam.jpg",
    },
    { nama: "Mie Goreng", harga: 13000, gambar: "mie-goreng.jpg" },
    { nama: "Bakso", harga: 10000, gambar: "bakso.jpg" },
    { nama: "Mie Ayam Bakso", harga: 14000, gambar: "mie-ayam-bakso.jpg" },
  ],
  minuman: [
    { nama: "Coffe Late", harga: 15000, gambar: "coffe-late.jpg" },
    { nama: "Es Jeruk", harga: 7000, gambar: "es-jeruk.jpg" },
    { nama: "Es Teh", harga: 5000, gambar: "es-teh.jpg" },
    { nama: "Teh Hangat", harga: 3000, gambar: "teh-hangat.jpg" },
  ],
  lainnya: [
    { nama: "Pangsit 6 pcs", harga: 5000, gambar: "pangsit.jpg" },
    { nama: "Kentang Goreng", harga: 5000, gambar: "kentang-goreng.jpg" },
    { nama: "Cheese Burger", harga: 15000, gambar: "cheese-burger.jpg" },
  ],
};

export default function Home() {
  const [pesanan, setPesanan] = useState(
    JSON.parse(localStorage.getItem("currentCustomer")) || {
      customer: "",
      order: [],
      chair: "",
      isBungkus: false,
    }
  );

  useEffect(() => {
    localStorage.setItem("currentCustomer", JSON.stringify(pesanan));
  }, [pesanan]);

  const [selectedMenu, setSelectedMenud] = useState("makanan");
  const [tampilPesanan, settampilPesanan] = useState(true);
  const newPesanan = { ...pesanan };
  const newOrder = newPesanan.order;
  console.log("ore", newOrder);

  const tambahkankepesanan = (valueyangdiklik) => {
    const sudahAda = newOrder.find(
      (value) => value.nama === valueyangdiklik.nama
    );
    if (!sudahAda) {
      newOrder.push({
        ...valueyangdiklik,
        jumlah: 1,
        total: valueyangdiklik.harga,
      });
    } else {
      sudahAda.jumlah++;
      sudahAda.total += sudahAda.harga;
    }
    setPesanan(newPesanan);
  };

  const plus = (idx) => {
    newOrder[idx].jumlah++;
    newOrder[idx].total += newOrder[idx].harga;
    setPesanan(newPesanan);
  };
  const minus = (idx) => {
    newOrder[idx].jumlah--;
    newOrder[idx].total -= newOrder[idx].harga;
    setPesanan(newPesanan);
  };
  const hapus = (idx) => {
    newOrder.splice(idx, 1);
    setPesanan(newPesanan);
  };
  const showKet = (idx) => {
    newOrder[idx].tampilkanKet = true;
    setPesanan(newPesanan);
  };
  const hideKet = (idx) => {
    newOrder[idx].tampilkanKet = false;
    setPesanan(newPesanan);
  };
  const allTotal = newOrder.reduce(
    (akumulator, currentValue) => akumulator + currentValue.total,
    0
  );

  const checkout = () => {
    const allCustomers = JSON.parse(localStorage.getItem("customers")) || [];
    const currentCustomer =
      JSON.parse(localStorage.getItem("currentCustomer")) || {};
    allCustomers.push(currentCustomer);

    localStorage.setItem("customers", JSON.stringify(allCustomers));

    // utk resest currentCustomer
    setPesanan({ customer: "", order: [], chair: "", isBungkus: false });
  };
  return (
    <div>
      <Header newPesanan={newPesanan} setPesanan={setPesanan} />
      <div className="flex flex-col md:grid grid-cols-10 gap-3">
        <div className="order-2 md:order-1">
          <div className=" font-bold text-[18px] text-[#0d5489] mb-3 shadow bg-slate-200 text-center py-2 px-2">
            KATEGORI
          </div>
          <div className=" grid grid-cols-3 md:grid-cols-1 ">
            {menus.map((value, index) => (
              <button
                onClick={() => setSelectedMenud(value)}
                className="font-bold text-[18px] text-[#fff700] mb-2 shadow bg-red-600 py-2 text-center rounded-sm hover:bg-red-300 hover:text-[#f5f3ad]"
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="col-span-6 order-3 md:order-2">
          <div className="font-bold text-[18px] text-[#0d5489] mb-3 shadow bg-slate-200 text-center py-2 px-2">
            PRODUK
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 ">
            {product[selectedMenu].map((value, index) => (
              <div
                onClick={() => tambahkankepesanan(value)}
                className={`${animation} bg-red-600 text-center p-4 rounded-lg space-y-6 `}
              >
                <img
                  src={value.gambar}
                  alt="gambar"
                  className="w-full h-40 rounded-lg"
                />
                <div className="space-y-2">
                  <div className="bg-[#e7fb04] rounded-sm">
                    <div className="font-bold text-[17px] text-[#2b8018]">
                      {value.nama}
                    </div>
                  </div>
                  <div className="font-bold text-[18px] text-[#fff700]">
                    {value.harga}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 space-y-5 order-1 md:order-3">
          <div className="font-bold text-[18px] text-[#0d5489] mb-3 shadow bg-slate-200 text-center py-2 px-2">
            PESANAN : <span className="text-red-400">{pesanan.length} </span>{" "}
          </div>
          <div className="flex justify-end mr-5 md:hidden">
            <button
              onClick={() => settampilPesanan(!tampilPesanan)}
              className="font-bold text-[18px] text-red-700 shadow bg-[#30fb02] py-2 px-2 text-center rounded-sm hover:bg-red-300 hover:text-[#30fb02]"
            >{`${tampilPesanan ? "Hide" : "Tampilkan"}  Pesanan`}</button>
          </div>
          <div className="space-y-6">
            <div className="flex justify-center space-x-3">
              <div className="font-bold text-[22px]">Total</div>
              <di className="font-bold text-[22px]">:</di>
              <div className="font-bold text-[22px]">Rp {allTotal}</div>
            </div>
            <div className="flex justify-center">
              <button
                disabled={
                  pesanan.customer === "" ||
                  (pesanan.order.length === 0 && pesanan.chair === "")
                }
                onClick={checkout}
                className=" shadow bg-[#ef2916] py-2 rounded-full font-bold text-[22px] text-[#fff700] w-4/5 hover:bg-red-300 hover:text-[#f5f3ad] "
              >
                Checkout
              </button>
            </div>
          </div>
          {tampilPesanan &&
            pesanan.order.map((value, index) => (
              <div className="bg-[#06ed9c] p-5 space-y-2 w-4/5 mx-auto rounded-lg">
                <div>
                  <div className="flex justify-between items-center ">
                    <div className="font-bold text-[18px] text-red-900 max-w-[100px] ">
                      {value.nama}
                    </div>

                    <button
                      className="font-bold text-[25px] text-red-900"
                      disabled={value.jumlah === 1}
                      onClick={() => minus(index)}
                    >
                      <HiMinusCircle />
                    </button>
                    <div className="font-bold text-[23px] text-red-900">
                      {value.jumlah}
                    </div>
                    <button
                      className="font-bold text-[25px] text-red-900"
                      disabled={value.jumlah === 10}
                      onClick={() => plus(index)}
                    >
                      <HiPlusCircle />
                    </button>
                    <div className="font-bold text-[20px] text-red-900">
                      {value.total}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="font-bold text-[20px] text-red-900">
                    @{value.harga}
                  </div>
                  <button
                    className="font-bold text-[22px] text-red-900"
                    onClick={() => hapus(index)}
                  >
                    <FaTrash />
                  </button>
                  <button
                    className="font-bold text-[22px] text-red-900"
                    onClick={() => showKet(index)}
                  >
                    <BsChevronDown />
                  </button>
                </div>
                {value.tampilkanKet && (
                  <div className="flex gap-4">
                    <input
                      className="border rounded-lg w-full px-3 py-1"
                      placeholder="tambahkan keterangan"
                    ></input>
                    <button
                      className="font-bold text-[18px] text-red-900"
                      onClick={() => hideKet(index)}
                    >
                      <RiDeleteBack2Fill />
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
