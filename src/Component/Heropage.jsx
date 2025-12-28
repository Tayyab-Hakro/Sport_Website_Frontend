import BgImg from "../Component/Sports_assests/baseball_Icon.png";
import Player from "../Component/Sports_assests/player.png";
import SportCar from "../Component/Sports_assests/RaceCar.png"
import SportWomen from "../Component/Sports_assests/SportWomen.png"
function Heropage() {
  return (
    <div className="w-full h-screen relative">

      {/* Ball background */}
      <div
        className="absolute top-20 left-5 w-[60%] h-[60%] bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${BgImg})` }}
      />

      {/* Text */}
      <div className="absolute  w-[30%] top-40 left-50 z-4  font-bold text-[3.5rem]">
        TOP SCRORE TO THE FINAL MATCH
      </div>

      {/* Player image */}
      <div
        className="absolute  right-[30%] top-10  w-[60%] h-[70%] bg-no-repeat bg-center bg-contain z-10"
        style={{ backgroundImage: `url(${Player})` }}
      />
      <div className=" absolute w-[30%] left-[40%] top-[60%] ">
        The EuroLeague Finals Top Scorer is the individual award for the player
         that gained the highest points in the EuroLeague Finals
         <div></div>
         <button className="bg-black px-4 py-3 text-white top-10">continue reading</button>
        <div
  className="absolute top-[-300%] left-[95%] w-[300px] h-[300px] bg-no-repeat bg-center bg-contain  flex items-center justify-center"
  style={{ backgroundImage: `url(${SportCar})` }}
>
    </div>
 <div
  className="absolute top-[-80%] left-[95%] w-[300px] h-[300px]
             bg-no-repeat bg-center bg-contain
             flex items-start justify-center"
  style={{ backgroundImage: `url(${SportWomen})` }}
>
  <span className="text-black opacity-30 border-t-2 bg-black/10 absolute top-[65%] text-sm font-medium
                   px-3 py-2 rounded w-[90%] text-center">
    INDYCAR - 03 June 2023 IndyCar Detroit: Dixon quickest in second practice 
  </span>
</div>

</div>



      </div>
      
  );
}

export default Heropage;
