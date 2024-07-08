import React from 'react'
import { formatDate } from '../../utils/FormateDate'

const DoctorAbout = () => {
  return (
    <div>
        <div>
            <h3 className='text-20[px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                    ABout
                    <span className='text-irisBlueColor font-bold text-[24px]  leading-9'>Dhruv Gupta</span>
            </h3>
            <p className='text_para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, animi vitae facere aliquam sed,
                 temporibus quos sunt sit officia, quod delectus omnis nihil laborum deleniti perferendis praesentium. Nulla, beatae eaque.</p>
        </div>
        <div className="mt-12">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>

            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formatDate("12-13-2004")} - {formatDate("09-13-2008")}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                             PHD Surgeon
                        </p>
                    </div>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            address ds feag
                        </p>
                </li>

                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                              {formatDate("12-04-2008")} -{formatDate("2-9-2012")}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                             PHD Surgeon
                        </p>
                    </div>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            address ds feag
                        </p>
                </li>
            </ul>
        </div>

        <div className='mt-12'>
             <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold"></h3>
             <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className='p-4 rounded bg-white'>
                    <span className='text-yellowColor  text-[15px] leading-6 font-semibold'>
                    {formatDate("2-04-2012")} -{formatDate("2-9-2018")}
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            sr surgeon
                        </p>

                    </span>

                </li>
                <li className='p-4 rounded bg-white'>
                    <span className='text-yellowColor  text-[15px] leading-6 font-semibold'>
                    {formatDate("2-04-2018")} -{formatDate("2-9-2024")}
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                             junuior surgeon
                        </p>

                    </span>

                </li>
             </ul>
        </div>
    </div>
  )
}

export default DoctorAbout