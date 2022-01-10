import React from "react";

export default function Head({ title }) {
  React.useEffect(() => {
    document.title = title ? `Takdir | ${title}` : "Takdir";
  }, [title]);
  return null;
}
