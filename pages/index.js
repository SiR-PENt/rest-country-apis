import Header from 'components/Header'
import Filter from 'components/Filter'
import Countries from 'components/Countries'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react'
import axios from 'axios'


export default function Home({data}) {

  const [countries, setCountries] = useState(data);
  
  let regions = new Set(data.map(country => country.region))
  regions = [...regions].sort();
  const [value, setValue] = useState('');

  return (
    <Container fluid className="mt-6 bg-body-light">
      <Header />
      <Row>
        <Col xs={12} md={4} className="position-relative mb-3">
          <Form.Control
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-describedby=""
            className="shadow-none ps-5"
            placeholder="Search for a country"
          />

          <AiOutlineSearch className="text-dark-grey position-absolute top-50 start-30px translate-middle fs-4" />
        </Col>

        <Col xs={12}>
         <Filter regions={regions}/>
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
