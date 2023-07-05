import { ChildrenProps } from '~types/default';

export function Grid1Cols({ children }: ChildrenProps) {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 items-stretch gap-4 break-words p-1">
        {children}
      </div>
    </div>
  );
}

export function Grid2Cols({ children }: ChildrenProps) {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 items-stretch gap-4 break-words p-1 md:grid-cols-2">
        {children}
      </div>
    </div>
  );
}
