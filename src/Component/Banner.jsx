import React from 'react'
import footballbanner from "../Component/Sports_assests/footballbanner.png"
import Rectangularlbanner from "../Component/Sports_assests/Rectangular.png"
import { ArrowLeft, ArrowRight } from "lucide-react"
function Banner() {
  return (
    <div className="w-[80%] h-full   ml-36 ">
        <div className="  relative  ">
            <img src={footballbanner} className="w-full h-auto" alt='' />
            <img src={Rectangularlbanner} className="absolute top-1" alt='' />
                <p className="absolute text-2xl text-white font-bold border px-3 py-1 left-8 top-[10px]" >Football</p>
                <p className="absolute text-1xl text-white font-bold border px-3 py-1 left-8 top-[60%]" >Agence France-Presse - 04 June 2023</p>
                    <p className="absolute text-1xl text-white font-bold text-4xl px-3 py-1 left-4 top-[68%]">Lionel Messi Leaving Ligue 1 Team <br/> Paris Saint-Germain, Club Confirms</p>
                    <p className="absolute text-1xl text-white font-bold  px-3 py-1 left-5 top-[90%]">The EuroLeague Finals Top Scorer is the individual award for the player<br/> that gained the highest points in the EuroLeague Finals</p>
        </div>
        <div className=" ">
                        <div className="flex justify-end gap-4 p-4">
                        <div className="bg-black text-white p-2 rounded">
  <ArrowLeft />
</div>
                                                <button className="text-black hover:text-white hover:bg-black px-4 py-2">3</button>

                        <button className="text-black bg-transparent hover:text-white hover:bg-black px-4 py-2 rounded transition-colors duration-300">
  2
</button>

                        <button className="text-black hover:text-white hover:bg-black px-4 py-2">3</button>
                                                <button className="text-black hover:text-white hover:bg-black px-4 py-2">4</button>

                      <div className="bg-black text-white p-2 rounded">
  <ArrowRight />
</div>

</div>
                    </div>
      
    </div>
  )
}

export default Banner
