export default function CreateButton({ children, ...props }) {
  return (
    <div>
      <button
        {...props}
        className="px-6 py-3 font-medium rounded-md bg-stone-700 text-stone-300 hover:bg-stone-600 hover:text-stone-100"
      >
        {children}
      </button>
    </div>
  );
}
