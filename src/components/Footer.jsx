import React from "react";

export const Footer = ( { props }) => {
  return (
    <>
      <footer class="text-center lg:text-left space-y-2 fixed inset-x-0 bottom-5">
        <div class="text-center text-neutral-700 dark:text-neutral-200">
          Last updated: dd/mm/yyyy 12:00 AM
        </div>
        <div class="text-center text-gray-400">
          © 2023 Zach Riane I. Machacon
        </div>
      </footer>
    </>
  );
};
