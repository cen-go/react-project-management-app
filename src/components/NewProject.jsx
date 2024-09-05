import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onSave, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const errorModal = useRef();

  const handleSave = () => {
    const newProject = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
      tasks: [],
    };

    if (
      newProject.title.trim() === "" ||
      newProject.description.trim() === "" ||
      newProject.dueDate.trim() === ""
    ) {
      errorModal.current.open();
      return;
    }

    onSave(newProject);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dueDateRef.current.value = "";
  };

  return (
    <section className="w-[40rem] mt-24">
      <Modal ref={errorModal}>
        <h2 className="font-bold text-stone-600 md:text-xl mb-3">Invalid Input</h2>
        <p className="text-stone-800 mb-5">Please fill in all the fields</p>
      </Modal>
      <div className="flex gap-4 items-center justify-end my-4">
        <button
          className="px-6 py-2 font-medium text-stone-900 hover:text-stone-600"
          onClick={onCancel}
        >
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
}
