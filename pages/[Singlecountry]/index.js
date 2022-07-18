import axios from "axios";
import { BiArrowBack } from "react-icons/Bi";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "components/Header";
import styles from 'styles/index.module.scss'

export default function SingleCountry({data}) {

   console.log(data)
   let { flags, name, population, region, subregion, capital, tld, currencies, languages } = data[0];
   let {nativeName} = name;
   nativeName = Object.entries(nativeName);
   nativeName = nativeName[0][1].official;
   currencies = Object.entries(currencies);
   currencies = currencies[0][1].name;
   languages =  Object.values(languages)

    return (
        
      <Container fluid className="mt-6">
        <Header />

        <div
          className={`${styles.navBack} d-flex align-items-center shadow px-2 py-2`}
        >
          <BiArrowBack className="fs-4" />
          <p className="my-auto fs-4 ms-2">Back</p>
        </div>

        <Row>
          <Col xs={12}>
            <img src={flags.png} alt="" />
          </Col>

          <Col>
            {/* row inside column */}
            <Row>
              {/* first column inside of the row */}
              <Col  xs={12}>
                <p>
                  {name.common}
                </p>
                <p>
                    Native Name: <span>{nativeName}</span>
                </p>
                <p>Population: <span>{population}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Sub Region: <span>{subregion}</span></p>
                <p>Capital: <span>{capital ? capital[0] : 'No Capital'}</span></p>
              </Col>

              <Col>
              <p>Top Level Domain: <span>{tld[0]}</span></p>
              <p>Currencies: {currencies}</p>
              <p>Languages: {
                languages.map(language => language)
                 }</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
}

export async function getStaticPaths () {
   const { data } = await axios.get(`https://restcountries.com/v3.1/all`);
//    const countries = data.map(country => country.name.common)  
   return {
    fallback: false,
    paths: data.map( country => ({ params: { Singlecountry: country.name.common.toString()}}) )
    } 
} 

export async function getStaticProps(context) {

    const country = context.params.Singlecountry;
    const {data} = await axios.get(
      `https://restcountries.com/v3.1/name/${country}?fullText=true`
    );
console.log(data)

 return {
    props: {
        data
    }
 };

}