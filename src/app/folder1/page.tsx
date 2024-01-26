import Link from "next/link";
import React from "react";

function Folder1() {
  return (
    <div>
      Folder1
      <Link href={"/folder1/folder2"}>Go to Folder 2</Link>
    </div>
  );
}

export default Folder1;
