import { ChildrenProps } from '~types/default';

export function Grid1x1Cols({ children }: ChildrenProps) {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 items-stretch p-1 gap-4">{children}</div>
    </div>
  );
}

export function Grid1x2Cols({ children }: ChildrenProps) {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 items-stretch p-1 gap-4 lg:grid-cols-2">
        {children}
      </div>
    </div>
  );
}

export function Grid1x3Cols({ children }: ChildrenProps) {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-1 gap-4 items-stretch p-1 lg:grid-cols-3 lg:gap-8">
        {children}
      </div>
    </div>
  );
}
