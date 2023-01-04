import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Customer() {
  let value = JSON.parse(localStorage.getItem("customers"));
  let prettyData = JSON.stringify(value, null, 2);

  return (
    <div className="border rounded-xl bg-slate-300">
      <pre className="font-mono whitespace-pre-wrap">{prettyData}</pre>;
    </div>
  );

  // let customers = JSON.parse(value)[0];

  // console.log("tes", customers);

  // return (
  //   <div>
  //     {customers.map((customer) => (
  //       <div key={customer.id}>
  //         <p>Nama: {customer.nama}</p>
  //         <p>Alamat: {customer.alamat}</p>
  //       </div>
  //     ))}
  //   </div>
  // );
}

// ambil data dari localStorage
// Map
// styling responsive
