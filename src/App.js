import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min'
import Home from "./components/Home";
import Design from "./components/Design";
import FeaturedWork from "./components/FeaturedWork";
import Contact from "./components/Contact";


function App() {
  return (
    <div style={{backgroundColor: '#000C24'}} >
      <Home/>
      <Design/>
      <FeaturedWork/>
      <Contact/>
    </div>
  );
}

export default App;
