import Header from 'components/Header'
import Filter from 'components/Filter'
import Countries from 'components/Countries'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {AiOutlineSearch} from 'react-icons/ai'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from 'styles/index.module.scss'

export default function Home({data}) {

  const [countries, setCountries] = useState(data);
  const [value, setValue] = useState('');
  
  let regions = new Set(data.map(country => country.region))
  regions = [ ...regions].sort();
  regions = ['All', ...regions]
  
  useEffect(() => {
    
    
  }, [value])

  return (
    <Container fluid className="mt-6">
      <Header />
      <Row className=''>
        <Col xs={12} md={4} className="position-relative mb-3">
          <Form.Control
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-describedby=""
            className={`${styles.inputField} ps-5 shadow-sm`}
            placeholder="Search for a country"
          />

          <AiOutlineSearch className="text-dark-grey position-absolute top-50 start-30px translate-middle fs-4" />
        </Col>

        <Col xs={12} md={{span:4, offset:4}} className='d-flex justify-content-md-end'>
         <Filter regions={regions} controlCountries={{data, setCountries}}/>
        </Col>
      </Row>
      <Countries countries={countries}/>
    </Container>
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
