import React from "react";

export const Profile = () => {
  return (
    <>
      <div class="flex flex-col items-center space-y-5">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
          class="w-32 rounded-full shadow-lg"
          alt="Avatar"
        />
        <h5 class="mb-2 text-xl font-medium leading-tight text-white">John Doe</h5>
        <p class="text-white">
          where am i on the internet?
        </p>
      </div>
    </>
  );
};
