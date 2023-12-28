import React from "react";

function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug.length === 2) {
    return (
      <h1>
        viewing docs for features {params.slug[0]} and Idea {params.slug[1]}
      </h1>
    );
  } else if (params.slug.length === 1) {
    return <h1>Viewing docs for feature {params.slug[0]}</h1>;
  }
  return <h1>Docs Home!</h1>;
}

export default Docs;
