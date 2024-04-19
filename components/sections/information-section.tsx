export const InformationSection = () => {
  return (
    <section className="lg:max-w-[770px] xl:max-w-[1660px] w-full h-full px-8 lg:px-0 mx-auto">
      <h1 className="uppercase text-[60px] md:text-[140px] lg:text-[160px] xl:text-[280px] text-text-bg -tracking-widest font-bold leading-[1.1]">
        IT - Це майбутнє України
      </h1>
      <div className="flex flex-col md:flex-row gap-y-12 max-w-6xl w-full justify-between mx-auto top-[-40px] md:-top-16 xl:top-[-140px] relative px-4 md:px-0">
        <div className="max-w-[480px] w-full">
          <div className="flex items-center text-primary-white mb-3 md:mb-6 xl:mb-8 text-xl">
            За даними Forbes.ua
            <div className="bg-primary-white ml-5 w-14 h-1 text-xl"/>
          </div>
          <div className="md:text-xl xl:text-4xl ml-auto max-w-[360px] w-full text-primary-white font-medium">
            <span className="text-primary-gray">Середня заробітня плата</span> в українській IT сфері - від $1500 до $3500.
          </div>
        </div>
        <div className="max-w-[480px] w-full">
          <div className="flex items-center text-primary-white mb-3 md:mb-6 xl:mb-8 text-xl">
            Ассоціація IT.Ukraine пише
            <div className="bg-primary-white ml-5 w-14 h-1 text-xl"/>
          </div>
          <div className="md:text-xl xl:text-4xl ml-auto max-w-[360px] w-full text-primary-white font-medium">
            <span className="text-primary-gray">Впродовж 2023</span> року попит на ІТ-спеціалістів виріс на 30-35%.
          </div>
        </div>
      </div>
    </section>
  );
};
