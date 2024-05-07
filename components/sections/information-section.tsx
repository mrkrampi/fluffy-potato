import { Section } from '@/components/markup/section';
import { InformationCard } from '@/components/cards/information-card';

export const InformationSection = () => {
  return (
    <Section className="pt-6 lg:pt-12 pb-12 md:px-0 lg:px-0 md:pb-0 lg:pb-0">
      <div className="pt-24 md:pt-0">
        <h2
          className="uppercase text-[60px] md:text-[110px] lg:text-[140px] xl:text-[210px] text-text-bg -tracking-widest leading-[1.1] font-unbounded">
          IT - Це майбутнє України
        </h2>

        <div
          className="flex flex-col md:flex-row gap-y-12 max-w-6xl w-full justify-between mx-auto top-[-28px] md:-top-12 xl:top-[-80px] relative px-4 md:px-0 gap-4">
          <InformationCard source="За даними Forbes.ua">
            <span className="text-primary-gray">Середня заробітня плата</span> в українській IT сфері - від $1500 до $3500.
          </InformationCard>

          <InformationCard source="Ассоціація IT.Ukraine пише">
            <span className="text-primary-gray">Впродовж 2023</span> року попит на ІТ-спеціалістів виріс на 30-35%.
          </InformationCard>
        </div>
      </div>
    </Section>
  );
};
