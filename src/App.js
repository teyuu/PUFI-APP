import GridSection from './components/GridSection';
import ItemsSection from './components/ItemsSection';
import Main from './components/Main';
import NewsLetterSection from './components/NewsLetterSection';
import Footer from './components/Footer';
import MiniFooter from './components/MiniFooter';


function App() {
  return (
    <div className="App">
      <Main/>
      <ItemsSection/>
      <GridSection/>
      <NewsLetterSection/>
      <Footer/>
      <MiniFooter/>
    </div>
  );
}

export default App;
