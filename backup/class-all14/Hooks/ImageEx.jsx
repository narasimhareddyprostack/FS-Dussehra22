import React, { useRef } from 'react'
import imageone from '../assets/loc.jpeg'
const ImageEx = () => {
    let imageEl = useRef(null);
    return (
        <div>
            <img src={imageone} alt="Ref Ex" width="50%" ref={imageEl} />
            <button onClick={() => {
                console.log(imageEl.current)
            }}>Click</button>
        </div>
    )
}

export default ImageEx
