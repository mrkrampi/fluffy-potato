interface GoalCardProps {
  index: number;
  text: string;
}

export const GoalCard = ({ text, index }: GoalCardProps) => {
  return (
    <div className="w-full flex flex-col gap-y-8 max-w-md mx-auto">
      <p className="text-xl font-medium text-primary-gray">[ {index + 1} ]</p>
      <p className="text-primary-white font-medium text-2xl tracking-tight">{text}</p>
    </div>
  );
};
