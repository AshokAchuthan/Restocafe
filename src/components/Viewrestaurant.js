import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from './base_url';
import axios from 'axios';
import { Col, Row, Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import RestOp from './RestOp';
import Restreview from './Restreview';





function Viewrestaurant() {

  const[RestDetails,setRestDetails] = useState({})

  //destructuring - use id instead of pathParams
  // const pathParams = useparams()
  // console.log(pathParams); //{id:3}
  const {id} = useParams()
  console.log(id);
 //api call for fetch particular restaurat details

 const fetchData=async()=>{
  const {data} = await axios.get(`${base_url}/restaurants/${id}`);
  console.log(data);
  setRestDetails(data);
 }
 console.log(RestDetails);
 useEffect(()=>{
  fetchData()
 },[])




  return (
    <div>
      {
        RestDetails?
      <Row>
        <Col sm={12} md={3}>
          <Image className='border rounded p-2 m-2' src={`${RestDetails?.photograph}`} fluid  style={{margin:"20px"}}/>
        </Col>
        <Col md={8}>
            <h4>{RestDetails?.name}</h4>
            <h5>{RestDetails?.neighborhood}</h5>

          <ListGroup>
            <ListGroup.Item>Cuisine : {RestDetails?.cuisine_type} </ListGroup.Item>
            <ListGroup.Item> <RestOp op={RestDetails?.operating_hours} /> </ListGroup.Item>
            <ListGroup.Item><Restreview review={RestDetails?.reviews} /></ListGroup.Item>
           
          </ListGroup>
          </Col>
      </Row>:''
      }
    </div>
  )
}

export default Viewrestaurant