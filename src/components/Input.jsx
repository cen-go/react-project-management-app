import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, id, element, ...props }, ref) {
  const styleClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-700 focus:outline-none focus:border-stone-500";

  const input = <input ref={ref} id={id} {...props} className={`${styleClasses} h-10`} />;

  const textArea = (
    <textarea ref={ref} id={id} {...props} className={`${styleClasses} h-24`} />
  );

  return (
    <div className="flex flex-col gap-1 my-4">
      <label htmlFor={id} className="block font-bold text-stone-600">
        {label}
      </label>
      {element === "input" && input}
      {element === "textarea" && textArea}
    </div>
  );
})

export default Input;
