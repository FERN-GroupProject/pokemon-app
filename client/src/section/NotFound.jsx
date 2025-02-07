import React from "react";
import Error from "../components/Error";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-[#10181E] px-4 ">
      <div className="text-center">
        <Error/>
        <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-4xl text-white">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          We can't find that page.
        </p>
        <div className="flex justify-center mt-4">
        <Link to="/">
        
        <Button color="blue">Go Back!</Button>
        </Link>
        </div>
      </div>
    </div>
  );
}
