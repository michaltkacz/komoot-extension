import React from 'react';
import ReactDOM from 'react-dom';

const Popup = () => {
  return <div className='test'>This is popup component!</div>;
};

// waiting for types update
// ReactDOM.createRoot(document.getElementById('popupRoot')).render(<Popup />);
// for now:
ReactDOM.render(<Popup />, document.getElementById('popupRoot'));
