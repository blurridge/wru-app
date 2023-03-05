import React from "react";

export const Button = ({ link }) => {
  return (
    <>
      <div class="flex justify-center space-x-2">
        <a href={link.link} target="_blank" rel="noreferrer">
          <button
            type="button"
            data-te-ripple-init
            class="inline-block rounded-full bg-neutral-50 px-6 pt-2.5 pb-2 font-extrabold uppercase leading-normal text-neutral-800 
            shadow-[0_4px_9px_-4px_#fbfbfb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] 
            focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] 
            focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] 
            w-24 text-[0.60rem] text-center sm:w-32 sm:text-sm"
          >
            {link.name}
          </button>
        </a>
      </div>
    </>
  );
};
