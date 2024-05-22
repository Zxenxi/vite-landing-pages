import React from "react";

const Profile = () => {
  return (
    <div id="about" className="px-11 md:px-24  border-4 border-blue-400">
      <div className="grid md:grid-cols-3 gap-9 border-8 border-pink-400-600 h-svh items-center">
        <div className="border-2 border-blue-600 justify-center items-center grid col-span-2 md:col-auto">
          <img
            className="size-40"
            src="/src/assets/react.svg"
            alt="profile photo"
            srcset=""
          />
        </div>
        <div className="col-span-2 border-2 border-teal-600">
          <div className="space-y-6 flex flex-col  md:block justify-center text-center md:text-left">
            <h2 className="text-3xl font-bold">About Me!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fuga
              voluptate, maxime facere necessitatibus laudantium veritatis
              fugiat aliquid illum voluptates
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur nesciunt sed voluptatem, placeat maiores officia! Nam,
              facere officiis. Vel reiciendis quasi consequatur iure earum
              eligendi debitis laborum explicabo velit exercitationem, et ad,
              nemo eaque aliquid. Delectus veritatis iusto ipsam animi! Lorem
              <br />
              <br />
              ipsum dolor sit amet consectetur adipisicing elit. Quam culpa
              expedita nulla vitae odit modi?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
