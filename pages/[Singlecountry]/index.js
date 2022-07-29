import axios from "axios";
import { BiArrowBack } from "react-icons/Bi";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "components/Header";
import styles from 'styles/index.module.scss'
import styleTwo from 'styles/singlecountry.module.scss'
import Link from "next/link";
import { useRouter } from "next/router";


export default function SingleCountry({data}) {

   const router = useRouter();

   let { flags, borders, name, population, region, subregion, capital, tld, currencies, languages } = data[0];
   let {nativeName} = name;
   nativeName = Object.entries(nativeName);
   nativeName = nativeName[0][1].official;
   currencies = Object.entries(currencies);
   currencies = currencies[0][1].name;
   languages =  Object.values(languages)

    return (

      <Container fluid className="mt-6 px-5 pb-3">
        <Header />

        <div
          className={`${styles.navBack} ${styles.cursorPointer} rounded d-flex align-items-center shadow-sm px-2 py-2`}
        >
          <BiArrowBack className="fs-4" />
          <Link href="/" scroll={false} passHref>
            <p className="my-auto fs-4 ms-2">Back</p>
          </Link>
        </div>

        <Row className="bg-white mt-5 py-2 rounded shadow-sm">
          <Col xs={12} md={6} className="">
            <div className={`${styleTwo.imgContainer}`}>
            <img
              src={flags.png}
              className={`${styles.img} rounded`}
              width="100%"
              height="100%"
              alt=""
              />
            </div>
          </Col>

          <Col className={`${styleTwo.col2} pt-5`}>
            {/* row inside column */}
            <Row>
              {/* first column inside of the row */}
              <p className={`${styleTwo.customFs} text-dark-blue fw-bold`}>{name.common}</p>

              <Col xs={12} md={6} className={`${styleTwo.descCol1}`}>
                <p className="text-dark-blue fs-7 fw-bold">
                  Native Name:{" "}
                  <span className="fs-6 text-light-blue">{nativeName}</span>
                </p>

                <p className="text-dark-blue fs-7 fw-bold">
                  Population:{" "}
                  <span className="fs-6 text-light-blue ">{population}</span>
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

              <Col md={6} className={`${styleTwo.descCol2} pt-5`}>
                <p className="text-dark-blue fs-7 fw-bold">
                  Top Level Domain:{" "}
                  <span className="fs-6 text-light-blue">{tld[0]}</span>
                </p>
                <p className="text-dark-blue fs-7 fw-bold">
                  Currencies:{" "}
                  <span className="fs-6 text-light-blue">{currencies}</span>
                </p>
                <p className="text-dark-blue fs-7 fw-bold">
                  Languages:{" "}         
                   <span className="fs-6 text-light-blue">
                    {/* if length of language is less than one return just the language, 
                    else return all languages separated with commas */}
                    {
                    languages.length > 0 
                    ? languages.join(', ') 
                    : languages.join('')
                    }
                  </span>
                
                </p>
              </Col>

              <div className="pt-4">
                <p className={`${borders && 'd-flex flex-wrap align-items-center'} text-dark-blue fs-7 fw-bold`}>
                  Border Countries:
                  {borders ? (
                    borders.map((border) => (
                      <span
                        onClick={() => router.push(`/${border}`)}
                        className={`${styles.cursorPointer} inline-block rounded fs-6 text-light-blue border px-2 py-1 shadow-sm ms-1 my-1`}
                      >
                        {border}
                      </span>
                    ))
                  ) : (
                    <span className="fs-6 text-light-blue ms-1 fw-bold">
                      None
                    </span>
                  )}
                </p>
              </div>
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
    paths: data.map( country => ({ params: { Singlecountry: country.cca3.toString()}}) )
    } 
} 

export async function getStaticProps(context) {

    const country = context.params.Singlecountry;
    const {data} = await axios.get(
      `https://restcountries.com/v3.1/alpha/${country}`
    );
console.log(data)

 return {
    props: {
        data
    }
 };

}