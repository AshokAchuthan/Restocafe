import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row } from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import Rcard from '../Rcard'
import { base_url } from '../base_url'


function Allrestaurant() {
  //state for holding all restaurant array
  const[allItems,setAllItems]=useState([])

    
    //code  for api call

    const fetchData=async()=>{
        const response = await axios.get(`${base_url}/restaurants`)
        // console.log(response.data);
        setAllItems(response.data)
    }
    console.log(allItems);//array(10)
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <Row>
      {
        allItems.map(items=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            
            {/* {destructuring} */}
              
            <Rcard restaurants={items} />
              
          </Col>
        ))
      }
    </Row>
  )
}

export default Allrestaurant