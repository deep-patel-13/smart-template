import { Separator as SeparatorPrimitive } from '@base-ui/react/separator';

import { cn } from '@app/utils/className.helper';

function Separator({ className, orientation = 'horizontal', ...props }: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={orientation}
      className={cn(
        'bg-oklch(0.922 0 0) dark:bg-oklch(1 0 0 / 10%) shrink-0 data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch',
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
