import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
// import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import { Reserve } from "../components/Reserve/Reserve";
import About from "../components/About/About";


const dishes = [
  {
    id: 1,
    name: 'Crepes de Champiñones',
    description: 'Deliciosos crepes rellenos de champiñones frescos y suaves hierbas.',
    price: 10
  },
  {
    id: 2,
    name: 'Sopa de Cebolla',
    description: 'Una clásica sopa francesa con cebollas caramelizadas, caldo de carne y crujientes crutones de pan cubiertos con queso derretido.',
    price: 20
  },
  {
    id: 3,
    name: 'Ratatouille',
    description: 'Un guiso provenzal tradicional hecho con una variedad de vegetales frescos como berenjenas, calabacines, pimientos, tomates y hierbas aromáticas.',
    price: 15
  }
];


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home menu={dishes} />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

