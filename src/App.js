import Header from './components/header/Header';
import './App.css';
import Footer from './components/footer/Footer';
import Allrestaurant from './components/allrestaurant/Allrestaurant';
import Viewrestaurant from './components/Viewrestaurant';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>

      <section>
        <Routes>
          <Route path='/' element={<Allrestaurant/>} />
          <Route path='/view/:id' element={ <Viewrestaurant/>} />
        </Routes>
      </section>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
