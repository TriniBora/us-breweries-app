import './App.css';
import Breweries from './components/Breweries';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <Breweries />
  );
}

export default App;
