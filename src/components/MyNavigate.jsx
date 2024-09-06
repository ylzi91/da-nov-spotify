
import { useDispatch, useSelector } from 'react-redux'
import logo  from '../assets/logo/logo.png'
import { BsFillHouseDoorFill, BsFillBookFill } from 'react-icons/bs'
import { Badge } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import fillMusicSection from './myFetch'
import { addToAlbumAvtion } from '../redux/actions'


export default function MyNAvigate() {
    const [searchq, setSearchq] = useState('')
    const numOfPref = useSelector((state) => state.favorite.albums.length)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <>
            <nav
            className="navbar navbar-expand-md fixed-left justify-content-between"
            id="sidebar"
          >
            <div className="container flex-column align-items-start">
              <a className="navbar-brand" href="index.html">
                <img
                  src= {logo}
                  alt="Spotify Logo"
                  width="131"
                  height="40"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <ul>
                    <li>
                      <Link
                        className="nav-item nav-link d-flex align-items-center"
                        to="/"
                        > <BsFillHouseDoorFill /> &nbsp; Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav-item nav-link d-flex align-items-center"
                        to="library"
                        ><BsFillBookFill />&nbsp; Your Library {numOfPref > 0  ? <Badge className=' ms-2' text='dark' bg= 'light'> {numOfPref} </Badge> : ''} 
                        </Link>
                    </li>
                    <li>
                      <div className="input-group mt-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                          aria-label="Search"
                          value={searchq}
                          onChange={(e) => setSearchq(e.target.value)}
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary btn-sm h-100"
                            onClick={()=> {
                                fillMusicSection(searchq).then((arrayTemp)=> dispatch(addToAlbumAvtion(arrayTemp)))
                                navigate('/searchpage')
                            }}
                          >
                            GO
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="nav-btn">
              <button className="btn signup-btn" type="button">Sign Up</button>
              <button className="btn login-btn" type="button">Login</button>
              <a href="#">Cookie Policy</a> |
              <a href="#"> Privacy</a>
            </div>
          </nav>

        </>
    )
}