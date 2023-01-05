import React, { useState } from "react";

export default function HomeHeader({ setPesanan, newPesanan }) {
  const handleNaming = (e) => {
    newPesanan.customer = e.target.value;
    console.log("nwepwe", newPesanan);
    setPesanan(newPesanan);
  };
  return (
    <div className="md:grid grid-cols-4">
      <div className="py-2 mx-2 flex gap-2 items-center justify-start font-semibold text-[#0d5489]">
        Pembeli :
        <input
          type="text"
          placeholder="atas nama"
          className="ml-1 pl-1 py-1 border border-[#5cc0cb]"
          onChange={handleNaming}
          value={newPesanan.customer}
        />
      </div>
      <div className="py-2 mx-2 flex items-center font-semibold text-[#0d5489] justify-start">
        <input
          onChange={(e) => {
            newPesanan.isBungkus = e.target.checked;
            setPesanan(newPesanan);
          }}
          type={"checkbox"}
        />
        <label className="ml-2">BUNGKUS</label>
      </div>
      <div className="py-2 mx-2 flex items-center font-semibold text-[#0d5489] justify-start">
        <label>TEMPAT DUDUK :</label>
        <select
          onChange={(e) => {
            newPesanan.chair = e.target.value;
            setPesanan(newPesanan);
          }}
          className="ml-2 px-4 py-1 border border-[#5cc0cb]"
        >
          <option>---</option>
          {Array(10)
            .fill(null)
            .map((v, i) => (
              <option value={i}> {i}</option>
            ))}
        </select>
      </div>
      <button className="py-2 flex items-center justify-center shadow w-[120px] mx-auto hover:shadow hover:bg-[#9be2ea] font-semibold text-[#0d5489] hover:text-[#ffff]">
        BATAL LOGIN
      </button>
    </div>
  );
}
