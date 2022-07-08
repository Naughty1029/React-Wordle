import React, { useEffect } from 'react'
import useWordle from "../hooks/useWordle";

export default function Wordle({solution}) {
  const {currentGuess,handleKeyup,guesses,isCorrect,turn} = useWordle(solution);

  useEffect(()=>{
    window.addEventListener('keyup',handleKeyup);

    return ()=>window.removeEventListener('keyup',handleKeyup);
  },[handleKeyup])

  useEffect(()=>{
    console.log(guesses,isCorrect,turn);
  },[guesses,isCorrect,turn])

  return (
    <div>
      <div>solution - {solution}</div>
      <div>current guess - {currentGuess}</div>
    </div>
  )
}