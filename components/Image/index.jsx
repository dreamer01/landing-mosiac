import { useEffect, useState } from 'react';

import Styles from './image.module.css';

const ProgressiveImage = ({ placeholder, src, className, ...props }) => {
  const [imgSrc, setSrc] = useState(placeholder || src);

  useEffect(() => {
    setSrc(src);
  }, [src]);

  const styleClass = imgSrc === placeholder ? 'loading' : '';

  return (
    <img
      src={imgSrc}
      className={`{${Styles[styleClass]} ${className} }`}
      {...props}
    />
  );
};

export default ProgressiveImage;
