import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./component/NavBar";
import Home from "./component/Home";
import About from "./component/About";
import Search from "./component/Search";
import Movie from "./component/Movie";
import { Switch, Route } from "react-router-dom";


function App() {


  const [searchResults, setSearchResults] = useState([]);
  const [ searchText, setSearchText ] = useState('');

  useEffect(() => {
    if(searchText) {
      
      console.log(searchText, "is the search text")
      fetch(`https://api.themoviedb.org/3/search/company?api_key=016acae896b1141ca2b291f75736549f&query=${searchText}&page=1`)
      .then(response => response.json())
      .then(data =>{
        console.log(data)
        setSearchResults(data.results)
      })
    }
  }, [searchText])

  return (
    <div>
      <NavBar searchText={searchText} setSearchText={setSearchText}/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/Search">
          <Search keyword={searchText} searchResults={searchResults}/>
        </Route>
        <Route path="/movies/:id" component={Movie} />
      </Switch>
      
    </div>
  );
}

export default App;
