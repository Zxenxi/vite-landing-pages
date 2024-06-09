import React from "react";

const Services = () => {
  return (
    <div id="services" className="container mx-auto ">
      <div className="flex flex-col min-h-screen justify-center items-center ">
        <div className="">
          <h1 className="font-light text-4xl text-blue-500">Services</h1>
        </div>
        <div className=" flex flex-col md:flex-row justify-center items-center gap-7">
          <div>
            <img
              className="size-36 md:size-[300px]"
              src="/src/assets/react.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="text-center md:text-left md:max-w-96 space-y-4">
            <h1 className="font-semibold text-2xl">Back end Development</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
              excepturi a illo nobis maxime neque, minus unde perferendis
              tenetur, veniam modi quae? Omnis ipsam velit quidem dolores
              perspiciatis repellat autem.
            </p>
            <button className="bg-blue-400 rounded-sm p-3">
              <h4 className="text-white">Connect Now!</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
