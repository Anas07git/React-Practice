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
import LifeCycleA from './components/LifeCycleA'; 
import LifeCycleX from './components/LifeCycleX';
import Fragment from './components/Fragment';
import ParentClassComp from './components/ParentClassComp';
import RefDemo from './components/RefDemo';
import ParentRef from './components/ParentRef';
import ForwardRefParent from './components/ForwardRefParent';
import Portals from './components/Portals';
import Hero from './components/Hero';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import RenderCount from './components/RenderCount';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';

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
      {/* <Form/> */}
      {/* <LifeCycleA/> */}
      {/* <LifeCycleX/> */}
      {/* <Fragment/> */}   
      {/* <ParentClassComp/> */}
      {/* <RefDemo/> */}
      {/* <ParentRef/> */}
      {/* <ForwardRefParent/> */}
      {/* <Portals/> */}
      {/* <Hero/> */}
      {/* <ClickCounter name="Anas"/> */}
      {/* <HoverCounter /> */}
      <RenderCount render={(count,increment)=> 
      <ClickCounterTwo count={count} increment={increment}/>
      }/>
      <RenderCount render={(count,increment)=> 
      <HoverCounterTwo count={count} increment={increment}/>
      }/>
     
      


    </div>
  );
}

export default App;
