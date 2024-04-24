import { InformationCard } from '@/components/information-card';

export const InformationSection = () => {
  return (
    <section className="lg:max-w-[770px] xl:max-w-[1660px] w-full h-full px-8 lg:px-0 mx-auto">
      <h2
        className="uppercase text-[60px] md:text-[140px] lg:text-[160px] xl:text-[280px] text-text-bg -tracking-widest font-bold leading-[1.1]">
        IT - Це майбутнє України
      </h2>
      <div
        className="flex flex-col md:flex-row gap-y-12 max-w-6xl w-full justify-between mx-auto top-[-40px] md:-top-16 xl:top-[-140px] relative px-4 md:px-0">
        <InformationCard source="За даними Forbes.ua">
          <span className="text-primary-gray">Середня заробітня плата</span> в українській IT сфері - від $1500 до $3500.
        </InformationCard>
        <InformationCard source="Ассоціація IT.Ukraine пише">
          <span className="text-primary-gray">Впродовж 2023</span> року попит на ІТ-спеціалістів виріс на 30-35%.
        </InformationCard>
      </div>
    </section>
  );
};
