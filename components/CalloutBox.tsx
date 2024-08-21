'use client';

import React from 'react';

interface CalloutBoxProps {
  children: React.ReactNode;
  heading?: string;
}

const CalloutBox: React.FC<CalloutBoxProps> = ({ children, heading }) => {
  return (
    <div className="bg-[#e6f3ff] border-l-4 border-[#2a52be] rounded-r-md p-4 my-6">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-3">💡</span>
        {heading && <h3 className="font-bold text-[#2a52be] text-lg">{heading}</h3>}
      </div>
      <div className="text-[#333333] ml-9">{children}</div>
      <style jsx>{`
        :global(a) {
          color: #2a52be;
          text-decoration: underline;
        }
        :global(a:hover) {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default CalloutBox;