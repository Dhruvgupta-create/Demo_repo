import React from 'react'
import {faqs} from "../../assets/data/faqs.js"
import FaqItem from './FaqItem.jsx'


const FaqList = () => {
  return (
    <ul className='mt-[38px]'>
        {faqs.map((faq,index) =>(
            <FaqItem faq={faq} key={index} />
        ))}
    </ul>
  )
}

export default FaqList