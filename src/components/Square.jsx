import React from 'react'

const Square = (props) => {
  return (
    <div className='flex flex-col justify-center items-start w-21'>
      <p className='text-[#b7b7b7] text-xs'>{props.text1}</p>
      <h1 className='text-3xl tracking-widest'>{props.text2}</h1>
    </div>
  )
}

export default Square
