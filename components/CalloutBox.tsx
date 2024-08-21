'use client';

import React from 'react';

interface CalloutBoxProps {
  children: React.ReactNode;
  heading?: string;
}

const CalloutBox: React.FC<CalloutBoxProps> = ({ children, heading }) => {
  return (
    <div className="bg-[#e6f3ff] border-l-4 border-[#2a52be] rounded-r-md p-3 my-4 text-sm">
      <div className="flex items-center mb-1">
        <span className="text-xl mr-2">💡</span>
        {heading && <h4 className="font-semibold text-[#2a52be]">{heading}</h4>}
      </div>
      <div className="text-black ml-7">{children}</div>
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