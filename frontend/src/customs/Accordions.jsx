import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { FiChevronDown } from 'react-icons/fi'


function Accordions({ panelName, Title, children, expanded, handleChange }) {


  return (
    <Accordion expanded={expanded === panelName} onChange={handleChange(panelName)} className='bg-white p-4 m-4 rounded-2xl before:hidden'>
      <AccordionSummary
        expandIcon={<FiChevronDown />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <div className={`flex-shrink-0 w-full`}>
          <p className='text-3xl font-bold' >{Title}</p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {children}
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default Accordions
