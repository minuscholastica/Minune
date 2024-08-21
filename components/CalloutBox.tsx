import React from 'react';

interface CalloutBoxProps {
  children: React.ReactNode;
  icon?: string;
}

const CalloutBox: React.FC<CalloutBoxProps> = ({ children, icon }) => {
  return (
    <div className="bg-[#e8f0fe] rounded-lg p-4 my-4 flex">
      {icon && (
        <div className="mr-4">
          <span className="text-2xl">{icon}</span>
        </div>
      )}
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default CalloutBox;