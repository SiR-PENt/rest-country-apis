import Header from 'components/Header'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from "uuid";


export default function Home({data}) {

  const [countries, setCountries] = useState(data);
  
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
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Filter by Region
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Africa</Dropdown.Item>
              <Dropdown.Item>America</Dropdown.Item>
              <Dropdown.Item>Asia</Dropdown.Item>
              <Dropdown.Item>Europe</Dropdown.Item>
              <Dropdown.Item>Oceania</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row className="mt-3 ">
        {countries.map((country) => {
          const id = uuidv4();
          let { flags, name, population, region, capital } = country;
          const { common } = name;

          return (
            <Col xs={12} md={3} key={id}>
              <div>
                <img src={flags.png} width="100%" height="100%" />
              </div>
              <div>
                <p className='text-dark-blue fw-bold'>{common}</p>
                <p>
                  Population: <span>{population}</span>
                </p>
                <p>
                  Region: <span>{region}</span>
                </p>
                <p>
                  Capital: <span>{capital ? capital[0] : "No capital"}</span>
                </p>
              </div>
            </Col>
          );
        })}
      </Row>
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
