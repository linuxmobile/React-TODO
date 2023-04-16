import * as React from 'react';

type StackProps = {
  'aria-label': string;
  children: React.ReactNode[];
};

export default function Stack(props: StackProps) {
  const { 'aria-label': ariaLabel, children } = props;

  return (
    <div className={`h-full px-2 overflow-y-auto ${children.length > 5 && 'border-t border-b border-gray-200'}`}>
      <ul
        className="grid divide-y divide-gray-200"
        aria-label={ariaLabel}>
        {children}
      </ul>
    </div>
  );
}
