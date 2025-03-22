import React from "react";

export default function FormContainer(props) {
  const { page, children } = props;
  return (
    <div className="custom-container">
      <div className="max-w-[400px] mx-auto shadow-lg rounded-md p-5 border-t-8 border-primary">
        <h2 className="subtitle border-b border-slate-200 mb-5 pb-5">{page}</h2>
        <form action="">
          <div className="grid gap-6">
            {children}
          </div>
        </form>
      </div>
    </div>
  );
}
