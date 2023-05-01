export default function Grid2Cols({children}) {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 gap-4 p-1 break-words items-stretch">
        {children}
      </div>
    </div>
  );
}
