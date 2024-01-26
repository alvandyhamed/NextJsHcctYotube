import React, { ReactNode } from "react";

function DashboardLayout({
  children,
  users,
  payments,
  comments,
  login,
}: {
  children: React.ReactNode;

  users: React.ReactNode;
  payments: React.ReactNode;
  comments: React.ReactNode;
  login: ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
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
  ) : (
    <div>{login}</div>
  );
}

export default DashboardLayout;
