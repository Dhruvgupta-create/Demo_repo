import React, { useState } from 'react'
import avatar from "../../assets/images/avatar-icon.png"
import { formatDate } from '../../utils/FormateDate'
import {AiFillStar} from "react-icons/ai"
import FeedBackForm from './FeedBackForm'

const Feedback = () => {

  const [showFeedBackForm,setFeedBackForm]=useState(false);
  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          All reviews(272)
        </h4>
        <div className='flex justify-between gap-10 mb-[30px]'> 
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full'>
              <img className='w-full' src={avatar} alt='' />
            </figure>
            <div>
              <h5 className='text[16px] leading-6 text-primaryColor font-bold'>
                ALi ahmed
              </h5>
              <p className='text-[14px] leading-6 text-textColor'>{formatDate(20-9-2019)}</p>
              <p className='text_para mt-3 font-medium text-[15px]'> Highly recommended</p>
            </div>
          </div>
          <div className='flex gap-1'>
            {
             [...Array(5).keys()].map((_,index) => (
                      <AiFillStar key={index} color='blue' />
             ))
            }

          </div>
        </div>
      </div>
      {!showFeedBackForm && (<div className='text-center'>
        <button className='btn' onClick={() => (setFeedBackForm(true))}>
        Give feedback
        </button>
      </div>)}

      {showFeedBackForm && <FeedBackForm />}
    </div>
  )
}

export default Feedback