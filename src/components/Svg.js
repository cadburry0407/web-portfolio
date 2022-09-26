import React from 'react';

import sprite from '../images/icons/icomoon/symbol-defs.svg';

const Svg = (props) => {
  const { spriteName, className } = props;

  return (
    <>
      <svg className={className}>
        <use xlinkHref={`${sprite}#${spriteName}`}></use>
      </svg>
    </>
  );
};

export default Svg;
