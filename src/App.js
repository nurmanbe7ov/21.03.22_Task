import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import FunctionUp from "./components/FunctionUp/FunctionUp";

function App() {
  let functionArr = (arr) => {
    console.log(arr);
  };

  return (
    <div className="App">
      <Header />
      <Section />
      <Footer />
      <FunctionUp functionArr={functionArr} />
    </div>
  );
}

export default App;
