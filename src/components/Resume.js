import React from 'react'
import pdf from '../assets/Resume.PDF'

const Resume = props => {
  return (
    <>
      <a href={pdf} download="natalia.pdf">
        Download Resume
      </a>
    </>
  )
}

export default Resume
