import React from "react";

const Profile = () => {
  return (
    <div id="about" className="px-11 md:px-24">
      <div className="grid md:grid-cols-3 gap-9  min-h-screen items-center">
        <div className=" justify-center items-center grid col-span-2 md:col-auto">
          <img
            className="size-40"
            src="/src/assets/react.svg"
            alt="profile photo"
            srcset=""
          />
        </div>
        <div className="col-span-2 ">
          <div className="space-y-6 flex flex-col  md:block justify-center text-center md:text-left">
            <h2 className="text-3xl font-bold text-blue-500">About Me!</h2>
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
