import { CardWrapper } from "./CardWrapper";

export const Form = () => {
  return (
    <div className="flex  flex-col gap-9 items-center justify-center">
      <p className="text-primary text-web-h2 flex justify-center items-center font-bold">
        How to get started?
      </p>
      <div className="h-[465px] overflow-scroll flex gap-[3rem] flex-col custom-scrollbar">
        {Array.from({ length: 4 }).map((_, index) => (
          <CardWrapper key={index} index={index + 1} isLast={index === 3} />
        ))}
      </div>
    </div>
  );
};






