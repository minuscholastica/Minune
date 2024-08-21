'use client';

import React from 'react';

interface CalloutBoxProps {
  children: React.ReactNode;
  heading?: string;
}

const CalloutBox: React.FC<CalloutBoxProps> = ({ children, heading }) => {
  return (
    <div className="callout-box">
      <div className="callout-box-header">
        <span className="callout-box-icon">💡</span>
        {heading && <h4 className="callout-box-heading">{heading}</h4>}
      </div>
      <div className="callout-box-content">{children}</div>
    </div>
  );
};

export default CalloutBox;