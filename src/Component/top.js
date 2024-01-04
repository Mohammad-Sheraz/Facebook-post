import dots from "../assets/dots.svg";
import x from "../assets/x.svg";
import image from "../assets/image.jpg";


function Top() {
    return (
        <div style={{display: 'flex', marginLeft: 10}}>
                <img style={{width: 50, height: 50, borderRadius: 50, marginTop: 10}} src={image} alt='My image'/>
                <h4 style={{marginLeft: 15, fontWeight: 'bold', marginTop: 15}}>Muhammad Sheraz</h4>
                <div style={{marginLeft: 190 }}>
                  <img style={{marginRight: 10}} src={dots}/>
                  <img style={{marginRight: 10}} src={x}/>
                </div>
              </div>
    )
}

export default Top;