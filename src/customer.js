import React, { useEffect, useState } from "react";
import DefaultLayout from "./DefaultLayout";

export default function Customer() {
  const [customers, setCustomers] = useState(
    JSON.parse(localStorage.getItem("customers")) || []
  );

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  const newCustomers = [...customers];
  const selesai = (idx) => {
    newCustomers.splice(idx, 1);
    setCustomers(newCustomers);
  };

  return (
    <DefaultLayout>
      {customers.length < 1 ? (
        <div>SAAT INI BELUM ADA PESANAN</div>
      ) : (
        <div className="space-y-5">
          {customers.map((item, idx) => (
            <div
              key={idx}
              className="border rounded-lg md:flex justify-between w-full md:w-2/3 mx-auto px-3 md:p-10 bg-red-600 space-y-3"
            >
              <div className="font-bold text-[20px] md:text-[25px] text-[#fff700]">
                <div>Pembeli : {item.customer}</div>
                <div>
                  {item.isBungkus ? "bungkus" : `kursi :  ${item.chair}`}
                </div>
                <div className="">
                  {item.order.map((ord, idx2) => (
                    <div key={idx2} className="border">
                      <div>{ord.nama} </div>
                      <div>{ord.jumlah} </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center md:flex items-center">
                <button
                  className="text-red-600 bg-[#fff700] font-bold text-[20px] md:text-[25px] px-20 md:px-10 py-3 md:py-5 rounded-full"
                  onClick={() => selesai(idx)}
                >
                  SELESAI
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </DefaultLayout>
  );

  // >>button selesai menghapus 1 customer dan pesanannya
  // >>buat function selesai isinya:
  // kasih parameter sebagai index
  // cloning state customers menjadi newCustomers
  // newCustomers.splice(index, 1)
  // simpan perubahan ke dalam setstate >>  setCustomers(newCustomers)
  // >> dalam button selesai kasih onClick diisi function selesai mengirim argument index dari parameter map customer
  // >> but useEffect yang isinya ketika customer ada perubahan maka localStorage setitem "customers" customers
}

// ambil data dari localStorage
// Map
// styling responsive
