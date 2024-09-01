import Input from "./Input";

export default function () {
  return (
    <section className="w-[40rem] mt-24">
      <div className="flex gap-4 items-center justify-end my-4">
        <button className="px-6 py-2 font-medium text-stone-900 hover:text-stone-600">
          Cancel
        </button>
        <button className="px-6 py-2 font-medium rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
          Save
        </button>
      </div>
      <div>
        <Input element="input" label="TITLE" id="title" type="text" />
        <Input element="textarea" label="DESCRIPTION" id="description" />        
        <Input element="input" label="DUE DATE" id="dueDate" type="date" />         
      </div>
    </section>
  );
}
