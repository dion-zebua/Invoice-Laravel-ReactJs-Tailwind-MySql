"use client";
import fetch from "@/lib/fetch";
import axios from "axios";
import React from "react";
import { useEffect } from "react";

export default function EditForm() {
  useEffect(() => {
    fetch.get("http://127.0.0.1:8000/api/check-login/").then((response) => {
      console.log(response);
    });
  }, []);
  return <div>EditForm</div>;
}
