import React from 'react';

interface SectionTagProps {
  label: string;
  iconSvg?: React.ReactNode;
}

export const SectionTag: React.FC<SectionTagProps> = ({ label, iconSvg }) => {
  return (
    <div className="flex flex-col items-start gap-0 w-full max-w-[280px]">
      <div className="flex items-center gap-3 py-2 px-0">
        <div className="w-6 h-6 flex items-center justify-center opacity-80 text-blue-400">
          {iconSvg || (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          )}
        </div>
        <span className="text-[13px] tracking-wider uppercase font-semibold text-[#9ba9c4]">
          {label}
        </span>
      </div>
      <div className="h-[1px] w-full bg-[rgba(125,164,255,0.16)]" />
    </div>
  );
};
