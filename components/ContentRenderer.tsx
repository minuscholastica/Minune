'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const CalloutBox = dynamic(() => import('./CalloutBox'), { ssr: false });

interface ContentRendererProps {
  content: string;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  const renderContent = (): JSX.Element[] => {
    const parts: JSX.Element[] = [];
    let lastIndex = 0;
    const regex = /<CalloutBox.*?>([\s\S]*?)<\/CalloutBox>/g;
    let match;

    while ((match = regex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          <div key={lastIndex} dangerouslySetInnerHTML={{ __html: content.slice(lastIndex, match.index) }} />
        );
      }

      const calloutContent = match[1];
      const headingMatch = match[0].match(/heading="([^"]*)"/);
      const heading = headingMatch ? headingMatch[1] : undefined;

      parts.push(
        <CalloutBox key={match.index} heading={heading}>
          <div dangerouslySetInnerHTML={{ __html: calloutContent }} />
        </CalloutBox>
      );

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < content.length) {
      parts.push(
        <div key={lastIndex} dangerouslySetInnerHTML={{ __html: content.slice(lastIndex) }} />
      );
    }

    return parts;
  };

  return (
    <div className="blog-content prose dark:prose-invert max-w-none">
      {renderContent()}
    </div>
  );
};

export default ContentRenderer;