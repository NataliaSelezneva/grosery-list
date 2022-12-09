
import './App.css';
// import image from './grocery.jpg';
import { GroseryList } from './GroseryList';


function App() {
  return (
    <div>
      <div className='container'>
      <div>
        {/* <img src={image} alt='grosery' width='100px'  /> */}

      <div className='blockStyle'>
        <h1>Grocery List</h1>
      </div>

      </div>
      <GroseryList />


    </div>  
    </div>
  );
}

export default App;
