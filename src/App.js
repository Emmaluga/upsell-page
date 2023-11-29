
import Clarionbuttons from "./components/Clarionbuttons";
import ClarionLogo from "./components/Clarionlogo";
import ClarionText from "./components/Clariontext";
import ClarionProduct from "./components/Clarionproduct";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        
        <Header />
        <ClarionLogo />
        <ClarionText />
        <Clarionbuttons />
        <ClarionProduct />
        <Footer /> 
        

      </header>

    </div>
  );
}

export default App;
