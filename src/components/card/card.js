export default function Card({ title, desc, Icon }) {
  return (
    <div className="flex flex-col items-start md:flex-row content-center">
      <div data-theme="light" className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <span className="justify-items-center m-auto inline-block">{Icon}</span>
          <h2 className="text-center font-bold text-md">{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}
