import { cn } from '@app/utils/className.helper';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        'bg-oklch(0.97 0 0) dark:bg-oklch(0.269 0 0) animate-pulse rounded-md',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
