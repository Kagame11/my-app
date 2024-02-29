import { useState } from 'react';

 const react = require('react');
 export default function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    alert('You clicked me!');
  }
   return (
     <div>
       <h1>Counters that update parallel</h1>
       <MyButton count={count} onClick={handleClick}/>
       <br/>
       <MyButton count={count} onClick={handleClick}/>
      
     </div>
   );
 }

 function MyButton({ count, onClick }) {
  

  
     return (
    
    <button onClick={onClick}>
       Clicked {count} times
     </button>
   );
 }

 

 








