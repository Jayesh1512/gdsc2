import './App.css';
import Hero from  './components/Hero';
import Page1 from './components/Page1';
import Page10 from './components/Page10';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';
import Page8 from './components/Page8';
import Page9 from './components/Page9';
import scrool from './components/resources/scroll-down.png'
function App() {
  return (
    <div className='display'>
   
     <div className='scrool'> 
     <img src= {scrool}></img>
     </div>
    <Hero />
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
    <Page10 />
    <Page6 />
    <Page7 />
    <Page8 />
    <Page9 />
    </div>
  );
}

export default App;
