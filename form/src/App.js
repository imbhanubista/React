import React, {useState} from 'react';


const App = () => {

const [fullName, setFullName] = useState({
  fname : "",
  lname : "",
  email : "",
  phone : "",
});

  const InputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    
    //const value = event.target.value;
    //const name = event.target.name;
    //Yo mathi ko dui line ko sato <object distructuring>

    const {value,name} = event.target;

    setFullName((preValue) => {
      //console.log(preValue);
      if (name === "fName"){
          return{
            fname : value,
            lname : preValue.lname,
            email: preValue.email,
            phone: preValue.phone,
          };
      }
      else if (name === "lName"){
          return{
            fname: preValue.fname,
            lname: value,
            email: preValue.email,
            phone: preValue.phone,
          };
      }
      else if (name === "email"){
        return{
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone: preValue.phone,
        };
    }
    else if (name === "phone"){
      return{
        fname: preValue.fname,
        lname: preValue.lname,
        email: preValue.email,
        phone: value,
      };
  }
    });

  };
  const onSubmit = (event) =>{
    event.preventDefault();
     alert('Form Submitted')
  };
 
 
return(
  <>
  <div className="main_div">
    <form onSubmit={onSubmit}>
    <div>
      <h1>Login {fullName.fname} {fullName.lname}  </h1>
      <p> {fullName.email} </p>
      <p> {fullName.phone} </p>
      <input type='text' placeholder='Enter Your First Name'
      name='fName'
      onChange={InputEvent}
     value={fullName.fname}
      />
      <br />
      <input type='text' placeholder='Enter Your Last Name'
      name='lName'
      onChange={InputEvent}
      value={fullName.lname}
      />

<input type='email' placeholder='Enter Your e-mail'
      name='email'
      onChange={InputEvent}
      value={fullName.email}
      autoComplete='off'
      />

<input type='number' placeholder='Enter Your Phone Number'
      name='phone'
      onChange={InputEvent}
      value={fullName.phone}
      />
      <button type="submit" onClick={onSubmit}>Click Here</button>
    </div>
    </form>
    </div>
  </>
)
}
export default App;
