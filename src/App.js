import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';

function App(){
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
//   const [myStyle,setyStyle]=useState({
//     color:mode=='black'?'white':'black',
//     backgroundColor:mode
// });
  const showAlert=(message,type)=>{
      setalert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setalert(null);
      },2000)

  }
  const toggleMode=(modes)=>{
        setMode(modes);
        // setyStyle({color:modes=='black'?'white':'black',
        // backgroundColor:modes});
        document.body.style.backgroundColor=modes;
        showAlert(modes+" Mode Has Been Enabled","success");
        document.title='TextUtils '+modes+" has been enabled"

  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="Text Analyzer" mode={mode} about="about us" toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">

    {/* <Switch>
          <Route exact path="/about" mode={mode}>
            <About myStyle={myStyle}/>
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm alert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route>
        </Switch> */}
      
    </div>
    {/* <About/> */}
    
    {/* </Router> */}
    </>
  );
}

export default App;
