import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer'>
      <div className='flex items-center justify-between gap-5' onClick={toggleAccordion}>
        <h4 className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor'>
          {faq.question}
        </h4>
        <div className={`w-7 h-7 lg:w-8 lg:h-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && (
        <div className='mt-3'>
          <p className='text-[14px] leading-6 lg:text-[18px] lg:leading-7 text-textColor'>
            {faq.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
