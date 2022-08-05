import Col from "react-bootstrap//Col";
import { motion } from 'framer-motion'
import style from "styles/singlecountry.module.scss";

export default function DetailsOne({detailsOne}) {

    const { nativeName, region, subregion, population, capital } = detailsOne;
    
    return (
      <Col xs={12} md={6} className={`${style.descCol1}`}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.0 }}
          className="country-key fs-7 fw-bold"
        >
          Native Name:{" "}
          <span className="fs-6 country-value">
            {nativeName ? nativeName : "No Native Name"}
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.3 }}
          className="country-key fs-7 fw-bold"
        >
          Population: <span className="fs-6 country-value">{population}</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.6 }}
          className="country-key fs-7 fw-bold"
        >
          Region: <span className="fs-6 country-value">{region}</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.9 }}
          className="country-key fs-7 fw-bold"
        >
          Sub Region:{" "}
          <span className="fs-6 country-value">
            {subregion ? subregion : "No Sub Region"}
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.2 }}
          className="country-key fs-7 fw-bold"
        >
          Capital:{" "}
          <span className="fs-6 country-value">
            {capital ? capital[0] : "No Capital"}
          </span>
        </motion.p>
      </Col>
    );

}