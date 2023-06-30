import React, { useEffect } from 'react';
import axios from 'axios';
import cities from '../../Data/in.json'
import { UseWeatherAPPContext } from '../../Context/ContextWeatheApp'
const Choose = () => {
  const {state:{city}, dispatch}=UseWeatherAPPContext();
  // console.log('weatherApi',UseWeatherAPPContext(),city)
  const changeHandle =(e)=>{
    const selectedCity = cities.filter((city)=>{
     return city.city ===e.target.value
    })[0]
    // console.log(selectedCity);
    dispatch({
        type: 'SET_CITY',
        payload:selectedCity
    })
  }
  //API Call;
//   aae6ef7aaf24337392dc14208f480d13
  const APIKEY ='34480b98aa332da53123a0ac63a4ea9d'; 
  let lat = city && city.lat ? city.lat :'';
  let long = city && city.lng ? city.lng : '';
  let exclude = 'hourly,minutely';
//   const ULR =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`
  const ULR =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`;
 
  const fetchData =()=>{
    axios(ULR).then((data)=>{
      let _daily = data.data.daily
      dispatch({
        type:'SET_DAILY',
        payload:_daily
      })
    //   console.log('dataeeeeeeeee',data)
  })
  }
  useEffect(()=>{
    fetchData()
    
  },[city])
  return (
    <>
    <div className="stateWrap">
        <select className='stateMenu' defaultValue={city} onChange={changeHandle}>
            {
              cities && cities.length > 0 && cities.map((item)=>{
                return(
                  <option key={`${item.population}${item.city}`} value={item.city}>
                    {item.city}-{item.admin_name}
                  </option>
                )
              })
            }
        </select>
    </div>
    </>
  )
}

export default Choose;