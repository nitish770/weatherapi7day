import React from 'react'
import Choose from './ChooseState/Choose';
import WeekIndex from './WeekinfoCard/WeekIndex';
import Humiditys from './Humidity/Humiditys';
import LeftIndex from './Left/LeftIndex';

const Home = () => {
  return (
    <>
    <div className='homeWrap'>
    <div className='weatherSection'>
         <LeftIndex/>
        <div className="rightSide">
            <Choose/>
            <WeekIndex/>
            <Humiditys/>
        </div>
    </div>
    </div>
    </>
  )
}

export default Home;