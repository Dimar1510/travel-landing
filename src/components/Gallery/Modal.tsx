import { forwardRef, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
interface IProps {
  image: string;
  onClose: () => void;
  right: () => void;
  left: () => void;
}

const Modal = forwardRef<HTMLDialogElement, IProps>(
  ({ image, left, onClose, right }, ref) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Reset loading state when image URL changes
      setLoading(true);
    }, [image]);

    const handleImageLoad = () => {
      setLoading(false);
    };

    const handleImageError = () => {
      setLoading(false);
    };
    return (
      <dialog
        ref={ref}
        className="m-auto backdrop:backdrop-brightness-[.25] min-w-[300px] min-h-[300px] w-full h-[90svh] bg-gray-400"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") right();
          if (e.key === "ArrowLeft") left();
        }}
      >
        <div className="relative w-full h-full flex justify-center items-center bg-transparent">
          {loading && (
            <div className="absolute inset-0 flex justify-center items-center z-10">
              <ClipLoader color={"#001043"} loading={loading} size={100} />
            </div>
          )}
          <img
            src={image}
            alt="mountain"
            className={`size-full transition-opacity duration-500 object-cover ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
        <button
          className="absolute top-0 right-0 m-2 size-10 text-2xl border-2 border-black rounded-full bg-white/50 flex items-center justify-center"
          onClick={onClose}
        >
          <i className="bx bx-x"></i>
        </button>

        <button
          className="absolute top-1/2 right-0 m-2 size-10 text-2xl rounded-full bg-white/50 flex items-center justify-center"
          onClick={right}
        >
          <i className="bx bx-chevron-right"></i>
        </button>

        <button
          className="absolute top-1/2 left-0 m-2 size-10 text-2xl rounded-full bg-white/50 flex items-center justify-center"
          onClick={left}
        >
          <i className="bx bx-chevron-left"></i>
        </button>
      </dialog>
    );
  }
);

export default Modal;
