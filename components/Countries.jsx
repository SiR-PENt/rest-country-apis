import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { v4 as uuidv4 } from "uuid";

export default function Countries({countries}) {

  return (
    <Row className="mt-4 px-4 g-5">
      {countries.map((country) => {
        const id = uuidv4();
        let { flags, name, population, region, capital } = country;
        const { common } = name;

        return (
          <Col xs={12} md={3} key={id}>
            <div className="country-container shadow-sm px-2">
              <div  className='img'/>
                <img src={flags.png} alt=''/>
              </div>
              <div>
                <p className="text-dark-blue fw-bold">{common}</p>
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
            </div>
          </Col>
        );
      })}
    </Row>
  );
}