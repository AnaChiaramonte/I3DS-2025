import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import MovieCards from "./components/movieCards/MovieCards";

const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  //utilizando chat de api do arquivo.env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  //Alimentando com dados para não ficar nulo
  useEffect(() => {
    searchMovies("Batman");
  }, []);
  //criando a conexão com a API e trazendo informações
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    //alimentando o movies
    setMovies(data.Search);
  };

//e = evento | ao clicar ou digitar acontece algo, quando apertar o enter vai funcionar a pesquisa 
const hendlekeyPress = (e) => {
  e.key === "Enter" && searchMovies(search);
}
  return (
    <div id="app">
      <img className="logo" src={"https://placehold.co/200x200"} alt="" />

      <div className="search">
        <input 
        onKeyDown={hendlekeyPress}
        onChange={(e) => setSearch(e.target.value)}
        
        type="text" placeholder="Pesquisa por filme" />
        <img onClick={() => searchMovies(search)} src={"https://placehold.co/20x20"} alt="" />
      </div>
{movies?.length > 0 ? (
  <div className="container">
      {movies.map((movie, index) => (
        <MovieCards key={index} {...movie} />
      ))}
      </div>
) : (
  <h2 className="empty">😿Filme não encontrado😿</h2>
)}

      <Footer devName={" Ana clara"} devlinks={"https://github.com"} />
    </div>
  );
};

export default App;
