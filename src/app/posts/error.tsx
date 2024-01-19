"use client";
import React from "react";

function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h1>
        {error.message} <button onClick={reset}>Try again</button>
      </h1>
    </div>
  );
}

export default ErrorBoundary;
