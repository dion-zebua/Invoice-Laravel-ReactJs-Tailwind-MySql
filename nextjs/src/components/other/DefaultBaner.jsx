import React from "react";

export default function DefaultBaner(props) {
  const { page } = props;
  return (
    <div className="bg-gradient-to-tr from-primary to-blue-400 mb-10 md:mb-14 lg:mb-16">
      <div className="bg-[url(/image/star.svg)] bg-right-bottom bg-[size:160%]">
        <h1 className="title text-white text-center py-10">{page}</h1>
      </div>
    </div>
  );
}
