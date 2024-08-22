'use client';

import React from 'react';

interface CalloutBoxProps {
  children: React.ReactNode;
  heading?: string;
}

const CalloutBox: React.FC<CalloutBoxProps> = ({ children, heading }) => {
  return (
    <div className="callout-box bg-blue-50 dark:bg-blue-100 p-4 rounded-lg my-4">
      <div className="callout-box-header flex items-center mb-2">
        <span className="callout-box-icon text-2xl mr-2">💡</span>
        {heading && <h4 className="callout-box-heading text-lg font-semibold">{heading}</h4>}
      </div>
      <div className="callout-box-content text-gray-800 dark:text-gray-900">{children}</div>
    </div>
  );
};

export default CalloutBox;