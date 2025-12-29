import scoreball from "../assets/scoreball.png"
import sportCar from "../assets/sportcar.png"

function Category() {
  return (
    <div  className="w-[88%] h-full   ml-30">
        <div className="flex gap-4">
            {/**fIRST DIV */}
            <div>
                <h1 className="text-4xl font-bold text-center p-4 mb-2  bg-gray-200 text-black font-serif">FOOTBALL</h1>
                <img src={scoreball} alt='Img' />
            </div>
             {/**Second DIV */}
            <div>
                <img src={sportCar} alt='' />
                <h1 className="text-4xl font-bold text-center p-4 mt-2  bg-gray-200 text-black font-serif">CLOSEBALL</h1>

            </div>
             {/**Third DIV */}
            <div>
                  <h1 className="text-4xl font-bold text-center p-4 mb-2  bg-gray-200 text-black font-serif">FOOTBALL</h1>
                <img src={scoreball} alt='Img' />
            </div> 
            {/**Fourth DIV */}
            <div>
                 <img src={sportCar} alt='' />
                <h1 className="text-4xl font-bold text-center p-4 mt-2  bg-gray-200 text-black font-serif">CLOSEBALL</h1>
            </div>

        </div>
    </div>
  )
}

export default Category
