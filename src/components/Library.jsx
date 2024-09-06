import { useSelector } from "react-redux";
import Albums from "./Albums";




export default function Library() {

   const prefAlbums = useSelector((state)=> state.favorite.albums)
  return (
    <>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Your Library</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {prefAlbums.map((item) => (
                <Albums key={item.id} singleSong={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
