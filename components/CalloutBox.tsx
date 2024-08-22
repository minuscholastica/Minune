import React from 'react';

interface CalloutBoxProps {
  children: React.ReactNode;
  heading?: string;
  icon?: string;
}

const CalloutBox: React.FC<CalloutBoxProps> = ({ children, heading, icon = '💡' }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 my-4 bg-gray-50">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-2">{icon}</span>
        {heading && <h4 className="text-xl font-bold m-0">{heading}</h4>}
      </div>
      <div className="mt-2 text-gray-800">{children}</div>
    </div>
  );
};

export default CalloutBox;