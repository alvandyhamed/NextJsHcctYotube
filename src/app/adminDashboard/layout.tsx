import React from "react";

function DashboardLayout({
  children,
  users,
  payments,
  comments,
}: {
  children: React.ReactNode;

  users: React.ReactNode;
  payments: React.ReactNode;
  comments: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{payments}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{comments}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
