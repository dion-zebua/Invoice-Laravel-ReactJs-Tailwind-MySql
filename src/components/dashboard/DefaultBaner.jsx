import React from "react";

export default function DefaultBaner(props) {
  const { page } = props;
  return (
    <div className="bg-gradient-to-tr from-primary to-blue-400 p-4">
      <div className="bg-[url(/image/star.svg)] bg-left-bottom bg-[size:70%]">
        <h1 className="title text-white text-center py-7 pb-14">{page}</h1>
      </div>
    </div>
  );
}
