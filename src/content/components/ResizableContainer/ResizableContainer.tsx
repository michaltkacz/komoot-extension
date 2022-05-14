import React from 'react';
import { ResizableBox } from 'react-resizable';
import './ResizableContainer.css';

const ResizableContainer: React.FC = ({ children }) => {
  return (
    <ResizableBox height={100} width={100} resizeHandles={['w']}>
      <div style={{ width: '100%', height: '100%', background: 'lavender' }}>
        {children}
      </div>
    </ResizableBox>
  );
};

export default ResizableContainer;
