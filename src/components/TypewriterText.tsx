import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text1: string;
  text2: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text1,
  text2,
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseDuration = 4500,
}) => {
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [isDoneTyping, setIsDoneTyping] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    let isDeleting = false;
    let index1 = 0;
    let index2 = 0;

    const tick = () => {
      if (!isDeleting) {
        // Typing phase
        if (index1 < text1.length) {
          index1++;
          setDisplayedText1(text1.slice(0, index1));
          timeoutId = setTimeout(tick, typingSpeed);
        } else if (index2 < text2.length) {
          index2++;
          setDisplayedText2(text2.slice(0, index2));
          if (index2 === text2.length) {
            setIsDoneTyping(true);
            timeoutId = setTimeout(() => {
              isDeleting = true;
              setIsDoneTyping(false);
              tick();
            }, pauseDuration);
          } else {
            timeoutId = setTimeout(tick, typingSpeed + 10);
          }
        }
      } else {
        // Backspacing phase
        if (index2 > 0) {
          index2--;
          setDisplayedText2(text2.slice(0, index2));
          timeoutId = setTimeout(tick, deletingSpeed);
        } else if (index1 > 0) {
          index1--;
          setDisplayedText1(text1.slice(0, index1));
          timeoutId = setTimeout(tick, deletingSpeed);
        } else {
          // Restart typing loop after a brief delay
          isDeleting = false;
          timeoutId = setTimeout(tick, 600);
        }
      }
    };

    timeoutId = setTimeout(tick, 200);

    return () => clearTimeout(timeoutId);
  }, [text1, text2, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-[#F8FAFC] tracking-tight leading-[1.1] mb-8 min-h-[2.4em] sm:min-h-[2.1em] flex flex-col items-center justify-center">
      <div>
        <span>{displayedText1}</span>
        {displayedText1.length < text1.length && (
          <span className="inline-block w-1 h-[0.85em] bg-[#F59E0B] ml-1.5 align-middle animate-ping" />
        )}
      </div>
      {displayedText1.length === text1.length && (
        <div className="mt-2">
          <span className="italic font-normal text-[#FBBF24] underline decoration-[#F59E0B]/40 underline-offset-8">
            {displayedText2}
          </span>
          <span className={`inline-block w-1 h-[0.85em] bg-[#F59E0B] ml-2 align-middle ${isDoneTyping ? 'animate-pulse' : 'animate-ping'}`} />
        </div>
      )}
    </h1>
  );
};
