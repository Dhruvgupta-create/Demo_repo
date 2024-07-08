import React from 'react';
import { doctors } from '../../assets/data/doctors';
import DoctorCard from '../../components/Doctors/DoctorCard';
import Testimonial from '../../components/Testimonials/Testimonial';

const Doctors = () => {
  return (
    <>
    <section className='bg-white'>
      <div className="container text-center">
        <h2 className="heading">Find a Doctor</h2>
        <div className='max-w-[570px] mt-[30px] mx-auto bg-white  border-2 rounded-md flex items-center justify-between'>
          <input type='search' placeholder='Search Doctor' className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'/>
          <button className='btn mt-0 rounded-[0px] rounded-r-md'>search Doctor</button>
        </div>
      </div>
    </section>
         
      <section>
            <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
                {doctors.map((doctor) => (
                        <DoctorCard key={doctor.id} doctor={doctor}/>
                ))}
            </div>
            </div>
      </section>

      <div className="container">
         <div className='xl:w-[470px] mx-auto'>
              <h2 className='heading text-center'>What our Patients Says</h2>
              <p className='text_para text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minima provident architecto amet asperiores non.
              </p>
            </div>
            <Testimonial />
      </div>
         </>
  );
}

export default Doctors;
