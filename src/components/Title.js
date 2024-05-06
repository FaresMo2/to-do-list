export default function Title({ numberOfList }) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const todayDate = new Date();
  const dayOfWeek = daysOfWeek[todayDate.getDay()];
  const month = monthsOfYear[todayDate.getMonth()];
  const dayOfMonth = todayDate.getDate();
  const year = todayDate.getFullYear();
  return (
    <header className="bg-[#0d3b66] text-white py-2 sm:py-3 md:py-5 px-8 md:px-16 text-center rounded-tr-lg rounded-tl-lg shadow-md shadow-gray-400">
      <p className="text-xl sm:text-2xl md:3xl font-extrabold my-2">
        TO DO LIST 📃
      </p>
      <p>{`${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`}</p>
      <span>{numberOfList} Tasks</span>
    </header>
  );
}
