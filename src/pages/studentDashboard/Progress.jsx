import { useState } from 'react'

function Progress({done}) {
    const [style, setStyle] = useState({});
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`,
            background: "#004147", 
        }
        setStyle(newStyle);
    }, 1000 )
  return ( 
    <div className="range">
        <h3 className="progress-num">{done}%</h3>
        <div className="progress">
            <div className="progress-done" style={style}></div>
        </div>
    </div>
  )
}

export default Progress