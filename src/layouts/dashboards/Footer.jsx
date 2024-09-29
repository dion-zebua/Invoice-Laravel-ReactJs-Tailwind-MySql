import React from "react";
import globalFunction from "../../helpers/GLobalFunction";

export default function Footer() {
  return (
    <>
      <footer className="bg-white flex items-center justify-between shadow rounded-lg p-4 m-5 text-sm">
        <p className="text-gray-500">
          Kembali ke Dasboard&nbsp;
          <a
            className="underline"
            href="/"></a>
        </p>
        <a
          href={globalFunction.whatsapp}
          className="border-l-2 ps-3 text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
        </a>
      </footer>
      <p className="text-center text-gray-500 my-10 px-4">
        <span className="block text-gray-500 text-center mb-4">
          © {new Date().getFullYear()}&nbsp;
          {globalFunction.brand}. All Rights Reserved.
        </span>
      </p>
    </>
  );
}
