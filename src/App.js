import logo from './logo.svg';
import './App.css';
import HomePage from './components/homepage';
import HamburgerMenu from './components/hamburger-menu';

function App() {

  
  let menuList = ["Home","Contact Us","About Us"];
  return (
    <div className="App">
      <header className="App-header">
        <div className='app-header-sec'>Holiday Makers</div>
      <ul className='menu-sec'>
        {menuList.map((_data,index)=>{
          return (
          <li key={index}>{_data}</li>);
        })}
        </ul>
        <div className='hb-menu'>
          <HamburgerMenu  />
        </div>
      </header>
      <HomePage name={'Anurag'}/>
    </div>
  );
}

export default App;
