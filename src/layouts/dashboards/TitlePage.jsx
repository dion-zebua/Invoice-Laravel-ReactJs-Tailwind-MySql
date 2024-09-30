import React from "react";

export default function TitlePage(props) {
  const { title } = props;
  return (
    <div className="bg-gradient-to-r via-30% from-blue-700 via-blue-600 to-blue-700 text-center p-10 pb-20">
      <h1 className="text-slate-200 inline-block border-b-2 border-b-blue-200">
        {title ?? ""}
      </h1>
    </div>
  );
}
