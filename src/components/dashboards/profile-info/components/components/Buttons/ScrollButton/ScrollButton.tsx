import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ArrowUpOutlined } from '@ant-design/icons';

const ScrollButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
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
    <ScrollButtonContainer>
      {isVisible && (
        <StyledButton onClick={scrollToTop}>
          <ArrowUpOutlined />
        </StyledButton>
      )}
    </ScrollButtonContainer>
  );
};

export default ScrollButton;

const ScrollButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
`;

const StyledButton = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 0.5px solid #000;
  background-color: #fff;
  color: #000;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;
