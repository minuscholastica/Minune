'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const CalloutBox = dynamic(() => import('./CalloutBox'), { ssr: false });

interface ContentRendererProps {
  content: string;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  const renderContent = () => {
    const parts: JSX.Element[] = [];
    let lastIndex = 0;
    const regex = /<CalloutBox.*?>([\s\S]*?)<\/CalloutBox>/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
      // Add the text before the match
      if (match.index > lastIndex) {
        parts.push(
          <div key={lastIndex} dangerouslySetInnerHTML={{ __html: content.slice(lastIndex, match.index) }} />
        );
      }

      // Process the CalloutBox
      const calloutContent = match[1];
      const iconMatch = match[0].match(/icon="([^"]*)"/);
      const icon = iconMatch ? iconMatch[1] : '💡';

      parts.push(
        <CalloutBox key={match.index} icon={icon}>
          <div dangerouslySetInnerHTML={{ __html: calloutContent }} />
        </CalloutBox>
      );

      lastIndex = regex.lastIndex;
    }

    // Add any remaining content after the last match
    if (lastIndex < content.length) {
      parts.push(
        <div key={lastIndex} dangerouslySetInnerHTML={{ __html: content.slice(lastIndex) }} />
      );
    }

    return parts;
  };

  return (
    <div className="prose dark:prose-invert max-w-none">
      {renderContent()}
    </div>
  );
};

export default ContentRenderer;