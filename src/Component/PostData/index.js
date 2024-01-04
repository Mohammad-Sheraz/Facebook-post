function PostComponent(props) {
    return (<div style={{marginTop: 15, paddingTop: 15, marginLeft: 8}}>
        <h3 style={{fontWeight: "bolder"}}>Brand: {props.brand}</h3 >
        <h4 style={{fontWeight: "bolder"}}>Product: {props.text}</h4>
        <p>{props.type}</p>
        <h2>Price: ${props.price}</h2>
        <h6 style={{display:"flex", justifyContent: "right", marginRight: 10, fontWeight: "bolder"}}>Rating: {props.rating}</h6>
        {/* <a>{props.name}</a> */}
    </div> );
}

export default PostComponent;