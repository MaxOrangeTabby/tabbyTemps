import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './StartPage.module.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
function StartPage() {
    const [titleClicked, setTitleClicked] = useState(false);
    const titleClickedFunc = () => {
        setTitleClicked(true);
    };
    return (_jsxs("div", { className: styles.Bg, children: [_jsx(motion.div, { className: styles.Title, onClick: titleClickedFunc, animate: titleClicked ? { y: [0, 60, 75, 90, 115], rotate: [0, 80, 75, 80] } : {}, transition: {
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
                }, children: _jsx("text", { children: 'Tabby\nTemps' }) }), _jsx(Link, { to: '/weather-page', children: _jsx(motion.button, { className: styles.StartBtn, animate: titleClicked ? { y: [0, 175], rotate: [0, -15] } : {}, transition: {
                        y: {
                            duration: 1.9,
                            times: [0, .5],
                        },
                    }, children: "View Weather" }) })] }));
}
export default StartPage;
