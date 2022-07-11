import Header from 'components/Header'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
            className="shadow ps-5"
            placeholder="Search for a country"
          />

          <AiOutlineSearch className="text-dark-grey position-absolute top-50 start-30px translate-middle fs-4" />
        </Col>

        <Col xs={12}>
          <div className="dropdown">
            <button
              class="btn btn-light shadow dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter by Region
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li className="dropdown-item">Africa</li>
              <li className="dropdown-item">America</li>
              <li className="dropdown-item">Asia</li>
              <li className="dropdown-item">Europe</li>
              <li className="dropdown-item">Oceania</li>
            </ul>
          </div>
        </Col>
      </Row>

      <div className="mt-3">
        {countries.map((country) => {
          const id = uuidv4();
          let { flags, name, population, region, capital } = country;
          const { common } = name;

          return (
            <Col className="border" key={id}>
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
      </div>
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
