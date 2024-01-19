import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

function Comments() {
  return (
    <Card>
      <div>Comments</div>
      <Link href={"/adminDashboard/archived"}>Archived</Link>
    </Card>
  );
}

export default Comments;
