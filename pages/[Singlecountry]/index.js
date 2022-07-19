import axios from "axios";
import { BiArrowBack } from "react-icons/Bi";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "components/Header";
import styles from 'styles/index.module.scss'
import Link from "next/link";


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
      <Container fluid className="mt-6 px-5">
        <Header />

        <div
          className={`${styles.navBack} ${styles.cursorPointer} rounded d-flex align-items-center shadow-sm px-2 py-2`}
        >
          <BiArrowBack className="fs-4" />
          <Link href="/" passHref>
            <p className="my-auto fs-4 ms-2">Back</p>
          </Link>
        </div>

        <Row className="bg-white mt-5">
          <Col xs={12} md={6} className="">
            <img src={flags.png} className={`${styles.img}`} width="100%" height="100%" alt="" />
          </Col>

          <Col>
            {/* row inside column */}
            <Row>
              {/* first column inside of the row */}
                <p className="customFs text-dark-blue fw-bold">{name.common}</p>
              <Col xs={12} md={6} className="descCol1">
                

                <p className="text-dark-blue fs-7 fw-bold">
                  Native Name:{" "}
                  <span className="fs-6 text-light-blue">{nativeName}</span>
                </p>

                <p className="text-dark-blue fs-7 fw-bold">
                  Population:{" "}
                  <span className="fs-6 text-light-blue">{population}</span>
                </p>

                <p className="text-dark-blue fs-7 fw-bold">
                  Region: <span className="fs-6 text-light-blue">{region}</span>
                </p>
                <p className="text-dark-blue fs-7 fw-bold">
                  Sub Region:{" "}
                  <span className="fs-6 text-light-blue">{subregion}</span>
                </p>
                <p className="text-dark-blue fs-7 fw-bold">
                  Capital:{" "}
                  <span className="fs-6 text-light-blue">
                    {capital ? capital[0] : "No Capital"}
                  </span>
                </p>
              </Col>

              <Col md={6} className='descCol2'>
                <p className="text-dark-blue fs-7 fw-bold">
                  Top Level Domain:{" "}
                  <span className="fs-6 text-light-blue">{tld[0]}</span>
                </p>
                <p className="text-dark-blue fs-7 fw-bold">
                  Currencies: <span className="fs-6 text-light-blue">{currencies}</span>
                </p>
                <p className="text-dark-blue fs-7 fw-bold">
                  Languages:{" "}
                  <span className="fs-6 text-light-blue">{languages.map((language) => language)}</span>
                </p>
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