import React from "react";

export default function FormLandingPage(props) {
  const { pageTitle, children, onSubmit } = props;
  return (
    <div className="custom-container">
      <div className="max-w-[400px] mx-auto shadow-lg rounded-md p-5 border-t-8 border-primary">
        <h2 className="subtitle border-b mb-5 pb-5">{pageTitle}</h2>
        <form onSubmit={onSubmit}>
          <div className="grid gap-6">{children}</div>
        </form>
      </div>
    </div>
  );
}
