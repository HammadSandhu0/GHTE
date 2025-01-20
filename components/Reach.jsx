import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Reach = () => {
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <div className="bg-primary py-6 px-5 rounded-xl">
      <ul className="flex flex-col gap-y-4 text-start text-[14px] md:text-[16px] lg:text-[18px] text-light">
        <li className="flex items-start">
          <p className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1280 1186"
              className="w-6 h-6 md:w-7 md:h-7"
              fill="#ffb703"
            >
              <g transform="translate(0,1186) scale(0.1,-0.1)" stroke="none">
                <path
                  d="M12530 11806 c-30 -18 -145 -86 -255 -151 -1135 -671 -2368 -1603 
                    -3585 -2709 -647 -589 -1403 -1342 -2030 -2021 -1085 -1176 -2180 -2523 -3113 
                    -3829 l-48 -67 -32 19 c-18 11 -758 430 -1646 932 -1309 739 -1616 909 -1626 
                    898 -62 -68 -156 -191 -153 -200 2 -6 908 -1061 2014 -2344 l2009 -2333 75 0 
                    76 -1 153 308 c1743 3506 3579 6261 5840 8767 660 731 1624 1701 2381 2394 85 
                    78 154 148 154 156 -2 15 -145 214 -154 214 -3 0 -30 -14 -60 -33z"
                />
              </g>
            </svg>
          </p>
          <motion.p
            variants={itemVariants}
            className="text-white text-base md:text-lg font-semibold"
            data-translate-key="aboutvalue1"
          >
            Respect: Hold various opinions and digital plans
          </motion.p>
        </li>

        <li className="flex items-start">
          <p className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1280 1186"
              className="w-6 h-6 md:w-7 md:h-7"
              fill="#ffb703"
            >
              <g transform="translate(0,1186) scale(0.1,-0.1)" stroke="none">
                <path
                  d="M12530 11806 c-30 -18 -145 -86 -255 -151 -1135 -671 -2368 -1603 
                    -3585 -2709 -647 -589 -1403 -1342 -2030 -2021 -1085 -1176 -2180 -2523 -3113 
                    -3829 l-48 -67 -32 19 c-18 11 -758 430 -1646 932 -1309 739 -1616 909 -1626 
                    898 -62 -68 -156 -191 -153 -200 2 -6 908 -1061 2014 -2344 l2009 -2333 75 0 
                    76 -1 153 308 c1743 3506 3579 6261 5840 8767 660 731 1624 1701 2381 2394 85 
                    78 154 148 154 156 -2 15 -145 214 -154 214 -3 0 -30 -14 -60 -33z"
                />
              </g>
            </svg>
          </p>
          <motion.p
            variants={itemVariants}
            className="text-white text-base md:text-lg font-semibold"
            data-translate-key="aboutvalue2"
          >
            Ownership: Operating success with responsibility and getting perfect
            output.
          </motion.p>
        </li>

        <li className="flex items-start">
          <p className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1280 1186"
              className="w-6 h-6 md:w-7 md:h-7"
              fill="#ffb703"
            >
              <g transform="translate(0,1186) scale(0.1,-0.1)" stroke="none">
                <path
                  d="M12530 11806 c-30 -18 -145 -86 -255 -151 -1135 -671 -2368 -1603 
                    -3585 -2709 -647 -589 -1403 -1342 -2030 -2021 -1085 -1176 -2180 -2523 -3113 
                    -3829 l-48 -67 -32 19 c-18 11 -758 430 -1646 932 -1309 739 -1616 909 -1626 
                    898 -62 -68 -156 -191 -153 -200 2 -6 908 -1061 2014 -2344 l2009 -2333 75 0 
                    76 -1 153 308 c1743 3506 3579 6261 5840 8767 660 731 1624 1701 2381 2394 85 
                    78 154 148 154 156 -2 15 -145 214 -154 214 -3 0 -30 -14 -60 -33z"
                />
              </g>
            </svg>
          </p>
          <motion.p
            variants={itemVariants}
            className="text-white text-base md:text-lg font-semibold"
            data-translate-key="aboutvalue3"
          >
            Fairness: Confirm honesty and believe in each interactivity.
          </motion.p>
        </li>

        <li className="flex items-start lg:hidden xl:flex">
          <p className="mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1280 1186"
              className="w-6 h-6 md:w-7 md:h-7"
              fill="#ffb703"
            >
              <g transform="translate(0,1186) scale(0.1,-0.1)" stroke="none">
                <path
                  d="M12530 11806 c-30 -18 -145 -86 -255 -151 -1135 -671 -2368 -1603 
                    -3585 -2709 -647 -589 -1403 -1342 -2030 -2021 -1085 -1176 -2180 -2523 -3113 
                    -3829 l-48 -67 -32 19 c-18 11 -758 430 -1646 932 -1309 739 -1616 909 -1626 
                    898 -62 -68 -156 -191 -153 -200 2 -6 908 -1061 2014 -2344 l2009 -2333 75 0 
                    76 -1 153 308 c1743 3506 3579 6261 5840 8767 660 731 1624 1701 2381 2394 85 
                    78 154 148 154 156 -2 15 -145 214 -154 214 -3 0 -30 -14 -60 -33z"
                />
              </g>
            </svg>
          </p>
          <motion.p
            variants={itemVariants}
            className="text-white text-base md:text-lg font-semibold"
            data-translate-key="aboutvalue4"
          >
            Quality: Construct an inheritance of excellence with steady
            commitment.
          </motion.p>
        </li>
      </ul>
    </div>
  );
};

export default Reach;
