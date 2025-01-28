import logo from './logo.svg';
import './App.css';
import NavBarNew from './components/NewNav/NavBarNew';
import AboutYelena from './components/me/Me';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import Treatments from './components/treatments/Treatments';
import ByMe from './components/ByMe/ByMe';
import ThirdScreen from './screens/ThirdScreen';
import ForthScreen from './screens/ForthScreen';
import FifthScreen from './screens/FifthScreen';

function App() {
  return <>
  <NavBarNew/>
  <FirstScreen/>
  <SecondScreen/>
  <AboutYelena/>
  <ThirdScreen/>
  <ForthScreen/>
  <FifthScreen/>
  <ByMe/>
  </>
}

export default App;
