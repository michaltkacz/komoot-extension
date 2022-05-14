import React from 'react';
import { render } from '@/common/render';

const Popup = () => {
  return <div>This is popup component!!!</div>;
};

render(<Popup />, document.querySelector('#popupRoot'));
