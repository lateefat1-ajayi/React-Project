import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

export const Rating = ({rating}) => {
  let ratingArray = Array(5).fill(false);
  for(let i=0; i<rating; i++){
      ratingArray[i] = true;
  }

return (
  <div className="flex">
      { ratingArray.map((value, index) => (
          value ? (
              <i key={index} className="text-lg  text-yellow-500 mr-1">
                 <FaStar />
               </i>
          ) : (
              <i key={index} className="text-lg  text-yellow-500 mr-1">
                <CiStar />
                 </i>
          )
      )) }
  </div>
)
}

