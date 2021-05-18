import react from 'react'

const User = (props) => {
    props.HandleName(`My name is ${props.FullName} `);
    return (
      <>
        <div className='im' style={{fontFamily:"sofia", justifyContent:"center",alignItems:'center',top:'100px',background:'transparent',boxshadow:'-30px 30px 20px rgba(0,0,0.3)',width:'300',height:'200',margin:'20px 200px',borderstyle:'outset',border:'2px transparent',borderradius:'25px'}}>
        <img src={props.src} alt=""/>{props.children}
         <h1 class="font-effect-fire"> {props.FullName}</h1> 
         <h3>Profession : {props.Profession }</h3>
        <p>Bio : {props.Bio }</p>
          
        </div>
      </>
    );
  };
  
export default User;