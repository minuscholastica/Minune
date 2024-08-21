// components/Callout.tsx

import React from 'react';

type CalloutProps = {
  type: 'note' | 'tip' | 'warning';
  children: React.ReactNode;
};

const Callout: React.FC<CalloutProps> = ({ type, children }) => {
  const styles = {
    note: 'bg-blue-100 border-blue-500',
    tip: 'bg-green-100 border-green-500',
    warning: 'bg-yellow-100 border-yellow-500',
  };

  return (
    <div className={`p-4 my-4 border-l-4 ${styles[type]}`}>
      {children}
    </div>
  );
};

export default Callout;