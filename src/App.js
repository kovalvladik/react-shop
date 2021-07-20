import {Button,Typography,Paper} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Shop} from "./Components/Shop";
import {BasketList} from "./Components/BasketList";

function App() {
  return (
    <div className="App">
        <Header/>
            <Shop/>
        <Footer/>
    </div>
  );
}

export default App;
