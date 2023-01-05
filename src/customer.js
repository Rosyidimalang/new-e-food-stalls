import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="border bg-slate-300">
      {customers.map((item, idx) => (
        <div>
          <div className="flex gap-5">
            <div>{item.customer}</div>
            <div> {item.isBungkus ? "bungkus" : item.chair} </div>
          </div>
          <div className="grid grid-cols-5">
            {item.order.map((ord, idx2) => (
              <div className="bg-yellow-300">
                <div>{ord.jumlah} </div>
                <div>{ord.nama} </div>
              </div>
            ))}
            <button onClick={() => selesai(idx)}>SELESAI</button>
          </div>
        </div>
      ))}
    </div>
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
