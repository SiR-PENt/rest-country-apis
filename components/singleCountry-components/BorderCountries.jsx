import { motion } from 'framer-motion';
import { v4 as uuidv4 } from "uuid";
import styles from "styles/index.module.scss";
import { useRouter } from "next/router";

export default function BorderCountries({borderCountries}) {
    const router = useRouter();
    const { borders } = borderCountries;

    return (


      <div className="pt-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 4.4 }}
          className={`${
            borders && "d-flex flex-wrap align-items-center"
          } country-key fs-7 fw-bold`}
        >
          Border Countries:
          {borders ? (
            borders.map((border, index) => {
              const id = uuidv4();
              let delayValue = 4.4; // last delay value was 4.4
              index = index + 1; // we don't want to have index starting from 0
              delayValue = delayValue + 0.3 * index; //since we are increasing by 0.3

              return (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileTap={{ scale: 1.3 }}
                  transition={{ duration: 0.5, delay: `${delayValue}` }}
                  key={id}
                  onClick={() => router.push(`/${border}`)}
                  className={`${styles.cursorPointer} inline-block rounded fs-6 country-value border px-2 py-1 shadow-sm ms-1 my-1`}
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
    );
}