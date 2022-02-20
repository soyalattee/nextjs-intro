import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <a href="#">a tag</a>
      <style jsx global>{`
        a {
          color: red;
        }
      `}</style>
    </div>
  );
}
