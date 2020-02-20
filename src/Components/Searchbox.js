import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Searchbox = (props) => {
    return (
      <div className="searchbox">
	    <Form onSubmit={props.searchBook} action="">

	  		<Form.Group controlId="formBasicEmail">
			    <Form.Label style={{color: 'white', fontSize: '40px'}}>
			    	Books
			    </Form.Label>
			    <Form.Control onChange={props.handleSearch} type="text" placeholder="Enter a book title" />
			    <Form.Text style={{color: 'white', fontSize: '35px'}}>
			      	Browse the shelves!
			    </Form.Text>
			</Form.Group>
			<Button variant="primary" type="submit">
			    	Search
			</Button>
		</Form>
	  </div>
	);
	}

export default Searchbox;
