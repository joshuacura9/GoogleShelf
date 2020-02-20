import React from 'react';


const BookCard = (props) => {
    return (
     	<div className="card-container" style={{display:"inline-block", padding:"10px"}}>
     		<img style={{height: '175px', width: '175px'}} src={props.image} alt="image"/>
     		<div className="desc">
     			<h3 style={{fontSize: '12px'}}>{props.title}</h3>
     			<h3 style={{fontSize: '12px'}}>{props.author}</h3>
     			<h3 style={{fontSize: '12px'}}>{props.publisher}</h3>
     			<h3 style={{fontSize: '12px'}}>{props.published}</h3>
     		</div>
     	</div>
    );
}

export default BookCard;
