import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Mainimage from './components/Mainimage';
import Navigation from './components/Navigation';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Mainimage/>
      <Projects/>
      <Form/>
      <Footer/>
      
    </div>
  );
}

export default App;
