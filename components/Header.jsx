import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import styles from 'styles/index.module.scss'
import DarkModeToggle from "react-dark-mode-toggle";
import { defaultConfig } from "next/dist/server/config-shared";'
import React, {useState} from 'react';
import {BsMoon} from 'react-icons/bs';
//import Stack from 'react-bootstrap/Stack'

export default function Header() {
  const [isDarkMode, setDarkMode] = React.useState(true);
const switchTheme = (checked) => {
    const currentTheme = document.documentElement.dataset.theme;
    setDarkMode(checked);
    if (currentTheme === "dark") {
      document.documentElement.dataset.theme = "light";
    } else {
      document.documentElement.dataset.theme = "dark";
    }
   }
  return (
      
      <Row className={`${styles.h70px} px-3 align-content-center fixed-top bg-white shadow-sm`}>
        <Col >
          <p className="text-dark-blue fw-bold fs-5">Where in the world</p>
        </Col>
        <Col xs='auto'>
             <div>
        <DarkModeToggle
         onChange={switchTheme}
         checked={isDarkMode}
         style={{ marginRight: '2rem'}}     
        />  
    </div>
          <style jsx global>{`
        :root {
          --bg-color: white;
          --primary-color: black;
          --secondary-color: rgb(113, 128, 158);
        }

        [data-theme="dark"] {
          --font-color: white;
          --bg-color: hsl(0, 100%, 1%);
     
        }

        body {
          background: var(--bg-color);
          transition: background 0.5s;
          Homepage Items: 14px
          Detail Page: 16px 
        }

        dark: {
          circle: {
            r: 9,
          },
          mask: {
            cx: '50%',
            cy: '23%',
          },
          svg: {
            transform: 'rotate(40deg)',
          },
          lines: {
            opacity: 0,
          },
        },
        light: {
          circle: {
            r: 5,
          },
          mask: {
            cx: '100%',
            cy: '0%',
          },
          svg: {
            transform: 'rotate(90deg)',
          },
          lines: {
            opacity: 1,
          },
        },
        springConfig: { mass: 4, tension: 250, friction: 35 },
      };
        
      `}</style>
    
  
        </Col>
      </Row>
    
  );
}
