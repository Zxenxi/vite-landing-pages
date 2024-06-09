import React from "react";

const Hero = () => {
  return (
    <div id="home" className="">
      <div className="container mx-auto  items-center flex flex-col justify-center w-full min-h-screen">
        <div className="text-center space-y-20 flex-col">
          <h1 className="text-5xl md:text-7xl">This is hero section</h1>
          <p className="font-light max-w-6xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit
            totam laudantium illo iusto ipsam natus architecto doloremque optio.
            Possimus perferendis dolor quam accusamus iure officiis ab
            voluptates, tempore quae asperiores id assumenda sunt nostrum
            deleniti magnam veritatis culpa minus fuga libero aliquam! Facilis
            repellat ipsum eaque voluptates et, dolores incidunt sunt ab
            adipisci modi fugiat qui similique expedita neque?
          </p>
        </div>
      </div>
      <div className="-mt-16 flex justify-center gap-6 text-center pb-12">
        <img src="/src/assets/github.png" className="size-8" alt="" srcset="" />

        <img
          src="/src/assets/facebook.png"
          className="size-8"
          alt=""
          srcset=""
        />

        <img
          src="/src/assets/instagram.png"
          className="size-8"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default Hero;
