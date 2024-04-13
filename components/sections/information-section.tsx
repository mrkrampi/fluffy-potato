export const InformationSection = () => {
  return (
    <section className="max-w-screen-2xl w-full h-full py-36">
      <h1 className="uppercase lg:text-[220px] xl:text-[280px] text-text-bg -tracking-widest font-bold">IT - Це майбутнє України</h1>
      <div className="flex max-w-6xl w-full justify-between mx-auto top-[-156px] relative">
        <div className="max-w-md w-full">
          <div className="flex items-center text-primary-white mb-8 text-lg">
            За даними Forbes.ua
            <div className="bg-primary-white ml-5 w-14 h-1 text-xl"/>
          </div>
          <div className="text-4xl ml-auto max-w-sm w-full text-primary-white">
            <span className="text-primary-gray">Середня заробітня плата</span> в Українській IT сфері - від $1500 до $3500.
          </div>
        </div>
        <div className="max-w-md w-full">
          <div className="flex items-center text-primary-white mb-8 text-lg">
            Ассоціація IT.Ukraine пише
            <div className="bg-primary-white ml-5 w-14 h-1 text-xl"/>
          </div>
          <div className="text-4xl ml-auto max-w-sm w-full text-primary-white">
            <span className="text-primary-gray">Протягом 2023</span> року попит на ІТ-спеціалістів виріс на 30-35%.
          </div>
        </div>
      </div>
    </section>
  );
};
