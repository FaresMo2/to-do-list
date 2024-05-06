import { FaPlus } from "react-icons/fa6";

export default function Button({ onClick }) {
  return (
    <div className="p-3">
      <button
        onClick={onClick}
        className="flex justify-center items-center bg-blue-500 ml-auto text-white text-2xl w-12 h-12 border-none outline-none rounded-full text-center leading-3 transition duration-300 hover:bg-blue-800"
      >
        <FaPlus size={20} />
      </button>
    </div>
  );
}
