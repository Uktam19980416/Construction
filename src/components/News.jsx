import img1 from '../images/construction.74a5b49f569267df13c8.jpg'
import img2 from '../images/news.91d41923640e2fa9a037.jpg'
import img3 from '../images/news2.a6503f342d0d2e748340.jpg'
import img4 from '../images/news3.44f09827240dc2fb8309.jpg'
import { Button } from './Button'
export const News = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="container w-[1440px] max-w-4/5 mx-auto mt-10 max-sm:px-2 max-sm:w-full">
        <div>
          <h1 className="text-4xl">All our news</h1>
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 max-xl:gap-5 mt-10">
          <div className="flex max-sm:flex-col gap-5 max-sm:gap-0 rounded-3xl bg-white shadow-2xl shadow-slate-500">
            <div className="w-1/2 max-sm:w-full h-full">
              <img src={img1} alt="Constructor" className="w-full h-full object-cover rounded-l-3xl max-sm:rounded-r-3xl" />
            </div>
            <div className="w-1/2 max-sm:w-full py-5 flex flex-col gap-2 max-sm:px-5">
              <Button text="News" />
              <h2 className="text-2xl font-semibold">Who is a construction project manager?</h2>
              <p className="text-sm text-slate-700">The Discover Invest company has several construction project managers. This is a specialist responsible for the successful implementation of the construction site entrusted to him. He manages the entire process, from the planning stage and approval of project documentation to the commissioning of the building, and sometimes also performs post-project support. Latest</p>
            </div>
          </div>
          <div className="flex max-sm:flex-col gap-5 max-sm:gap-0 rounded-3xl bg-white shadow-2xl shadow-slate-500">
            <div className="w-1/2 max-sm:w-full h-full">
              <img src={img2} alt="Constructor" className="w-full h-full object-cover rounded-l-3xl max-sm: rounded-r-3xl" />
            </div>
            <div className="w-1/2 max-sm:w-full py-5 flex flex-col gap-2 max-sm:px-5">
              <Button text="News" />
              <h2 className="text-2xl font-semibold">Congratulations to everyone on the upcoming 2024!</h2>
              <p className="text-sm text-slate-700">The sophisticated interior design of the halls will create an atmosphere of comfort even before entering the apartment, and a convenient navigation system will help you easily get to the floor you need or exit to the territory</p>
            </div>
          </div>

          <div className="flex max-sm:flex-col gap-5 max-sm:gap-0 rounded-3xl bg-white shadow-2xl shadow-slate-500">
            <div className="w-1/2 max-sm:w-full h-full">
              <img src={img3} alt="Constructor" className="w-full h-full object-cover rounded-l-3xl max-sm: rounded-r-3xl" />
            </div>
            <div className="w-1/2 max-sm:w-full py-5 flex flex-col gap-2 max-sm:px-5">
              <Button text="News" />
              <h2 className="text-2xl font-semibold">Location</h2>
              <p className="text-sm text-slate-700">The transport infrastructure allows you to easily move to anywhere in the city: you just have to choose the desired and desired direction.</p>
            </div>
          </div>

          <div className="flex max-sm:flex-col gap-5 max-sm:gap-0 rounded-3xl bg-white shadow-2xl shadow-slate-500">
            <div className="w-1/2 max-sm:w-full h-full">
              <img src={img4} alt="Constructor" className="w-full h-full object-cover rounded-l-3xl max-sm: rounded-r-3xl" />
            </div>
            <div className="w-1/2 max-sm:w-full py-5 flex flex-col gap-2 max-sm:px-5">
              <Button text="News" />
              <h2 className="text-2xl font-semibold">We continue to introduce you to the multifunctional objects of Discover Invest.</h2>
              <p className="text-sm text-slate-700">We continue to introduce you to the multifunctional objects of Discover Invest. One of them is the Yangi Choshtepa residential complex built in the Yangihayat district of Tashkent. The total construction area is 12 hectares. To date, 29 houses have been built.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
