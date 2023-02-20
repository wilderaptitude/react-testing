import React from 'react'

type GreetProps = {
    name?: string;
}

export const Greet = (props: GreetProps) => {
  return (
    <div>hello {props.name}</div>
  )
}
