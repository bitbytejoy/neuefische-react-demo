import React from "react";

export default function Greeting ({
  name,
  age = 10,
  onClick,
  children
}: {
  name: string,
  age?: number,
  onClick: (name: string) => void,
  children: React.ReactNode
}) {
  return (
    <div onClick={() => onClick(name)}>
      <div>Hello {name}, age: {age}</div>
      <div>{children}</div>
    </div>
  );
}