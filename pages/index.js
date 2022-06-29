import Header from 'components/Header'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {AiFillTags, AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react'
import axios from 'axios'
// import Image from 'next/image'


export default function Home({data}) {
  const [countries, setCountries] = useState(data);
  console.log(data);
  const [value, setValue] = useState('hi')
  return (
    <div>
      <Container fluid>
        <Header />
        <Row>
          <Col xs={12} md={4}>
        <Form.Control
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-describedby=""
          className='shadow'
          placeholder='Search for a country'
        />
          </Col>
        </Row>
      </Container>
  
     <div>
       {
         countries.map(country => {
           const {flags, population, region, subregion, capital} = country;
           return (
             <div>
              <Row>
               <Col xs={12} md={3}>
                 <img src={flags.png}/>
               </Col>  
                </Row> 
             </div>
           )
           
         })
       }
     </div>
  
    </div>
  );
}

export async function getStaticProps () {
    const {data} =  await axios.get(`https://restcountries.com/v3.1/all`);
    return {
      props: {
        data
      }
  }
}
