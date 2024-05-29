import gallery1 from '../images/gallery1.323b40a21da097cb0e9f.jpg'
import gallery2 from '../images/gallery2.db1310c2308c289176da.jpg'
import gallery3 from '../images/gallery3.b69521e967c812c792b2.jpg'
import gallery4 from '../images/gallary4.6864081bbc6c5f87cffa.jpg'
import gallery5 from '../images/gallery5.a3ea745cffd972d946a5.jpg'
import gallery6 from '../images/gallery6.77d03be1807faf0577c7.jpg'

export const Exchange = () => {
  return (
    <div className="">
      <div className="text-center my-10">
        <p className="text-4xl">Exchange ideas with partners</p>
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div className="w-full">
          <img
            className="w-full h-[350px] object-cover"
            src={gallery1}
            alt="House 1"
          />
        </div>
        <div className="w-full h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={gallery2}
            alt="House 1"
          />
        </div>
        <div className="w-full h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={gallery3}
            alt="House 1"
          />
        </div>
        <div className="w-full h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={gallery4}
            alt="House 1"
          />
        </div>
        <div className="w-full h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={gallery5}
            alt="House 1"
          />
        </div>
        <div className="w-full h-[350px]">
          <img
            className="w-full h-full object-cover"
            src={gallery6}
            alt="House 1"
          />
        </div>
      </div>
    </div>
  )
}
