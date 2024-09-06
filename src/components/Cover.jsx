import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToAlbumAvtion } from "../redux/actions";
import Albums from "./Albums";
import fillMusicSection from "./myFetch";


export default function Cover() {
  const [album1, setAlbum1] = useState([]);
  const [album2, setAlbum2] = useState([]);
  const [album3, setAlbum3] = useState([]);
  const dispatch = useDispatch();
  

  //  const fillMusicSection = async (artistName) => {
  //   try {
  //     const response = await fetch(
  //       "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
  //         artistName
  //     );
  //     if (response.ok) {
  //       const arrayTemp = [];
  //       let { data } = await response.json();
  //       for (let i = 0; i < 4; i++) {
  //         arrayTemp.push(data[i]);
  //       }
  //       return arrayTemp;
  //     } else {
  //       throw new Error("Error in fetching songs");
  //     }
  //   } catch (err) {
  //     console.log("error", err);
  //   }
  // };

  useEffect(() => {
    fillMusicSection("Queen").then((arrayTemp) => setAlbum1(arrayTemp));
    fillMusicSection("katyperry").then((arrayTemp) => setAlbum2(arrayTemp));
    fillMusicSection("eminem").then((arrayTemp) => setAlbum3(arrayTemp));
    
}, []);


  return (
    <>
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock classics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            >
                {
                    album1.map((item) => <Albums key = {item.id} singleSong = {item} /> )
                }
                
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
                 {
                    album2.map((item) => <Albums key = {item.id} singleSong = {item} /> )
                }
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            >
                 {
                    album3.map((item) => <Albums key = {item.id} singleSong = {item} /> )
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

