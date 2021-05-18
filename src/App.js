import './App.css';

import React from 'react';
import User from './Profile/profile'
import './App.css'
import propTypes  from 'prop-types'

function App(){
  const HandleName=(name)=>alert(name);
  return(

    < div className="App">
    <header className="App-header">
    <div className='imm'>
     <User FullName=
     "Mehdi Khediri"
     Profession="Web Developer" Bio= "Hi! Im FullStack JS,based on Gafsa.I had my Certification from GomyCode.I have found enjoyment and creativity during my period of Learning Developement. " HandleName={HandleName}>
     <img src={"/Mehdi.jpg"} width={330} height={330} className="image1"></img>
     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=fire"></link>


</User>
</div>
</header>
</div>
 

  )
};

  User.propTypes={
    FullName:propTypes.string,
    Bio:propTypes.string,
    Profession:propTypes.string,
  } ;




export default App;
