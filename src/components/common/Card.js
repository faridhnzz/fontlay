export default function Card({ title, desc, icon, bgColor }) {
  return (
    <div
      data-theme="light"
      className="relative flex flex-col items-center md:items-start rounded-2xl border-2 md:flex-row bg-base-100 shadow-xl"
    >
      <div className="card-body w-auto md:w-96">
        {icon ? (
          <div
            className={`m-auto inline-block justify-items-center bg-gradient-to-l font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white ${bgColor}`}
          >
            {icon}
          </div>
        ) : (
          ""
        )}
        <h2 className="mt-2 text-center text-lg font-bold sm:text-xl">
          {title}
        </h2>
        <p className="text-md text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
