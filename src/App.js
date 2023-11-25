import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import { Jsx } from './components/Jsx';
import WelcomeState from './components/WelcomeState';
import Count from './components/Count';
import FunClick from './components/FunClick';
import ClassClick from './components/ClassClick';
import EventBInd from './components/EventBInd';
import ParentComp from './components/ParentComp';
import CondtionalRender from './components/CondtionalRender';
import Rough from './components/Rough';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css'
import styles from './appStyle.module.css'
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      {/* <Rough/> */}
      {/* <Greet name="Anas" no="1">
        <p1> This is Child Prop</p1>
        </Greet> */}
      {/* <Greet name="Anna" no="2"/> */}
      {/* <Greet name="Anny" no="3"/> */}
      {/* <Welcome name="Anas" no="1"/> */}
      {/* <Welcome name="Anna" no="2"/> */}
      {/* <Jsx/> */}
      {/* <WelcomeState/> */}
      {/* <Count/> */}
      {/* <FunClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBInd/> */}
      {/* <ParentComp/> */}
      {/* <CondtionalRender/> */}
      {/* <NameList/> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <Inline/> */}
      <Form/>
    


    </div>
  );
}

export default App;
