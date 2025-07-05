import React from "react"


type Props = {
    color:string;
    children?: React.ReactNode;
}

export default function Container({color, children}: Props) {
  return (
    <div style={{backgroundColor:  color}}>{children}</div>
  )
}