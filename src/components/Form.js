import { useEffect, useState } from "react";

export default function Form({ onAddItem, setIsOpen }) {
  const [mission, setMission] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (!mission) return;

    const id = crypto.randomUUID();

    const newItem = { id, description: mission, done: false };

    onAddItem(newItem);

    setIsOpen(false);
  }

  useEffect(function () {
    function callback(e) {
      setIsOpen(false);
    }

    document.addEventListener("keydown", callback);

    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, []);

  return (
    <form
      onSubmit={onSubmit}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0d3b66] py-12 px-28 text-center rounded-sm"
    >
      <span
        onClick={() => setIsOpen(false)}
        className="absolute right-3 top-3 cursor-pointer text-sm"
      >
        ❌
      </span>
      <label className="mr-2 block my-6 text-white">
        What is your mission today?
      </label>
      <input
        value={mission}
        onChange={(e) => setMission(e.target.value)}
        type="text"
        className="border-none outline-none py-1 px-3 rounded-l-md"
        placeholder="Add Mission..."
      />
      <button className="bg-blue-500 py-1 px-2 text-white font-bold rounded-r-md">
        Add
      </button>
    </form>
  );
}
