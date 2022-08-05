import Col from "react-bootstrap//Col";
import { motion } from 'framer-motion';
import style from "styles/singlecountry.module.scss";


export default function DetailsTwo({detailsTwo}) {
    
    const {tld, currencies, languages } = detailsTwo;

    return (
      <Col md={6} className={`${style.descCol2} pt-5`}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.5 }}
          className="country-key fs-7 fw-bold"
        >
          Top Level Domain:{" "}
          <span className="fs-6 country-value">{tld?.[0]}</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.8 }}
          className="country-key fs-7 fw-bold"
        >
          Currencies:{" "}
          <span className="fs-6 country-value">
            {currencies ? currencies : "No Currencies"}
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 4.1 }}
          className="country-key fs-7 fw-bold"
        >
          Languages:{" "}
          <span className="fs-6 country-value">
            {/* if languages is true and languages is an array, since it isn't for every country, then check if languages array length is greater than zero, if so, loop over each language and return each, if not greater than zero, then just return the language. If language is no true, then return no languages*/}

            {languages && languages.isArray
              ? {
                  /* if length of language is less than one return just the language, 
                    else return all languages separated with commas */
                }(languages.length > 0)
                ? languages.join(", ")
                : languages.join("")
              : "No Languages"}
          </span>
        </motion.p>
      </Col>
    );
}