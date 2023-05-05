import "./App.css";
import Hero from "./Componentes/Hero";
import Join from "./Componentes/Join";
import Planes from "./Componentes/Planes";
import Programs from "./Componentes/Programs";
import Reasons from "./Componentes/Reasons";
import Testimonios from "./Componentes/Testimonios";
import Footer from "./Componentes/Footer";

function App() {
  return (
    <div className="App">
       <Hero/> 
      <Programs />
      <Reasons />
      <Planes />
      <Testimonios />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
