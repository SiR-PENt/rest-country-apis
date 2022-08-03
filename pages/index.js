import Header from 'components/Header'
import Filter from 'components/Filter'
import Countries from 'components/Countries'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {AiOutlineSearch} from 'react-icons/ai'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styles from 'styles/index.module.scss'
import ScrollToTop from 'react-scroll-to-top'
import { AiOutlineToTop } from 'react-icons/ai'
import { motion } from 'framer-motion'


export default function Home({data}) {
 // check if component is mounted to avoid calling function inside useEffect when page mounts
  const isMounted = useRef(false);

  const [countries, setCountries] = useState(data);
  const [value, setValue] = useState('');
  let regions = new Set(data.map(country => country.region))
  regions = [ ...regions].sort();
  regions = ['All', ...regions]
  
  useEffect(() => {
 // when page mounts isMounted is false, hence function will not be called

  if(isMounted) {
    if(value) {
      const searchCountry = () => {
         axios.get(`https://restcountries.com/v3.1/name/${value}`)
         .then(res => {
            const { data } = res;
            setCountries(data)
         })
         .catch(err => {
           //**TODO: will customize error msg on condition of if country exists
           console.log(err)
         });   
        }
        searchCountry() 
    }
    else {
      setCountries(data)
    }
  }
  //when page mounts for the first time, set isMounted to true. Hence, we avoid calling the function above
  else {
    isMounted.current = true;
  }

  }, [value])

  return (
    <Container fluid className="mt-6 pb-3">
      <ScrollToTop
        smooth
        style={{ padding: "4px" }}
        component={<AiOutlineToTop className="text-dark-blue fs-2" />}
      />
      <Header />
      <Row className="">
        <Col xs={12} md={4} className="position-relative mb-3">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Form.Control
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              aria-describedby=""
              className={`${styles.inputField} input ps-5 shadow-sm`}
              placeholder="Search for a country"
            />

            <AiOutlineSearch className="search-icon position-absolute top-50 start-30px translate-middle fs-4" />
          </motion.div>
        </Col>

        <Col
          xs={12}
          md={{ span: 4, offset: 4 }}
          className="d-flex justify-content-md-end"
        >
          <Filter regions={regions} controlCountries={{ data, setCountries }} />
        </Col>
      </Row>
      <Countries countries={countries} />
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
