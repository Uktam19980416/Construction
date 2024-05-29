import gold from '../images/gold.65c168a0380a930adc5f.png'
import notebook from '../images/notebook.486f543adeb3860db378.png'
import settings from '../images/settings.c04baf6a149ca893f9bb.png'
import car from '../images/car.7a9117dbe6e748aa2f12.png'

export const Services = () => {
  return (
    <div className="bg-[#fce8bd]">
      <div className="container w-[1440px] max-w-4/5 mx-auto mt-10 max-sm:px-2 max-sm:w-full">
      <div className="text-center">
        <h1 className="text-4xl">Our services</h1>
      </div>
      <div className="grid grid-cols-7 max-2xl:grid-cols-2 max-xl:grid-cols-1 max-xl:w-4/5 max-md:w-full max-xl:mx-auto gap-5 my-10">
        <div className="pl-10 bg-[#2c3442] col-span-4 max-2xl:col-span-1 rounded-3xl max-sm:text-center max-sm:p-10">
          <div className="flex flex-col sm:flex-row items-center justify-between h-full">
            <p className="text-xl text-slate-50">
              You can get free information from our {"company's"} specialists
            </p>
            <img src={gold} alt="Gold" className="sm:block hidden" />
          </div>
        </div>
        <div className="pl-10 bg-[#2c3442] col-span-3 max-2xl:col-span-1 rounded-3xl max-sm:text-center max-sm:p-10">
          <div className="flex flex-col sm:flex-row items-center justify-between h-full">
            <p className="text-xl text-slate-50">Repair correction service</p>
            <img src={notebook} alt="Notebook" className="sm:block hidden" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 max-2xl:grid-cols-2 max-xl:grid-cols-1 max-xl:w-4/5 max-md:w-full max-xl:mx-auto gap-5 my-10">
        <div className="pl-10 bg-[#2c3442] col-span-3 max-2xl:col-span-1 rounded-3xl max-sm:text-center max-sm:p-10">
          <div className="flex flex-col sm:flex-row items-center justify-between h-full">
            <p className="text-xl text-slate-50">Documents clearance</p>
            <img src={settings} alt="Settings" className="sm:block hidden" />
          </div>
        </div>
        <div className="pl-10 bg-[#2c3442] col-span-4 max-2xl:col-span-1 rounded-3xl max-sm:text-center max-sm:p-10">
          <div className="flex flex-col sm:flex-row items-center justify-between h-full">
            <p className="text-xl text-slate-50">Team of professionals</p>
            <img src={car} alt="Car" className="sm:block hidden" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
