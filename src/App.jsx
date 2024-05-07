
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Program from './components/program/Program'
import Title from './components/title/Title';
import About from './components/about/About';
import Campus from './components/campus/Campus';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="PROGRAMS AVAILABLE" title="Services been rendered" />
        <Program />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus/>
      </div>
    </div>
  );
}

export default App
