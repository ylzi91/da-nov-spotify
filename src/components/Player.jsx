
import  shuffle from '../assets/playerbuttons/shuffle.png' 
import  prev from '../assets/playerbuttons/prev.png' 
import  play from '../assets/playerbuttons/play.png' 
import  next from '../assets/playerbuttons/next.png' 
import  repeat from '../assets/playerbuttons/repeat.png' 
import { useSelector } from 'react-redux'




export default function Player() {
    const albset = useSelector ((state)=> state.selected.select)

  return (
    <>
      <div className="container-fluid fixed-bottom bg-container pt-">
        <div className="row">
          <div className="col-lg-10 offset-lg-2">
            
            <div  className="row justify-content-center align-items-center">
          <div className='col-3 col-md-3'>
            <img src={albset?.album.cover_medium} style={{width: '50px'}} alt="" />
            <p className='text-light'>{albset?.title}</p>
            </div>
              <div className="col-9 col-md-9 playerControls">
                <div className="d-flex">
                  <a href="#">
                    <img src={shuffle} alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src={prev} alt="prev" />
                  </a>
                  <a href="#">
                    <img src={play} alt="play" />
                  </a>
                  <a href="#">
                    <img src={next} alt="next" />
                  </a>
                  <a href="#">
                    <img src={repeat} alt="repeat" />
                  </a>
                </div>
                <div className="progress mt-3">
                  <div role="progressbar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
