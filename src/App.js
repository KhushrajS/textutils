import logo from './logo.svg';
import './App.css';

import MenuBar from './Components/menubar';
import Textarea from './Components/TextArea';  
import About from './Components/About';
import {

  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";




function App() {
  return (
<>






<Router>
<MenuBar title="Textutils"/>


<Routes>

<Route exact path="/" element={<Textarea/>}/>
<Route exact path="/about" element={<About/>}/>
 

</Routes>


</Router>
 </>
  );
}

export default App;
