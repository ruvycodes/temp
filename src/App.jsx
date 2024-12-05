import CarouselComponent from './components/CarouselComponent';
import Header from './components/Header';
import Testimonials from './components/Testimonials';
import Vision from './components/Vision';

function App() {
  return (
    <div className="bg-[#fffefc] w-full h-full pb-44">
    <Header/>
    <Vision/>
    <div className='mt-24'>
    <CarouselComponent/>
    </div>
    <Testimonials/>
    </div>
  );
}

export default App;
