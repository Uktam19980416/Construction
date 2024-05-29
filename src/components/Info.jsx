import { Button } from './Button';

export const Info = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-info-img bg-cover bg-center filter brightness-[70%]"></div>
      <div className="relative flex flex-col justify-center w-full h-full z-10">
        <div className="container w-[1440px] max-w-4/5 mx-auto py-20 z-10 max-md:px-2 max-sm:w-full">
          <div className="w-1/3 max-lg:w-1/2 max-sm:w-full flex flex-col gap-10">
            <p className="text-3xl text-slate-50 font-semibold max-sm:text-xl">ATAEV BAHODIR BUILD</p>
            <p className="text-6xl text-slate-50 font-semibold max-sm:text-4xl">ATAEV BAHODIR BUILD</p>
            <p className="text-xl text-slate-50 font-semibold max-sm:text-sm">We {"don't"} just create projects, we create new opportunities. By building state-scale facilities, we are building the future. We care about the environment: the company takes full responsibility for environmental aspects associated with the construction and operation of buildings and infrastructure</p>
            <Button text="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};
