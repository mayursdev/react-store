import React from "react";

const SubmitButton = (props) => {
  const { children, onClick, className } = props;
  const defaultButtonBgClasses = `bg-slate-800 hover:bg-slate-900 text-white`;

  return (
    <button
      onClick={onClick}
      className={`w-full p-3 uppercase text-sm font-medium mt-5 flex items-center justify-center transition-all group ${
        className ? className : defaultButtonBgClasses
      }`}
    >
      <div className="transition-all group-hover:mr-3">{children}</div>
      <svg
        className="w-0 h-6 opacity-0 group-hover:opacity-100 group-hover:w-6 transition-all"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  );
};

export default SubmitButton;
