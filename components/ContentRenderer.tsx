'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const CalloutBox = dynamic(() => import('./CalloutBox'), { ssr: false });

interface ContentRendererProps {
  content: string;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  const renderContent = () => {
    // ... (previous renderContent logic remains the same)
  };

  return (
    <div className="blog-content prose dark:prose-invert max-w-none">
      {renderContent()}
    </div>
  );
};

export default ContentRenderer;