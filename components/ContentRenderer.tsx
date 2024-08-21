'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const CalloutBox = dynamic(() => import('./CalloutBox'), { ssr: false });

interface ContentRendererProps {
  content: string;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  const renderContent = () => {
    const parts = content.split(/(<CalloutBox.*?>.*?<\/CalloutBox>)/s);
    return parts.map((part, index) => {
      if (part.startsWith('<CalloutBox')) {
        const iconMatch = part.match(/icon="([^"]*)"/) || [];
        const icon = iconMatch[1] || '💡';
        const innerContent = part.match(/<CalloutBox.*?>(.*?)<\/CalloutBox>/s);
        return (
          <CalloutBox key={index} icon={icon}>
            <div dangerouslySetInnerHTML={{ __html: innerContent ? innerContent[1] : '' }} />
          </CalloutBox>
        );
      } else {
        return <div key={index} dangerouslySetInnerHTML={{ __html: part }} />;
      }
    });
  };

  return (
    <div className="prose dark:prose-invert max-w-none">
      {renderContent()}
    </div>
  );
};

export default ContentRenderer;