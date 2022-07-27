import axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "components/Header";
import styles from 'styles/index.module.scss'
import styleTwo from 'styles/singlecountry.module.scss'
import Link from "next/link";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

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

        <Link href="/" scroll={false} passHref>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className={`${styles.navBack} ${styles.cursorPointer} rounded d-flex align-items-center shadow-sm px-2 py-2`}
          >
            <BiArrowBack className="fs-4" />
            <p className="my-auto fs-4 ms-2">Back</p>
          </motion.div>
        </Link>

        <Row className="bg-white mt-5 py-2 rounded shadow-sm">
          <Col xs={12} md={6} className="">
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
                className={`${styleTwo.customFs} text-dark-blue fw-bold`}
              >
                {name.common}
              </motion.p>

              <Col xs={12} md={6} className={`${styleTwo.descCol1}`}>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                  className="text-dark-blue fs-7 fw-bold"
                >
                  Native Name:{" "}
                  <span className="fs-6 text-light-blue">{nativeName}</span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.3 }}
                  className="text-dark-blue fs-7 fw-bold"
                >
                  Population:{" "}
                  <span className="fs-6 text-light-blue ">{population}</span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.6 }}
                  className="text-dark-blue fs-7 fw-bold"
                >
                  Region: <span className="fs-6 text-light-blue">{region}</span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.9 }}
                  className="text-dark-blue fs-7 fw-bold"
                >
                  Sub Region:{" "}
                  <span className="fs-6 text-light-blue">{subregion}</span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3.2 }}
                  className="text-dark-blue fs-7 fw-bold"
                >
                  Capital:{" "}
                  <span className="fs-6 text-light-blue">
                    {capital ? capital[0] : "No Capital"}
                  </span>
                </motion.p>
              </Col>

              <Col md={6} className={`${styleTwo.descCol2} pt-5`}>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3.5 }}
                  className="text-dark-blue fs-7 fw-bold"
                >
                  Top Level Domain:{" "}
                  <span className="fs-6 text-light-blue">{tld[0]}</span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3.8 }}
                  className="text-dark-blue fs-7 fw-bold"
                >
                  Currencies:{" "}
                  <span className="fs-6 text-light-blue">{currencies}</span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 4.1 }}
                  className="text-dark-blue fs-7 fw-bold"
                >
                  Languages:{" "}
                  <span className="fs-6 text-light-blue">
                    {/* if length of language is less than one return just the language, 
                    else return all languages separated with commas */}
                    {languages.length > 0
                      ? languages.join(", ")
                      : languages.join("")}
                  </span>
                </motion.p>
              </Col>

              <div className="pt-4">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 4.4 }}
                  className={`${
                    borders && "d-flex flex-wrap align-items-center"
                  } text-dark-blue fs-7 fw-bold`}
                >
                  Border Countries:
                  { borders ? 
                      
                      ( borders.map((border, index) => {
                      const id = uuidv4();
                       let delayValue = 4.4; // last delay value wad 4.4
                       index = index + 1; // we don't want to have index starting from 0 
                       delayValue = delayValue + (0.3 * index); //since we are increasing by 0.3

                       return (
                         <motion.span
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ duration: 0.5, delay: `${delayValue}` }}
                           key={id}
                           onClick={() => router.push(`/${border}`)}
                           className={`${styles.cursorPointer} inline-block rounded fs-6 text-light-blue border px-2 py-1 shadow-sm ms-1 my-1`}
                         >
                           {border}
                         </motion.span>
                       );
                    })
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 4.7 }}
                      className="fs-6 text-light-blue ms-1 fw-bold"
                    >
                      None
                    </motion.span>
                  )}
                </motion.p>
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