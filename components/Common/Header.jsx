import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import styles from 'styles/index.module.scss'
import { BsMoon } from "react-icons/bs";
import { MdOutlineLightMode } from 'react-icons/md'
import { motion } from "framer-motion";
import { useGlobalContext } from "../AppProvider";

export default function Header() {

   const { setDarkTheme, darkTheme } = useGlobalContext();

   const handleToggle = () => {
     setDarkTheme(!darkTheme);
   }

  return (
    <Row
      className={`${styles.h70px} header px-3 align-content-center fixed-top shadow-sm`}
    >
      <Col>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay:0.5 }}
          className=" fw-bold fs-5"
        >
          Where in the world
        </motion.p>
      </Col>
      <Col xs="auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay:0.8 }}
          whileTap={{rotate: 270}}
          onClick={handleToggle}
          className={`${styles.cursorPointer} d-flex align-items-center mt-1`}
        > {
          !darkTheme ? (
             <>
               <BsMoon className="fs-6 fw-normal ms-auto me-1" />
               <p className="fs-6 my-auto fw-bold">Dark Mode</p>
             </>
          ) : (
              <>
                <MdOutlineLightMode className="fs-6 fw-normal ms-auto me-1" />
                <p className="fs-6 my-auto fw-bold">Light Mode</p> 
              </>
          )
        }

        </motion.div>
      </Col>
    </Row>
  );
}
