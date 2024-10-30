import './App.css';
import logo from './images/logo.svg';
import CreditCard from './components/CreditCard';
import visa from './images/visa.png';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div>
      <div className="creditCardTask">
      <CreditCard type={visa}
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={2012}
      bank="BNP"
      owner="Maxence Bouret"
      bgColor="#11aa99"
      color="white"/>
      </div>
      <div className="boxColorTask">
        <BoxColor r={255} g={0} b={0} />
      </div>
    </div>
  );
}

export default App;
