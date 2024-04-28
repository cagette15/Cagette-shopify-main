'use client';
import Prose from 'components/prose';
import { useState } from 'react';

export default function ProductDescription({ descriptionHtml }: { descriptionHtml: string }) {
  const [showMore, setShowMore] = useState(false);

  const shortDescription = `${descriptionHtml.substring(0, 720)}${
    !showMore && descriptionHtml.length > 760 ? '...' : ''
  }`;
  const fullDescription = descriptionHtml;
  const descriptionToDisplay = showMore ? fullDescription : shortDescription;

  const handleClick = () => {
    if (showMore) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setShowMore(!showMore);
  };

  return (
    <div>
      {descriptionHtml ? (
        <>
          <div className={`relative ${!showMore ? 'max-h-48 overflow-hidden' : ''}`}>
            <Prose className="prose mb-6 text-sm leading-tight" html={descriptionToDisplay} />
            {!showMore && descriptionHtml.length > 720 && (
              <div className="absolute bottom-0 h-12 w-full bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>
          {descriptionHtml.length > 720 && (
            <button className="btn mt-4 bg-white" onClick={handleClick}>
              {showMore ? 'Show less' : 'Show more'}
            </button>
          )}
        </>
      ) : null}
    </div>
  );
}
