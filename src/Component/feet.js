import Thumb from "../assets/Thumb.svg";
import Comment from "../assets/Comment.svg";
import Share from "../assets/Share.svg";
import { useState } from 'react';



function Feet() {
  const [showGif, setShowGif] = useState(false);


  const mouseOver = () => {
    setShowGif(true);
  }

  const mouseOut = () => {
    setShowGif(false);
  }


    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <button onMouseOver={mouseOver} onMouseOut={mouseOut} className='Btns' style={{ width: 163, display: 'flex', marginBottom: 5 }}>
                  <img style={{ marginRight: -40 }} src={Thumb} alt="SVG Image" />
                  Like</button>

                {showGif && <div style={{ display: 'flex' }}>
                  <img src='https://techcrunch.com/wp-content/uploads/2016/02/facebook-reactions-animation.gif'
                    alt='emoji gif'
                    style={{ position: 'absolute', top: 700, left: 370, width: 300, borderRadius: 10 }} />
                </div>}


                <button className='Btns' style={{ width: 163, display: 'flex', marginBottom: 5 }}>
                  <img style={{ marginRight: -18 }} src={Comment} alt="SVG Image" />
                  Comment</button>


                <button className='Btns' style={{ width: 163, display: 'flex', marginBottom: 5 }}>
                  <img style={{ marginRight: -30 }} src={Share} alt="SVG Image" />
                  Share</button>


              </div>
    )
}

export default Feet;