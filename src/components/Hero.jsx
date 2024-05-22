import React from "react";

const Hero = () => {
  return (
    <div id="home" className="container mx-auto border-2 border-red-600 ">
      <div className="border-2 border-violet-600 items-center flex justify-center w-full h-[600px]">
        <div className="text-center space-y-7 flex-col border-2 border-yellow-300">
          <h1 className="text-7xl">this is hero section</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, repellat iure? Excepturi dolore numquam ipsum ducimus
            quasi debitis eligendi ut, quibusdam, voluptates, quas vitae sequi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
