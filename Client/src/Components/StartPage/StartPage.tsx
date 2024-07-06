import { useState } from 'react'
import styles from './StartPage.module.css'

import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { Image, Box, Flex } from '@chakra-ui/react'

import OrangeCatIcon from '../Images/orangeCatIcon.png'


function StartPage() {
  const [titleClicked, setTitleClicked] = useState(false)

  const titleClickedFunc = () => {
    setTitleClicked(true)  
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

      <motion.div animate={{y: [-900, -100, 0]}}>
          <Flex justify={'center'} align={'center'}>
            <Box border={'2px solid white'} px={'1rem'}>{!titleClicked ? 'Don\'t press the title' : 'Now you\'ve done it'}</Box>
            <Image objectFit={'contain'} boxSize='128px' src={OrangeCatIcon} alt={'Orange Cat Icon'} mt={'4rem'}/>
          </Flex>
      </motion.div>
    </div>
  )
}

export default StartPage