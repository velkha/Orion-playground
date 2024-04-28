'use client'
import Window from "../../../components/window";
import Folder from "../../../components/folders/folder";
import React from "react";

export default function profile() {
  const orionToken = typeof window !== 'undefined' ? localStorage.getItem("orion_token") : null;

  return (
    <>
        <h1>Welcome to the profile</h1>
        {orionToken && <p>{orionToken}</p>}
    </>
  );
}