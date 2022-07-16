import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";


export default function Countries({countries}) {
  const router = useRouter();

  const showDetailsHandler = (nameOfCountry) => {
      router.push('/' + nameOfCountry)
  }


  return (

    <Row className="mt-4 px-4 g-4">
      {countries.map((country) => {
        const id = uuidv4();
        let { flags, name, population, region, capital } = country;
        const { common } = name;

        return (
          
          <Col xs={12} md={3} key={id}>
            <div onClick={() => showDetailsHandler(common)} className="country-container shadow-sm">
              <div className="img-container">
                <img src={flags.png} alt="" width="100%" height="100%" />
              </div>

              <div className="px-3 mt-3">
                <p className="text-dark-blue fw-bold">{common}</p>
                <p className="text-dark-blue fs-7 fw-bold">
                  Population:{" "}
                  <span className="fs-6 text-light-blue">{population}</span>
                </p>
                <p className="text-dark-blue fs-7 fw-bold">
                  Region: <span className="fs-6 text-light-blue">{region}</span>
                </p>
                <p className="text-dark-blue fs-7 fw-bold">
                  Capital:{" "}
                  <span className="fs-6 text-light-blue">
                    {capital ? capital[0] : "No capital"}
                  </span>
                </p>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}