import PostComponent from "../../Component/PostData";

function HomePage(props) {
    return (
        <div>
            {/* <h2>Home Page</h2> */}
            <PostComponent brand={props.brand} text={props.text} type={props.type} price={props.price} rating={props.rating}/>
        </div>
    )
}

export default HomePage;