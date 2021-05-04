import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div>
          logo
        </div>
        <div>
          mail button
        </div>
      </div>
      <div className="App-center">
        <div>
        <span>I'm a full stack developer.</span>
        <span>full stack developer.</span>
        </div>
        <div>
          <a href="">button1</a>
          <a href="">button2</a>
        </div>
      </div>
      <div className="sidebar text-right">
        <div className="sections routes">
          <span>work</span>
          <span>blog</span>
          <span>about</span>
          <span>uses</span>
        </div>
        <div className="sections social">
          <span>github</span>
          <span>linkedn</span>
          <span>twitter</span>
          <span>instagram</span>
        </div>
      </div>
    </div>
  );
}

export default App;
