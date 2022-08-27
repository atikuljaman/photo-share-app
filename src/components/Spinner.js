import React from "react";
import { Circles } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Circles
        type="Circles"
        color="#EF4444"
        height={50}
        width={200}
        className="m-5"
      />
      <p className="text-lg mt-3 text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
