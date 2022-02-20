import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
      <a href="#">a tag</a>
      <style jsx>{`
        a {
          color: red;
        }
      `}</style>
    </div>
  );
}
