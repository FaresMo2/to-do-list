import { useEffect, useState } from "react";
import Title from "./Title";
import ListItems from "./ListItems";
import Button from "./Button";
import Form from "./Form";
import Finished from "./Finished";
import End from "./End";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export default function App() {
  const [list, setList] = useLocalStorageState([], "list");
  const [isOpen, setIsOpen] = useState(false);
  const numberOfList = list.length;

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handleAddItem(item) {
    setList((list) => [...list, item]);
  }

  function handleDeleteItem(id) {
    setList(list.filter((item) => (item.id !== id ? item : "")));
  }

  function handleToggleCheck(id) {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  useEffect(
    function () {
      window.localStorage.setItem("list", JSON.stringify(list));
    },
    [list]
  );

  return (
    <div className="flex flex-wrap items-center justify-center mt-5">
      <div
        className={`container w-2/4 shadow-md shadow-gray-200 rounded-xl ${
          isOpen ? "blurred" : ""
        }`}
      >
        <Title numberOfList={numberOfList} />
        <ListItems
          list={list}
          onToggleCheck={handleToggleCheck}
          onToggleDelete={handleDeleteItem}
        />
        <Button onClick={handleToggle} />
      </div>
      {isOpen && (
        <Form isOpen={isOpen} onAddItem={handleAddItem} setIsOpen={setIsOpen} />
      )}
      <Finished list={list} />
      <End />
    </div>
  );
}
