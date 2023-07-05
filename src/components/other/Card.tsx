import { CardProps } from '~types/components';

export function Card({ title, desc, icon }: CardProps) {
  return (
    <div className="block h-[100%] rounded-xl bg-[#f6f6f7] dark:bg-slate-800/90">
      <article className="card-body">
        {icon && (
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-md bg-[#ccccd0] dark:bg-slate-600/80 text-3xl">
            {icon}
          </div>
        )}

        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="flex-grow pt-1 text-base tracking-wide">{desc}</p>
      </article>
    </div>
  );
}
