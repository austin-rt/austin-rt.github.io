import React from 'react';
import Resume from '../../assets/Austin-Taylor-ATS-Resume.pdf';

export default function CallToAction({contact, scrollTo}) {
  return (
    <div className='call-to-action'>
      <a href={Resume} download className='btn'>Download Resume</a>
      <div onClick={()=>{scrollTo(contact)}} className='btn btn-primary'>Let's Chat</div>
    </div>
  );
}
