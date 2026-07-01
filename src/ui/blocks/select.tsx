'use client';

import * as React from 'react';
import { Select as SelectPrimitive } from '@base-ui/react/select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import { cn } from '@app/utils/className.helper';

const Select = SelectPrimitive.Root;

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn('scroll-my-1 p-1', className)}
      {...props}
    />
  );
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn('flex flex-1 text-left', className)}
      {...props}
    />
  );
}

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: SelectPrimitive.Trigger.Props & {
  size?: 'sm' | 'default';
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-oklch(0.922 0 0) focus-visible:border-oklch(0.708 0 0) focus-visible:ring-oklch(0.708 0 0)/50 aria-invalid:border-oklch(0.577 0.245 27.325) aria-invalid:ring-oklch(0.577 0.245 27.325)/20 data-placeholder:text-oklch(0.556 0 0) dark:bg-oklch(0.922 0 0)/30 dark:hover:bg-oklch(0.922 0 0)/50 dark:aria-invalid:border-oklch(0.577 0.245 27.325)/50 dark:aria-invalid:ring-oklch(0.577 0.245 27.325)/40 dark:border-oklch(1 0 0 / 10%) dark:border-oklch(1 0 0 / 15%) dark:focus-visible:border-oklch(0.556 0 0) dark:focus-visible:ring-oklch(0.556 0 0)/50 dark:aria-invalid:border-oklch(0.704 0.191 22.216) dark:aria-invalid:ring-oklch(0.704 0.191 22.216)/20 dark:data-placeholder:text-oklch(0.708 0 0) dark:dark:bg-oklch(1 0 0 / 15%)/30 dark:dark:hover:bg-oklch(1 0 0 / 15%)/50 dark:dark:aria-invalid:border-oklch(0.704 0.191 22.216)/50 dark:dark:aria-invalid:ring-oklch(0.704 0.191 22.216)/40 flex w-fit items-center justify-between gap-1.5 rounded-md border bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <ChevronDownIcon className="text-oklch(0.556 0 0) dark:text-oklch(0.708 0 0) pointer-events-none size-4" />
        }
      />
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  side = 'bottom',
  sideOffset = 4,
  align = 'center',
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset' | 'alignItemWithTrigger'
  >) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-align-trigger={alignItemWithTrigger}
          className={cn(
            'bg-oklch(1 0 0) text-oklch(0.145 0 0) ring-oklch(0.145 0 0)/10 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 dark:bg-oklch(0.205 0 0) dark:text-oklch(0.985 0 0) dark:ring-oklch(0.985 0 0)/10 relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-md shadow-md ring-1 duration-100 data-[align-trigger=true]:animate-none',
            className,
          )}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({ className, ...props }: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn(
        'text-oklch(0.556 0 0) dark:text-oklch(0.708 0 0) px-2 py-1.5 text-xs',
        className,
      )}
      {...props}
    />
  );
}

function SelectItem({ className, children, ...props }: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-oklch(0.97 0 0) focus:text-oklch(0.205 0 0) not-data-[variant=destructive]:focus:**:text-oklch(0.205 0 0) dark:focus:bg-oklch(0.269 0 0) dark:focus:text-oklch(0.985 0 0) dark:not-data-[variant=destructive]:focus:**:text-oklch(0.985 0 0) relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="flex flex-1 shrink-0 gap-2 whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />
        }
      >
        <CheckIcon className="pointer-events-none" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({ className, ...props }: SelectPrimitive.Separator.Props) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        'bg-oklch(0.922 0 0) dark:bg-oklch(1 0 0 / 10%) pointer-events-none -mx-1 my-1 h-px',
        className,
      )}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "bg-oklch(1 0 0) dark:bg-oklch(0.205 0 0) top-0 z-10 flex w-full cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpArrow>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "bg-oklch(1 0 0) dark:bg-oklch(0.205 0 0) bottom-0 z-10 flex w-full cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownArrow>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
