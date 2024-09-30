import React from "react";

const brand = "INVOICE";

const whatsapp =
  "https://api.whatsapp.com/send/?phone=6288289317870&text=Halo+admin,+saya+ingin+buat+invoice...&type=phone_number&app_absent=0";

const phoneNumber = (phoneNumber) => {
  if (phoneNumber.startsWith("0")) {
    return "62" + phoneNumber.slice(1);
  }
  return phoneNumber;
};

const exportRes = { brand, whatsapp, phoneNumber };
export default exportRes;
