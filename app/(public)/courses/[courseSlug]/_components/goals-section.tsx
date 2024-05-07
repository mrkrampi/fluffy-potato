import { Heading } from '@/components/markup/heading';;
import { GoalsContainer } from '@/components/goals-container';
import { Section } from '@/components/markup/section';

interface GoalsSectionProps {
  goals: Array<string>;
}

export const GoalsSection = ({ goals }: GoalsSectionProps) => {
  return (
    <Section>
      <Heading>
        Цілі курсу
      </Heading>
      <GoalsContainer items={goals}/>
    </Section>
  );
};
