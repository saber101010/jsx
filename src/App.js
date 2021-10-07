import logo from './logo.svg';
import './App.css';
import Image from "./321.jpg"
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">saber saad</h1>

<br />

<img src="./123.jpg" />

<br />

<img src= {Image} />

</div>
<video width="320" height="240" controls>

 <source src="./video.mp4" type="video/mp4" />

</video>

    </div>
  );
}

export default App;
