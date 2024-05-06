export default function Item({ item, onToggleCheck, onToggleDelete }) {
  return (
    <li className="cursor-pointer p-4 mt-4 rounded-full flex justify-between bg-[#eee]">
      <span
        className="flex items-center"
        style={item.done ? { textDecoration: "line-through" } : {}}
      >
        <input
          className="mr-1 w-5 h-5  accent-green-500  cursor-pointer"
          type="checkbox"
          value={item.done}
          checked={item.done}
          onChange={() => onToggleCheck(item.id)}
        />
        {item.description}
      </span>

      <span onClick={() => onToggleDelete(item.id)} className="cursor-pointer">
        ❌
      </span>
    </li>
  );
}
