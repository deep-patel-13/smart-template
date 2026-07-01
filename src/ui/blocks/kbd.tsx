import { cn } from '@app/utils/className.helper';

function Kbd({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "bg-oklch(0.97 0 0) text-oklch(0.556 0 0) in-data-[slot=tooltip-content]:bg-oklch(1 0 0)/20 in-data-[slot=tooltip-content]:text-oklch(1 0 0) dark:in-data-[slot=tooltip-content]:bg-oklch(1 0 0)/10 dark:bg-oklch(0.269 0 0) dark:text-oklch(0.708 0 0) dark:in-data-[slot=tooltip-content]:bg-oklch(0.145 0 0)/20 dark:in-data-[slot=tooltip-content]:text-oklch(0.145 0 0) dark:dark:in-data-[slot=tooltip-content]:bg-oklch(0.145 0 0)/10 pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none [&_svg:not([class*='size-'])]:size-3",
        className,
      )}
      {...props}
    />
  );
}

function KbdGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn('inline-flex items-center gap-1', className)}
      {...props}
    />
  );
}

export { Kbd, KbdGroup };
