import './App.scss';
import Header from './components/Header/Header';
import Car from './components/Car/Car';
import { cars } from './constants/cars';
import ShowMore from './components/ShowMore/ShowMore';

function App() {
  return (
    <div className="wrapper">
      <Header />

      {cars.map((car) => (
        <Car
          key={car.id}
          title={car.carName.toUpperCase()}
          previousPrice={car.previousPrice}
          currentPrice={car.currentPrice}
          payment={car.payment}
        />
      ))}

      <ShowMore />
    </div>
  );
}

export default App;
