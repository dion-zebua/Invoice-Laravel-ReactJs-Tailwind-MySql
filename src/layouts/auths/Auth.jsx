import React from "react";
import { Button } from "primereact/button";

const Auth = (props) => {
  const { title, children, footer } = props;
  return (
    <>
      <div className="py-20 min-h-full w-full grid place-items-center px-5 bg-blue-50">
        <div className="border rounded-lg shadow w-full bg-white max-w-[360px] md:max-w-[390px] lg:max-w-[420px] p-5 lg:p-7 border-t-8 border-t-blue-600">
          <h1 className="border-b pb-2">Silahkan {title}</h1>
          <form
            className="!grid-cols-1 mt-2 grid sm:grid-cols-2 gap-4 lg:gap-5">
            <div className="mt-5 grid grid-cols-1 gap-y-4 lg:gap-y-5">
              {children}
              <Button type="submit"  className="mt-3 bg-blue-600 hover:bg-blue-700 py-2" label="Login" />

              {footer ?? ""}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Auth;
