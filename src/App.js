import './App.css';
import Header from './components/Header/Header';
import Question from './components/Header/Question/Question';
import Shop from './components/Header/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
