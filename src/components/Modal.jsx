import { createPortal } from "react-dom";
import { useRef, useImperativeHandle, forwardRef } from "react";
import CreateButton from "./CreateButton";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/70 py-16 px-28 rounded-md shadow-stone-950 border text-center border-amber-300 bg-amber-50"
    >
      {children}
      <form method="dialog">
        <button className="px-6 py-2 font-medium rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
          close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
