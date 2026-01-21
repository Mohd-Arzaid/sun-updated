import React from "react";
import Container from "../common/container/container";

const Xyz = () => {
  return (
    <Container className="relative m-12 mx-auto w-[600px] p-12">
      <div className="pointer-events-none absolute -inset-y-12 left-0 w-px border-l border-dashed border-neutral-300"></div>
      <div className="pointer-events-none absolute -inset-y-12 right-0 w-px border-r border-dashed border-neutral-300"></div>
      <div className="pointer-events-none absolute -inset-x-12 top-0 h-px border-t border-dashed border-neutral-300"></div>
      <div className="pointer-events-none absolute -inset-x-12 bottom-0 h-px border-b border-dashed border-neutral-300"></div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-plus z-1 absolute left-[-11.5px] top-[-12.5px] size-6"
        aria-hidden="true"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-plus z-1 absolute right-[-11.5px] top-[-12.5px] size-6"
        aria-hidden="true"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-plus z-1 absolute bottom-[-12.5px] left-[-11.5px] size-6"
        aria-hidden="true"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-plus z-1 absolute bottom-[-12.5px] right-[-11.5px] size-6"
        aria-hidden="true"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    </Container>
  );
};

export default Xyz;
