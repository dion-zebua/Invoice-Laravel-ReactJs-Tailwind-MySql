import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import Layout from "../layouts/dashboards/Layout";
import { AuthContext } from "../hooks/AuthContext";

const Logout = (props) => {
  const isLogin = useContext(AuthContext);
  const { className } = props;
  return (
    <div
      className={`${className} w-full h-screen flex items-center justify-center px-5`}>
      <div className="border rounded-lg shadow w-full bg-white max-w-[360px] md:max-w-[390px] lg:max-w-[420px] p-5 lg:p-7 border-t-8 border-t-blue-600 flex flex-col items-center justify-center">
        <p className="text-6xl font-bold tracking-wider text-gray-300">404</p>
        <p className="text-2xl font-bold tracking-wider text-gray-500 mt-4">
          Page Not Found
        </p>
        <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
          Maaf, halaman yang Anda cari tidak dapat ditemukan.
        </p>
        <Link
          to={isLogin.login ? "/" : "/login"}
          className="w-full mt-5">
          <Button
            size="small"
            label={isLogin.login ? "Ke Halaman Dashbord" : "Ke Halaman Login"}
            icon="pi pi-check"
            className="w-full"
          />
        </Link>
      </div>
    </div>
  );
};
const Login = () => {
  return (
    <Layout title="Not Found">
      <Logout className="!h-auto !py-20" />
    </Layout>
  );
};

const NotFound = () => {
  const isLogin = useContext(AuthContext);

  return isLogin.login ? <Login /> : <Logout />;
};

export default NotFound;
