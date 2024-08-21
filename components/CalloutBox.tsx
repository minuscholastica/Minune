'use client';

import React from 'react';

interface CalloutBoxProps {
  children: React.ReactNode;
  icon?: string;
}

const CalloutBox: React.FC<CalloutBoxProps> = ({ children, icon }) => {
  return (
    <div className="bg-[#d0e3ff] rounded-lg p-4 my-4 flex items-start shadow-sm">
      {icon && (
        <div className="mr-4 text-[#4a5568]">
          <span className="text-2xl">{icon}</span>
        </div>
      )}
      <div className="flex-grow text-[#2d3748]">{children}</div>
    </div>
  );
};

export default CalloutBox;