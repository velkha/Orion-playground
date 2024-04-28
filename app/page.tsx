'use client'
import Window from "./components/window";
import Folder from "./components/folders/folder";
import React from "react";

export default function Home() {
  //TODO: REMOVE THIS IN THE FINAL VERSION, IT'S JUST FOR TESTING PURPOSES
  const orionToken = typeof window !== 'undefined' ? localStorage.getItem("orion_token") : null;

  return (
    <>
      <Window>
        <h1>Hello, world!</h1>
        <p>Welcome to my application.</p>
        {orionToken && <p>{orionToken}</p>}
      </Window>
      <Folder folder="portfolio" />
    </>
  );
}