import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-white flex items-center justify-between shadow rounded-lg p-4 m-5 text-sm">
        <p className="text-gray-500">
          Kembali ke halaman{" "}
          <a
            className="underline"
            href="https://dionzebua.com/umroh">
            HQ Tour Travel
          </a>
        </p>
        <a
          href="mailto:info@mantapumroh.co.id"
          className="border-l-2 ps-3 text-gray-500 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
          </svg>
        </a>
      </footer>
      <p className="text-center text-sm text-gray-500 my-10 px-4">
        <span className="block text-sm text-gray-500 text-center mb-4">
          © 2024{" "}
          <a
            href="https://dionzebua.com/umroh"
            className="hover:underline">
            HQ Tour Travel
          </a>
          . All Rights Reserved.
        </span>
      </p>
    </>
  );
}
