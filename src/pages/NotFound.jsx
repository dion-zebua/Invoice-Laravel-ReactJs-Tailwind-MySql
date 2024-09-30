import React from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center px-5">
      <div className="border rounded-lg shadow w-full bg-white max-w-[360px] md:max-w-[390px] lg:max-w-[420px] p-5 lg:p-7 border-t-8 border-t-blue-600 flex flex-col items-center justify-center">
        <p className="text-6xl font-bold tracking-wider text-gray-300">
          404
        </p>
        <p className="text-2xl font-bold tracking-wider text-gray-500 mt-4">
          Page Not Found
        </p>
        <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
          Maaf, halaman yang Anda cari tidak dapat ditemukan.
        </p>
        <Link to="/" className="w-full mt-5">
          <Button
            size="small"  
            label="Kembali ke Dashbord"
            icon="pi pi-check"
            className="w-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
