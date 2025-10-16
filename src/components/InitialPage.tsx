"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import InitialLoading from "./InitialLoading";

const InitialPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home?initial=true");
    }, 3200);
  }, []);

  return (
    <div>
      <InitialLoading />
    </div>
  );
};

export default InitialPage;
