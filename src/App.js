import Header from "./components/Header";
import "./App.scss";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Favorites from "./components/Favorites";
import Model from "./components/Model";

const anime = [
  {
    id: "1",
    name: "Naruto",
    img: "/img/1.jpg",
    seri: 100,
    category: "Приключения",
  },
  {
    id: "2",
    name: "One Pice",
    img: "/img/1.jpg",
    seri: 100,
    category: "Экшин",
  },
  {
    id: "3",
    name: "Blich",
    img: "/img/1.jpg",
    seri: 100,
    category: "тшлыфв",
  },
  {
    id: "4",
    name: "One Pice",
    img: "/img/1.jpg",
    seri: 100,
    category: "Экшин",
  },
  {
    id: "5",
    name: "One Pice",
    img: "/img/1.jpg",
    seri: 100,
    category: "тшлыфв",
  },
  {
    id: "6",
    name: "One Pice",
    img: "/img/1.jpg",
    seri: 100,
    category: "Экшин",
  },
];

function App() {
  const [animeFavorite, setAnimeFavorite] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [modelUser, setModelUser] = useState(false);

  const closeOpaneModel = () => {
    setModelUser(!modelUser);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const FavoritAdd = (obj) => {
    setAnimeFavorite([...animeFavorite, obj]);
    console.log(animeFavorite);
  };

  return (
    <div className="App">
      <Model modelUser={modelUser} closeOpaneModel={closeOpaneModel}>
        <div className="Entrance">
          <h2>Вход</h2>
          <div className="userLog">
            <input type="text" />
            <input type="password" />
            <input type="submit" />
          </div>
        </div>
      </Model>
      <div className="container">
        <Header closeOpaneModel={closeOpaneModel} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={anime}
                FavoritAdd={FavoritAdd}
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                setSearchValue={setSearchValue}
              />
            }
          />
          <Route
            path="/favorites"
            element={<Favorites favItems={animeFavorite} />}
          />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
