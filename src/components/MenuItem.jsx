import React from 'react'

const MenuItem = (props) => {
  if(props.text === "GET IN TOUCH"){
    return (
      <>
        <span className='text-black bg-[#EC6E5C] text-xs px-3 py-2 rounded-xs font-bold transform scale-x-[0.8] active:scale-[0.9] transition-transform duration-300 ease-out cursor-pointer
        lg:text-sm 
        '>{props.text}</span>
      </>
    )
  }
  else{
    return (
      <>
        <span className='text-white bg-[#1D1D1D] text-xs px-2 py-1 rounded-xs font-normal transform scale-x-[0.85] active:scale-[0.9] transition-transform duration-300 ease-out cursor-pointer
        lg:text-sm
        '>{props.text}</span>
      </>
    )
  }
}

export default MenuItem
