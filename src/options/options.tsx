import React from 'react';
import ReactDOM from 'react-dom';

export var Options = () => {
  return <div>This is options component!</div>;
};

// waiting for types update
// ReactDOM.createRoot(document.getElementById('popupRoot')).render(<Popup />);
// for now:
ReactDOM.render(<Options />, document.getElementById('optionsRoot'));
