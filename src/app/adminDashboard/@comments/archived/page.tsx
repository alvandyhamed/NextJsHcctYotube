import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

function ArchivedComments() {
  return (
    <Card>
      <div> Archived Comments</div>
      <Link href={"/adminDashboard"}>default</Link>
    </Card>
  );
}

export default ArchivedComments;
