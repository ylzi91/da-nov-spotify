import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNAvigate from "./components/MyNavigate";
import Cover from "./components/Cover";
import Player from "./components/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Library from "./components/Library";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <aside className="col col-2">
            <MyNAvigate />
          </aside>
          <main className="col-12 col-md-9 offset-md-3 mainPage">
            <Routes>
            <Route path="/" element = { <Cover />}  /> 
            <Route path="/library" element = {<Library />} />
            <Route path="/searchpage" element = {<SearchPage />} />

            </Routes>
          </main>
        </div>
      </div>

      <Player />
    </BrowserRouter>
    </>
  );
}

export default App;
