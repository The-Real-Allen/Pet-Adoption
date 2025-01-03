import Carousel from "./Carousel";
import { motion } from "framer-motion";

import "./Home.css";
function Home() {
  return (
    <>
      <motion.div className="home1-container">
        <div className="home1-left ms-3">
          <div className="  font-weight-bold">
            <motion.h3
              initial={{ x: "-100%" }}
              animate={{ x: "0" }}
              exit={{ x: "100%" }}
              transition={{ duration: "0.4" }}
              className="mt-4 py-2"
            >
              Embrace Endless Love<br></br>
              with Your New Furry <br></br>
              Best Friend.
            </motion.h3>
          </div>
          <div>
            <motion.p
              initial={{ x: "-100%" }}
              animate={{ x: "0" }}
              exit={{ x: "100%" }}
              transition={{ duration: "0.8" }}
              className="pt-3"
            >
              Embrace endless love with your new furry best friend. <br></br>
              Adopt now and start creating unforgettable memories together.
            </motion.p>
          </div>
        </div>
        <div className="home1-right me-0 py-3 ">
          <Carousel />
        </div>
      </motion.div>
    </>
  );
}
export default Home;
