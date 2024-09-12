import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

export default function Item({ item, onToggleCheck, onToggleDelete }) {
  const [mounted, setMounted] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50); // Adjust the delay time as needed
    return () => clearTimeout(timer);
  }, []);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onToggleDelete(item.id);
    }, 300); // Adjust the duration of the transition
  };

  return (
    <li
      className={`transition-all duration-700 cursor-pointer text-xl p-4 mt-12 rounded-full flex justify-between bg-[#eee] ${
        mounted ? "opacity-100" : "opacity-0 translate-y-4"
      } ${isDeleting ? "opacity-0 translate-y-4" : ""}`}
    >
      <span
        className="flex items-center"
        style={item.done ? { textDecoration: "line-through" } : {}}
      >
        <input
          className="w-5 h-5 mr-3 cursor-pointer accent-green-500"
          type="checkbox"
          value={item.done}
          checked={item.done}
          onChange={() => onToggleCheck(item.id)}
        />
        {item.description}
      </span>

      <span onClick={handleDelete} className="cursor-pointer">
        <IoMdClose size={25} className="text-gray-600" />
      </span>
    </li>
  );
}
