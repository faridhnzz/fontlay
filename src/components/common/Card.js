export default function Card({ title, desc, icon }) {
  return (
    <>
      <div className="relative flex flex-col items-center bg-slate-50 md:items-start md:flex-row dark:bg-slate-900 rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl">
        <div className="card-body w-auto">
          {icon ? (
            <div
              className={`w-7 h-7 m-auto inline-block justify-items-center text-blue-500`}
            >
              {icon}
            </div>
          ) : (
            ""
          )}

          <div className="mt-5">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {title}
            </h2>
            <p className="mt-1 text-gray-600 dark:text-gray-400">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
