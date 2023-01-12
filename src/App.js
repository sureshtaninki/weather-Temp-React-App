import React,{useState} from "react"
import "./App.css"
const api={
    base :"https://api.openweathermap.org/data/2.5/",
    key:"4a2269dc07e5fed4d63602d40289a758",
  
  }
  function Weather(){
    const [query,setQuery]=useState("");
    const [weather,setWeather]=useState({});

    const search=(event)=>{
      if (event.key==="Enter"){
        fetch(`${api.base}weather?q=${query}&units}=metrics&APPID=${api.key}`)
          .then(res=>res.json())
          .then(result=>{
            setWeather(result);
            setQuery("");
            console.log(result);
            
      });
      }
    }
    const dateBulider=(d)=>{
      let months=["January","Febuary","March","April" ,"June", "July", "August", "September", "October", "November", "December"];
      let  days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


      let day= days[d.getDay()] ;
      let date=d.getDate();
      let month=months[d.getMonth()];
      let year=d.getFullYear();
      return `${day} ${date}${month}${year}`
    }

    return(
      
      <div className={(typeof weather.main !="undefined")?((parseInt(weather.main.temp-273)<16)? "cold":"warm"):"cold"}>
        <main>
          <div className="search-container">
            <input  className="search" type="text" placeholder="Search..."
            onChange={e=>setQuery(e.target.value)} 
             value={query} 
             onKeyPress={search}/>
             </div>
          {(typeof weather.main != "undefined")?(
          <div >
            <div className="conta">
              <div className="countryname">{weather.name},{weather.sys.country}</div>
              <div className="date">{dateBulider(new Date()) }</div>
            </div>
            <div className="degree-container">
              <div className="degree">
              
              {parseInt(weather.main.temp)-273}°c</div>
              <div className="climate">{weather.weather[0].main}</div>
            </div>
          </div>
          ) :("")}
        </main>
      </div>
    );

  }
  export default Weather;