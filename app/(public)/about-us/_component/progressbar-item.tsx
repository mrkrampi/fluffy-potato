'use client';

import { CircularProgressbar } from 'react-circular-progressbar';

const STYLES = {
  text: {
    fill: '#F2F2F2',
  },
  path: {
    stroke: '#302DD4',
  },
  trail: {
    stroke: 'transparent',
  },
};

interface IProgressbarItemProps {
  progress: number;
}

export const ProgressbarItem = ({ progress }: IProgressbarItemProps) => {
  return (
    <CircularProgressbar
      value={progress}
      text={`${progress}%`}
      styles={STYLES}
      className="font-unbounded bg-transparent text-primary-accent"
    />
  );
};
