import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Form({ onAddItem, setIsOpen, isOpen }) {
  const [mission, setMission] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (!mission) return;

    const id = crypto.randomUUID();
    const newItem = { id, description: mission, done: false };

    onAddItem(newItem);
    setIsOpen(false);
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#000000c2] bg-opacity-50"></div>
      )}
      <form
        onSubmit={onSubmit}
        className="w-[1000px] z-50 absolute py-12 text-center -translate-x-1/2 -translate-y-1/2 rounded-sm top-80 left-1/2 px-28"
      >
        <span
          onClick={() => setIsOpen(false)}
          className="absolute text-sm cursor-pointer right-3 top-3"
        >
          <IoMdClose size={25} className="text-white" />
        </span>
        <label className="block mr-2 text-3xl font-bold text-white my-14">
          What is your mission today?
        </label>
        <div className="flex items-center rounded-full">
          <input
            value={mission}
            onChange={(e) => setMission(e.target.value)}
            type="text"
            className="w-full px-5 py-5 text-xl rounded-l-full outline-none "
            placeholder="Add Mission..."
          />
          <button className="px-5 py-5 text-xl font-bold text-white uppercase transition duration-300 bg-blue-500 rounded-r-full w-28 hover:bg-blue-800">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
