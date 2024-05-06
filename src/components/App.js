import { useEffect, useState } from "react";
import Title from "./Title";
import ListItems from "./ListItems";
import Button from "./Button";
import Form from "./Form";
import Finished from "./Finished";
import End from "./End";
import { useLocalStorageState } from "./useLocalStorageState";

// const listItemsOne = [
//   { id: 1, description: "Nabil Project", done: true },
//   { id: 2, description: "Mom Requirements", done: true },
//   { id: 3, description: "Meeting Project", done: false },
// ];

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
    <div className="mt-5  flex justify-center items-center flex-wrap">
      <div className="container w-2/6 shadow-md shadow-gray-200 rounded-xl">
        <Title numberOfList={numberOfList} />
        <ListItems
          list={list}
          onToggleCheck={handleToggleCheck}
          onToggleDelete={handleDeleteItem}
        />
        <Button onClick={handleToggle} />
      </div>
      {isOpen && <Form onAddItem={handleAddItem} setIsOpen={setIsOpen} />}
      <Finished list={list} />
      <End />
    </div>
  );
}
