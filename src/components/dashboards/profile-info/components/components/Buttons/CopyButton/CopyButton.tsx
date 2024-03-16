import React, { useState } from 'react';
import { CheckOutlined, CopyOutlined } from '@ant-design/icons';

interface CopyToClipboardButtonProps {
  text: string | null | undefined;
}

const CopyButton: React.FC<CopyToClipboardButtonProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    try {
      if (text !== null && text !== undefined) {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
      }
    } catch (err) {
      console.error('Не удалось скопировать текст:', err);
    } finally {
      setTimeout(() => {
        setIsCopied(false);
      }, 1500); // Устанавливаем флаг "скопировано" на короткое время
    }
  };

  return <>{!isCopied ? <CopyOutlined onClick={handleCopyClick} /> : <CheckOutlined />}</>;
};

export default CopyButton;
