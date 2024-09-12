export default function Finished({ list }) {
  const doneMissions = list.filter((item) => item.done).length;
  const percentage = Math.round((doneMissions * 100) / list.length);

  if (!list.length)
    return (
      <p className="w-full text-center mt-10 font-bold text-[#003566]">
        No Missions yet.
      </p>
    );

  if (percentage === 100) {
    return (
      <p className="w-full text-center mt-10 font-bold text-[#003566]">
        All Missions completed ✅
      </p>
    );
  }

  return (
    <p className="w-full text-center mt-10 font-bold text-[#003566]">
      You have completed {doneMissions} missions out of {list.length} (
      {percentage}%)
    </p>
  );
}
