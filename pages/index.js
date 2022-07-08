import Header from 'components/Header'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react'
import axios from 'axios'



export default function Home({data}) {
  const [countries, setCountries] = useState(data);
  // console.log(data);
  const [value, setValue] = useState('')
  return (
    <div>
      <Container fluid>
        <Header />
        <Row>
          <Col xs={12} md={4} className="position-relative">
          
              <Form.Control
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                aria-describedby=""
                className="shadow ps-4"
                placeholder="Search for a country"
              />

            <AiOutlineSearch className="text-dark-grey position-absolute top-50 start-20px translate-middle fs-4" />
          </Col>
        </Row>

        {countries.map((country) => {
          let { flags, name, population, region, capital } = country;
          const { common } = name;

          return (
            <Col className="border">
              <div>
                <img src={flags.png} width="100%" height="100%" />
              </div>
              <div>
                <p>{common}</p>
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
      </Container>
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
