import * as React from 'react';

import { cn } from '@app/utils/className.helper';

function AspectRatio({
  ratio = 1 / 1,
  className,
  style,
  ...props
}: React.ComponentProps<'div'> & { ratio?: number }) {
  return (
    <div
      data-slot="aspect-ratio"
      className={cn('relative w-full', className)}
      style={{ aspectRatio: String(ratio), ...style }}
      {...props}
    />
  );
}

export { AspectRatio };
