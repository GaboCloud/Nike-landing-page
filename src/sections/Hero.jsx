import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { statistics } from '../constants';

const Hero = () => {
  return (
    <section id="home" className="w-full flex flex-col xl:flex-row justify-center min-h-svh gap-10 max-container border-2">
      <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span> Shoes
        </h1>
        <p className="mt-6">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
           {statistics}
        </div>
      </div>
    </section>
  )
}
export default Hero