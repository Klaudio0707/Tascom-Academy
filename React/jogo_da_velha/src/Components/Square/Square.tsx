import React from "react"

type ButtonProps = React.ComponentProps<'button'> & {
    value: string;
}

const Square = ({value, ...props}: ButtonProps) =>{
    const handleCLick=() => {
       alert("Clicked"!)
    }

  return (
    <>
    <button className="square" onClick={handleCLick} >{value}</button>
    </>
  )
}

export default Square
