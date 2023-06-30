import React, { useEffect, useState } from 'react'
import { UseWeatherAPPContext } from '../../Context/ContextWeatheApp';
import SingleCd from '../SingleCard/SingleCd';

const WeekIndex = () => {
    const{state:{daily}, dispatch} = UseWeatherAPPContext();
    const[selectedCard, setSelectedCard]=useState(0);
    // console.log('daily',daily);
    const updateCurrent=()=>{
        return(
            dispatch({
                type:'SET_CURRENT',
                payload:daily[selectedCard]
            })
        )
    }
    useEffect(()=>{
        updateCurrent()
        // eslint-disable-next-line
    },[daily, selectedCard])
  return (
    <>
    <div className="cardWrap">
        <ul className="cardList">
            {
                daily && daily.length > 0 ? daily.map((item,index)=>{
                    if (index<7) {
                        return <SingleCd key={index} item={item} 
                        className={index === selectedCard ? 'active' : ''}onClick={()=>{
                            // return console.log('index',index)
                            setSelectedCard(index);
                            updateCurrent()
                        }}/>
                    }
                    
                }) : ''
            }
        </ul>
    </div>
    </>
  )
}

export default WeekIndex;