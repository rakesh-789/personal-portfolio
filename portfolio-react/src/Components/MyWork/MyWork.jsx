import React from 'react'
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  return (
    <div id='work' className='work'>
        <div className='work-title'>
            <h1>My latest work</h1>
        </div>
        <div className='work-container'>
            {mywork_data.map((work, index) => {
                return <div className='work-format' key={index}>
                    <h3 className='number'>{work.w_no}</h3>
                    <h3 className='name'>{work.w_name}</h3>
                    <p>{work.w_desc}</p>
                    <div className='work-readmore'>
                        <p>Read More...</p>
                        {/* <img src={arrow_icon} alt='icon' /> */}
                    </div>
                </div>
            })}
        </div>

    </div>
  )
}

export default MyWork