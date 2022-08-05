import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "components/Common/Header";
import styles from 'styles/index.module.scss'
import styleTwo from 'styles/singlecountry.module.scss'
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import DetailsOne from "components/singleCountry-components/DetailsOne";
import DetailsTwo from "components/singleCountry-components/DetailsTwo";
import BorderCountries from "components/singleCountry-components/BorderCountries";
import PageTitle from "components/common/PageTitle";


export default function SingleCountry({data}) {

   const router = useRouter();
   
   let { flags, borders, name, population, region, subregion, capital, tld, currencies, languages } = data[0];
   let {nativeName} = name;

   if(nativeName) {
     nativeName = Object.entries(nativeName);
     nativeName = nativeName[0][1].official;
   }

   if (currencies) {
     currencies = Object.entries(currencies);
     currencies = currencies[0][1].name;
   }
   if(languages) languages =  Object.values(languages)

    return (
      <Container fluid className="mt-6 px-5 pb-3">
        <PageTitle title={`${nativeName}`}/>
        <Header />

        <Link href="/" scroll={false} passHref>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className={`${styles.navBack} ${styles.cursorPointer} nav-back rounded d-flex align-items-center shadow-sm px-2 py-2`}
          >
            <BiArrowBack className="fs-4" />
            <p className="my-auto fs-4 ms-2">Back</p>
          </motion.div>
        </Link>

        <Row className="mt-5 py-2 rounded shadow-sm">
          <Col xs={12} md={6} className="img-container rounded py-2">
            <motion.div
              initial={{ opacity: 0, y:-50 }}
              animate={{ opacity: 1, y:0 }}
              transition={{ ease:"easeOut", duration: 0.8, delay: 1.4 }}
              className={`${styleTwo.imgContainer}`}
            >
              <img
                src={flags.png}
                className={`${styles.img} rounded`}
                width="100%"
                height="100%"
                alt=""
              />
            </motion.div>
          </Col>

          <Col className={`${styleTwo.col2} pt-5`}>
            {/* row inside column */}
            <Row>
              {/* first column inside of the row */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.7 }}
                className={`${styleTwo.customFs} country-key fw-bold`}
              >
                {name.common}
              </motion.p>

          
             <DetailsOne
               detailsOne={{
                   nativeName, population, region, subregion,  capital
               }} />

             <DetailsTwo 
              detailsTwo={{
                 tld, currencies, languages
              }} />

             <BorderCountries borderCountries={{borders}}/>
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
    
 return {
    props: {
        data
    }
 };

}