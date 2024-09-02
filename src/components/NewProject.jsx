import { forwardRef, useImperativeHandle, useRef } from "react";

import Input from "./Input";

export default function NewProject({ onSave }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () => {
    const newProject = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    }
    onSave(newProject);
  };

  return (
    <section className="w-[40rem] mt-24">
      <div className="flex gap-4 items-center justify-end my-4">
        <button className="px-6 py-2 font-medium text-stone-900 hover:text-stone-600">
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-2 font-medium rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
        >
          Save
        </button>
      </div>
      <div>
        <Input
          element="input"
          label="TITLE"
          id="title"
          type="text"
          ref={titleRef}
        />
        <Input
          element="textarea"
          label="DESCRIPTION"
          id="description"
          ref={descriptionRef}
        />
        <Input
          element="input"
          label="DUE DATE"
          id="dueDate"
          type="date"
          ref={dueDateRef}
        />
      </div>
    </section>
  );
};
