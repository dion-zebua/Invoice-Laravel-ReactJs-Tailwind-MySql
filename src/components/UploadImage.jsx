import React, { useState } from "react";

export default function UploadImage(props) {
  const { onUpload } = props;
  
  const [image, setImage] = useState(null);

  const uploadImageHandle = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="relative mt-1 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
      <div className="text-center group">
        <svg
          className="mx-auto h-12 w-12 text-gray-300"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
            clipRule="evenodd"
          />
        </svg>
        <div className="mt-4 flex text-sm leading-6 text-gray-600">
          <label
            htmlFor="logo"
            className="cursor-pointer rounded-md bg-white font-semibold text-mine focus-within:outline-none focus-within:ring-2 focus-within:ring-mine focus-within:ring-offset-2 hover:text-mine">
            <span>Unggah gambar</span>
            <input
              onChange={uploadImageHandle}
              required
              id="logo"
              accept="image/*"
              name="logo"
              type="file"
              className="opacity-0 absolute inset-0 hover:cursor-pointer"
            />
          </label>
          <p className="pl-1">batas 10mb</p>
        </div>
        <p className="text-xs leading-5 text-gray-600 uppercase">
          jpeg, png, jpg, gif, jfif,&nbsp;
          <span className="lowercase">atau</span> webp
        </p>
      </div>
    </div>
  );
}