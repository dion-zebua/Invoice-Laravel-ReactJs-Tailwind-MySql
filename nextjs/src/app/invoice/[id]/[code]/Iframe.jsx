"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

export default function Iframe(props) {
  const { id, code } = props;
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="custom-container py-4 h-dvh w-full">
      {isLoading && (
        <Skeleton className="bg-slate-300 duration-1000 h-full w-full" />
      )}
      <iframe
        src={`${process.env.NEXT_PUBLIC_APP_URL_BACKEND}invoice/${id}/${code}/stream/`}
        className="w-full h-full rounded-md"
        onLoad={handleIframeLoad}
        style={{ display: isLoading ? "none" : "block" }}></iframe>
    </div>
  );
}
