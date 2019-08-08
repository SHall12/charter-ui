import React, { useEffect } from 'react';
import ChordBoxImage from '../../utils/chord'

export default function Chord(props) {
  // State: name, chordvalue, fingers, size?
  // Props: canvasheight, canvaswidth
  const canvasRef = React.useRef(null)
  const height = 250
  const width = 200

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let name = "C Major"
    let chordValue = "x32010"
    let fingers= "-32-1-"
    let size = 5
    ctx.clearRect(0, 0, height, width)
    ChordBoxImage(name, chordValue, fingers, size).Draw(ctx)
  }, [])
  
  return(
      <canvas 
        ref={canvasRef} 
        width={width} 
        height={height} 
        style={{padding: 10 + 'em'}}
        onClick={e => {
          const canvas = canvasRef.current
          const ctx = canvas.getContext('2d')
          // TODO: If click on string, move value there or remove one if already present
          //draw(ctx, { x: e.clientX, y: e.clientY })
        }}
   />
  )
}
