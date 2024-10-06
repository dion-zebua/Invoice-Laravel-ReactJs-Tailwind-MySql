import React from "react";

const brand = "INVOICE";

const phoneNumber = (phoneNumber) => {
  if (phoneNumber.startsWith("0")) {
    return "62" + phoneNumber.slice(1);
  }
  return phoneNumber;
};
const whatsapp =
  "https://api.whatsapp.com/send/?phone=6288289317870&text=Halo+admin,+saya+ingin+buat+invoice...&type=phone_number&app_absent=0";

const limit = (text, limit) => {
  limit = limit || 10;
  const truncatedName =
    text.length > limit ? text.substring(0, limit) + "..." : text;

  return truncatedName;
};

const exportRes = { brand, whatsapp, phoneNumber, limit };
export default exportRes;
