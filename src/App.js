import FbImageLibrary from 'react-fb-image-grid'
import Feet from './Component/feet';
// import logo from './logo.svg';
import './App.css';
import Top from './Component/top';
import { useEffect, useState } from 'react';
import HomePage from './Views/Home page';
// import PostComponent from './Component/PostData';

function App() {

  const [postData, setPostData] = useState([]);

  useEffect(() => {
    getApiData();
  }, []);

  function getApiData() {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setPostData(res.products);
      })
  }

  if (!postData.length) {
    return <h1>Loading...</h1>
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Facebook</h1>
        {/* <PostComponent/> */}
        {/* {postData.map(function(item) {
          return <h2>{item.title}</h2>
        })} */}
        {postData.map(item => (
          <div key={item.id}>
            <div style={{ backgroundColor: 'white', width: 500, color: 'black', borderRadius: 10, marginBottom: 10 }}>
              <Top/>
              <HomePage brand={item.brand} text={item.title} type={item.description} price={item.price} rating={item.rating} />
              <center>
                <div>
                  <FbImageLibrary images={item.images} />

                </div>
              </center>

              {/* <hr></hr> */}

              <Feet/>


            </div>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;


{/* <div>
  <img src='https://techcrunch.com/wp-content/uploads/2016/02/facebook-reactions-animation.gif' alt='emoji gif'/>
</div> */}
