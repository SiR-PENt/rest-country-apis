import Dropdown from "react-bootstrap/Dropdown";
import {v4 as uuidv4} from 'uuid';
import styles from 'styles/index.module.scss'

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
    <Dropdown>
      <Dropdown.Toggle className={`${styles.filter}`} variant="" id="dropdown-basic">
        Filter by Region
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {regions.map((region) => {
          const id = uuidv4();
          return (
            <Dropdown.Item onClick={() => filteredCountry(region)} key={id}>
              {region}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
