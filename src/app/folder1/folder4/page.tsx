import Link from "next/link";
import React from "react";

function Folder4() {
  return (
    <div>
      Folder4
      <Link href={"/folder1/folder3"}>Go to Folder 3</Link>
      About Me ! <Link href={"/about"}>About me</Link>
    </div>
  );
}

export default Folder4;
