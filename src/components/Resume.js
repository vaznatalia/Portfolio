import React from 'react'
import pdf from '../assets/ats.pdf'

const Resume = props => {
  return (
    <div>
      <a href={pdf} download="natalia.pdf">
        Download Resume
      </a>
    </div>
  )
}

export default Resume
