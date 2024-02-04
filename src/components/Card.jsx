import PropTypes from "prop-types";
import StarsRank from "./StarsRank";

const Card = ({ nameManga, imgManga, rank, numCap }) => {
  return (
    <div
      className=" relative  w-full max-w-52  border-gray-200 rounded-lg shadow h-72 transition ease-in-out delay-75 hover:scale-110 duration-300"
      style={{
        backgroundImage: `url(${imgManga})`,
        backgroundSize: "cover",
        objectFit: "",
      }}
    >
      <div className="px-2 md:px-2 pb-1 absolute rounded-t-none rounded-b-lg bottom-0 bg-slate-400/80 w-full">
        <a href="#">
          <h5 className=" text-center text-xl font-semibold tracking-tight text-gray-100">
            {nameManga}
          </h5>
        </a>
        <div className="flex flex-row-reverse justify-between items-center">
          <div className="flex items-center mb-2 md:mb-1">
            <StarsRank cantidad={rank} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900">
              N° Cap : {numCap}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  nameManga: PropTypes.string.isRequired,
  imgManga: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  numCap: PropTypes.number.isRequired,
};

export default Card;
