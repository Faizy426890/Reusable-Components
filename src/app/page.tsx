'use client'
import React from 'react'
import Button from './Components/Button' 
import Input from './Components/Input' 
// import Modal from './Components/Modal'
function page() {
  return ( 
    <div className='flex justify-center'>
    <Button 
     text='Click Me' 
     className='bg-gray-800 text-white hover:bg-gray-950 '  
     />  
     <Input /> 
     {/* <Modal isOpen={true} title='Example' onClose={()=>{}} onConfirm={()=>{}}> 
       <p> This is the Description of Modal </p> 
     </Modal>     */}
      
      </div>
  )
}

export default page
