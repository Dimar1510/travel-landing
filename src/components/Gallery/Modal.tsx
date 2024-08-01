import { forwardRef, useState } from "react";
interface IProps {
  image: string;
  onClose: () => void;
  right: () => void;
  left: () => void;
}

const Modal = forwardRef<HTMLDialogElement, IProps>((props, ref) => {
  const [loading, setLoading] = useState(true);

  return (
    <dialog
      ref={ref}
      className="m-auto backdrop:backdrop-brightness-[.25] min-w-[300px] min-h-[300px] h-[90svh]"
    >
      <div className={`${loading ? "block" : "hidden"} flex justify-center`}>
        Loading
      </div>
      <img
        src={props?.image}
        alt="mountain"
        className={`${loading ? "hidden" : "block"} size-full object-cover`}
        onLoad={() => setLoading(false)}
      />

      <button
        className="absolute top-0 right-0 m-2 size-10 text-2xl border-2 border-black rounded-full bg-white/50 flex items-center justify-center"
        onClick={props.onClose}
      >
        <i className="bx bx-x"></i>
      </button>

      <button
        className="absolute top-1/2 right-0 m-2 size-10 text-2xl rounded-full bg-white/50 flex items-center justify-center"
        onClick={props.right}
      >
        <i className="bx bx-chevron-right"></i>
      </button>

      <button
        className="absolute top-1/2 left-0 m-2 size-10 text-2xl rounded-full bg-white/50 flex items-center justify-center"
        onClick={props.left}
      >
        <i className="bx bx-chevron-left"></i>
      </button>
    </dialog>
  );
});

export default Modal;
