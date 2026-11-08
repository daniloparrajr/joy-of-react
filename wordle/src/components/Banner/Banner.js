import React from 'react';
import { clsx } from 'clsx';

function Banner({ status, children }) {
  return <div className={clsx('banner', status)}>{children}</div>;
}

export default Banner;
