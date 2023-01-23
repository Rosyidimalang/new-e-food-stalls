import React from "react";

export default function HomeHeader({ setPesanan, newPesanan }) {
  const handleNaming = (e) => {
    newPesanan.customer = e.target.value;
    console.log("nwepwe", newPesanan);
    setPesanan(newPesanan);
  };
  return (
    <div className="md:flex justify-between md:mx-5">
      <div className="py-2 mx-2 flex gap-2 items-center max-w-full font-semibold text-[#0d5489]">
        <div>Pembeli :</div>
        <div className="max-w-full">
          <input
            type="text"
            placeholder="atas nama"
            className="p-1 border border-[#5cc0cb] "
            onChange={handleNaming}
            value={newPesanan.customer}
          />
        </div>
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
              <option key={i} value={i}>
                {" "}
                {i}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
