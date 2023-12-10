"use client";
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styled from '@emotion/styled';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="contained"
      style={{
        display: isVisible ? 'block' : 'none',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#ee6161',
        color: '#fff',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        
        minWidth: 0,
        minHeight: 0,
        padding: 0, 
        lineHeight: 0, 
        
       
      }}
      onClick={scrollToTop}
      endIcon={<KeyboardArrowUpIcon style={{ 
        marginRight :'10px',
      }}/>}
    >
      
    </Button>
  );
};

const KeyboardArrowUp = styled("endIcon")`
margin-right: 10px ;
color: black;
`

export default BackToTopButton;
