import { useState } from 'react'
import styles from './StartPage.module.css'

import { animate, motion } from "framer-motion"
import { useStepContext } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


function StartPage() {
  const [titleClicked, setTitleClicked] = useState(false)
  const [btnFall, setBtnFall] = useState(false)

  const titleClickedFunc = () => {
    setTitleClicked(!titleClicked)  
  }

  return (
    <div className={styles.Bg}>
      <motion.div className={styles.Title} onClick={titleClickedFunc} 
      animate={titleClicked ?  {y: [0, 60, 75, 90, 115], rotate: [0, 80, 75, 80]} : {}}
      transition={{
        y: {
          duration: 1.25,
          times: [0, .35, .65, .95], 
          ease: 'easeInOut', 
        },
        rotate: {
          duration: 5,
          times: [0, .25, .45, .65], 
          ease: 'easeInOut', 
        },
       }}
      >
        <text>{'Tabby\nTemps'}</text>
      </motion.div>
      <Link to='/weather-page'>
        <motion.button className={styles.StartBtn} 
          animate={titleClicked ?  {y: [0, 175], rotate: [0, -15]} : {}}
          transition={{
            y: {
              duration: 1.9,
              times: [0, .5], 
            },
          }} 
        >
          View Weather
        </motion.button>
      </Link>
    </div>
  )
}

export default StartPage