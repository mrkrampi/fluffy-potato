import { Heading } from '@/components/markup/heading';;
import { GoalsContainer } from '@/components/goals-container';

interface GoalsSectionProps {
  goals: Array<string>;
}

export const GoalsSection = ({ goals }: GoalsSectionProps) => {
  return (
    <section className="lg:mx-5 mx-2 md:mx-8">
      <Heading>
        Цілі курсу
      </Heading>
      <GoalsContainer items={goals}/>
    </section>
  );
};
