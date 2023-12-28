"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Shopping() {
  const router = useRouter();
  const handleClick = () => {
    router.forward();
  };
  return (
    <>
      <div>Shopping Cart</div>;<button onClick={handleClick}>Done!</button>
    </>
  );
}

export default Shopping;
