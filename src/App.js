import { useState } from 'react';
import './App.css';
// import About from './component_for_props/About';
import Alart from './component_for_props/Alart';
import Navbar from './component_for_props/Navbar';
import Textfrom from './component_for_props/Textfrom';
// for react router 

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route 
// } from "react-router-dom";


function App() {

  // all the states are here
  const [mode, setMode] = useState({
    color: '#050A2A',
    backgroundColor: 'white'
  }) //dark light mode part

  const [BtnText, setBtnText] = useState('Enable Dark Mode')

  const [alart, setAlart] = useState(null);
  const showAlart = (massage, type) => {
    setAlart({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlart(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode.color === 'white') {
      setMode({
        color: '#050A2A',
        backgroundColor: 'white'

      })
      document.body.style.backgroundColor = 'white'
      setBtnText('Enable Darks Mode')
      showAlart(' Light Mode Is Enabled...','success')
    }
    else {
      setMode({
        color: 'white',
        backgroundColor: '#050A2A'
      })
      document.body.style.backgroundColor = '#050A2A'
      setBtnText('Desable Dark Mode')
      showAlart(' Dark Mode Is Enabled...','success')
    }
  }

  // themes part is here 
  const blue_theme=()=>{
    setMode({
      color: '#373E00',
      backgroundColor: '#8CBFF9'
    })
    document.body.style.backgroundColor = '#8CBFF9'
    setBtnText('Desable blue Mode')
    showAlart(' blue Mode Is Enabled...','success')
  }

  const ass_theme=()=>{
    setMode({
      color: '#48CEB3',
      backgroundColor: '#354E5E'
    })
    document.body.style.backgroundColor = '#354E5E'
    setBtnText('Desable blur Mode')
    showAlart(' blue Mode Is Enabled...','success')
  }

  const green_theme=()=>{
    setMode({
      color: 'rgb(0 240 252)',
      backgroundColor: '#00761C'
    })
    document.body.style.backgroundColor = '#00761C'
    setBtnText('Desable green Mode')
    showAlart(' green Mode Is Enabled...','success')
  }

  const red_theme=()=>{
    setMode({
      color: 'yellow',
      backgroundColor: '#430000'
    })
    document.body.style.backgroundColor = '#430000'
    setBtnText('Desable Red Mode')
    showAlart(' Red Mode Is Enabled...','success')
  }

  const yellow_theme=()=>{
    setMode({
      color: 'black',
      backgroundColor: 'rgb(79 81 0)'
    })
    document.body.style.backgroundColor = 'rgb(79 81 0)'
    setBtnText('Desable yellow Mode')
    showAlart(' yellow Mode Is Enabled...','success')
  }

  const sky_theme=()=>{
    setMode({
      color: 'black',
      backgroundColor: '#01D2C4'
    })
    document.body.style.backgroundColor = '#01D2C4'
    setBtnText('Desable sky Mode')
    showAlart(' sky Mode Is Enabled...','success')
  }

  return (
    <>
    {/* <Router> */}
      {/* if any non closing tag is present then JSX gives error ,we have to close that tag first */}

      {/* the title is passed through props like {props.title} */}
      <Navbar title="textconverter" mode={mode} btntext={BtnText} togglemode={togglemode} blue_theme={blue_theme} ass_theme={ass_theme} green_theme={green_theme} yellow_theme={yellow_theme} red_theme={red_theme} sky_theme={sky_theme}/>
      {/* Navbar is a js file in a module ,if we call it in our function like this then that will transfer to here. */}

      <Alart alart={alart}/>

      <div className="container">
      {/* <Routes> */}
          {/* <Route path="/about" element={<About />}></Route> */}
          <Textfrom heading="Enter The Text To Analyze:" btn="Convert to " mode={mode} showalart={showAlart} />

          {/* <Route path="/" element={<Textfrom heading="Enter The Text To Analyze:" btn="Convert to " mode={mode} showalart={showAlart} />}> </Route> */}
        {/* </Routes> */}
      </div>
{/* </Router> */}
    </>
  );
}

export default App;;
