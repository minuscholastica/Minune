'use client';

import React from 'react';

interface CalloutBoxProps {
  children: React.ReactNode;
  type?: 'note' | 'tip' | 'warning' | 'caution' | 'important';
  heading?: string;
}

const CalloutBox: React.FC<CalloutBoxProps> = ({ children, type = 'note', heading }) => {
  const styles = {
    note: 'bg-blue-100 border-blue-500 text-blue-800',
    tip: 'bg-green-100 border-green-500 text-green-800',
    warning: 'bg-yellow-100 border-yellow-500 text-yellow-800',
    caution: 'bg-orange-100 border-orange-500 text-orange-800',
    important: 'bg-red-100 border-red-500 text-red-800',
  };

  const icons = {
    note: 'ℹ️',
    tip: '💡',
    warning: '⚠️',
    caution: '🔔',
    important: '❗',
  };

  return (
    <div className={`rounded-md p-4 my-4 border-l-4 ${styles[type]}`}>
      <div className="flex items-center">
        <span className="text-2xl mr-2">{icons[type]}</span>
        {heading && <h3 className="font-bold">{heading}</h3>}
      </div>
      <div className="mt-2">{children}</div>
      <style jsx>{`
        :global(a) {
          color: currentColor;
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