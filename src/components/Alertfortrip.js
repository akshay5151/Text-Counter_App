// import React, {useState} from "react";

// export default function Alert1() {

//   const[data,setData] = useState(null);
//   const[calculate, setcalculate] = useState(false);

//   function getData(val){

//     setData(val.target.value)
//     setcalculate(false)
//   }

//   const handleOnclick =()=>{
//     setcalculate("sucesss")
//   }

//   let dieselreqA = Math.floor(data/12);
//   let petrolreqK = Math.floor(data/17);
//   let petrolreqN = Math.floor(data/19);

//   const pricediesel = dieselreqA * 92.31 ;
//   const pricepetrolK = petrolreqK * 109.52 ;
//   const pricepetrolN = petrolreqN * 109.52 ;


//   return (
//     <>
//       <div className="container my-5">
//         <h3>Mileage calculator App in React :-</h3>
//         <br/>
//         <input type="search"  onChange={getData}></input>
//         <br/>
//         <button type="button" className="btn btn-primary my-2" onClick={handleOnclick}>calculate</button>
//         <br/>
//         <ul className="container my-5">
//         <li><h3>{`For Scorpio cost will be ${pricediesel} in Rs for ${data} km`}</h3></li>
//         <li><h3>{`For Swift Dzire cost will be ${pricepetrolK}  in Rs for ${data} km`}</h3></li>
//         <li><h3>{`For Zen Estillo cost will be ${pricepetrolN}  in Rs for ${data} km.`}</h3></li>
//         <h4>{handleOnclick}</h4>
//         </ul>

//       </div>
//     </>
//   );
// }
