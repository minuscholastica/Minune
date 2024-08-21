'use client';

import React from 'react';

interface CalloutBoxProps {
  children?: React.ReactNode;
  icon?: string;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

const CalloutBox: React.FC<CalloutBoxProps> = ({ children, icon, dangerouslySetInnerHTML }) => {
  return (
    <div className="bg-[#e8f0fe] rounded-lg p-4 my-4 flex">
      {icon && (
        <div className="mr-4">
          <span className="text-2xl">{icon}</span>
        </div>
      )}
      <div className="flex-grow" {...(dangerouslySetInnerHTML ? { dangerouslySetInnerHTML } : {})}>
        {!dangerouslySetInnerHTML && children}
      </div>
    </div>
  );
};

export default CalloutBox;