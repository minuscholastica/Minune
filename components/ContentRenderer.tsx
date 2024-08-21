'use client';

import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import dynamic from 'next/dynamic';

const CalloutBox = dynamic(() => import('./CalloutBox'), { ssr: false });

interface ContentRendererProps {
  content: string;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const calloutBoxes = contentRef.current.getElementsByTagName('calloutbox');
      Array.from(calloutBoxes).forEach((box) => {
        const icon = box.getAttribute('icon') || '💡';
        const content = box.innerHTML;
        const newBox = document.createElement('div');
        box.parentNode?.replaceChild(newBox, box);
        const root = createRoot(newBox);
        root.render(<CalloutBox icon={icon} dangerouslySetInnerHTML={{ __html: content }} />);
      });
    }
  }, [content]);

  return (
    <div 
      ref={contentRef}
      dangerouslySetInnerHTML={{ __html: content }}
      className="prose dark:prose-invert max-w-none"
    />
  );
};

export default ContentRenderer;