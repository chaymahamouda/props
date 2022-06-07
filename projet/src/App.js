
import './App.css';
import Profile from './components/Profile';

function App() {
  const fullName="chaima";
  const bio="chaima hamouda";
  const profession="dev fullstack";
  const handleAlert=(x)=>alert(x);
  
  

  return (
    <div className="App">
    <Profile fullName={fullName} bio={bio} profession={profession} handleAlert={handleAlert}/>
    </div>
  );
}

export default App;
