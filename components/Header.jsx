import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import {BsMoon} from 'react-icons/bs';
//import Stack from 'react-bootstrap/Stack'

export default function Header() {

  return (
      
      <Row className='px-3 h-70px align-content-center fixed-top bg-white'>
        <Col >
          <p className="text-dark-blue fw-bold fs-5">Where in the world</p>
        </Col>
        <Col xs='auto'>
         <div className="d-flex align-items-center mt-1">
          <BsMoon className="text-dark-blue fs-6 fw-normal ms-auto me-1"/>
          <p className="text-dark-blue fs-6 my-auto fw-bold">Dark Mode</p>
         </div>
        </Col>
      </Row>
    
  );
}
