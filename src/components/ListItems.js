import Item from "./Item";

export default function ListItems({ list, onToggleCheck, onToggleDelete }) {
  if (!list.length)
    return <p className="text-center mt-20">Start New Missions Now !</p>;

  return (
    <ul className=" p-4">
      {list.map((item) => (
        <Item
          item={item}
          onToggleCheck={onToggleCheck}
          onToggleDelete={onToggleDelete}
          key={item.id}
        />
      ))}
    </ul>
  );
}
