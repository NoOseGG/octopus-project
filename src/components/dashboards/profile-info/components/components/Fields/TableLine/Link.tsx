import React from 'react';

type MyComponentProps = {
  text: string;
};

const Link: React.FC<MyComponentProps> = ({ text }) => {
  return (
    <a href={`https://${text}`} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};

export default Link;
