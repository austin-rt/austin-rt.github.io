import React from 'react';
import Resume from '../../assets/Austin-Taylor-ATS-Resume.pdf';

export default function CallToAction() {
  return (
    <div className='call-to-action'>
      <a href={Resume} download className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Chat</a>
    </div>
  );
}
