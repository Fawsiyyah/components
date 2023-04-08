
import "../App.css";
import SearchBar from "./SearchBar";
import Logo from "../images/google.png";
import Button from "./Button"
import Language from "./LanguageLink"

 const SearchSection = () => {
  return (
    <main>
      <img src={Logo} alt="Google logo" className="App-logo" />
      <SearchBar />
      <Button />
      <Language />
     
    </main>
  );
}

export default SearchSection;