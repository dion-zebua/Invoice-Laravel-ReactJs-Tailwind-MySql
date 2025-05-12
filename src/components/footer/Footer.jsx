import React from "react";

export default function Footer() {
  return (
    <div className="mt-20 p-5 bg-slate-100">
      <div className="max-w-[400px] text-center mx-auto text-slate-700">
        <p className="text-sm">
          © Developed by{" "}
          <a
            className="underline text-primary hover:text-slate-700"
            href="https://dionzebua.com"
            target="_blank">
            Dion Zebua
          </a>
        </p>
      </div>
    </div>
  );
}
