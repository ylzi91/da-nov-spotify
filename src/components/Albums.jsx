import { useDispatch, useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { addSelAction, addToFavoriteAction, removeToFavoriteAction } from "../redux/actions";

export default function Albums({ singleSong }) {
  const dispatch = useDispatch();
  const present = useSelector((state) => state.favorite.albums);
  console.log(present);

  return (
    <>
      <div className="col text-center d-flex flex-column align-ites-center">
        <img
          className="img-fluid pointer"
          src={singleSong.album.cover_medium}
          alt="track"
          onClick={()=> {
            dispatch(addSelAction(singleSong))
          }}
        />
        <p>
          Track: {singleSong.title}
          <br />
          Artist: {singleSong.artist.name}
        </p>

        {present.find((alb) => alb.id === singleSong.id) ? (
          <FaHeart
            className=" align-self-center text-success fs-3 pointer"
            onClick={() => {
              dispatch(removeToFavoriteAction(singleSong.id));
            }}
          />
        ) : (
          <FaRegHeart
            className=" align-self-center text-success fs-3 pointer"
            onClick={() => {
              dispatch(addToFavoriteAction(singleSong));
            }}
          />
        )}
      </div>
    </>
  );
}
