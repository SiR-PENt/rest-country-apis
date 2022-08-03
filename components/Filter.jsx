import Dropdown from "react-bootstrap/Dropdown";
import {v4 as uuidv4} from 'uuid';
import styles from 'styles/index.module.scss'
import { motion } from "framer-motion";

export default function Filter({regions, controlCountries}) {

   let { data, setCountries } = controlCountries;
   const filteredCountry = (countryRegion) => {

    if(countryRegion === 'All') setCountries(data)

    else {
     let filteredCountries = data.filter(country => country.region === countryRegion);
     setCountries(filteredCountries)
    }
   }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.1 }}
    >
      <Dropdown className={`${styles.filter}`}>
        <Dropdown.Toggle
          className={`${styles.filter} shadow-sm`}
          variant=""
          id="dropdown-basic"
        >
          Filter by Region
        </Dropdown.Toggle>

        <Dropdown.Menu className={`${styles.dropdownMenu} shadow-sm`}>
          { regions.map((region, index) => {
            let delayValue = 0.1 //delay interval of 0.1
            delayValue = delayValue * (index + 1) // increase as index increase, no fuss
            const id = uuidv4();
            return (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: `${delayValue}` }}
                key={id}
              >
                <Dropdown.Item onClick={() => filteredCountry(region)}>
                  {region}
                </Dropdown.Item>
              </motion.div>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
    </motion.div>
  )
}
