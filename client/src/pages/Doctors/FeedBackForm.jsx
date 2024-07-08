import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const FeedBackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review,setReview]=useState('');

  const handleSubmitReview = async(e) => {
          e.prevenDefault();

          //later we wll use our api here
  }

  return (
    <form action='submit'>
      <div>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4'>
          How would you rate the Overall experience?*
        </h3>
        <div>
          {[...Array(5)].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type='button'
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
                className={`${index <= (hover || rating) ? "text-yellow-400" : "text-gray-400"} bg-transparent border-none outline-none text-[22px] cursor-pointer`}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className='mt-[30px]'>
        <h3 className='text-headingColor  text-[16px] leading-6  font-semibold  mb-4 mt-10'>Share your Feedback for suggestion:-</h3>
        <textarea onClick={(e) => setReview(e.target.value)} placeholder='write your Review' className='border border-solid border-blue focus:outline outline-primaryColor w-full py-3  rounded-md'>
        </textarea>
      </div>
      <button type='submit' onClick={handleSubmitReview} className='btn'>
        submit
      </button>
    </form>
  );
};

export default FeedBackForm;
