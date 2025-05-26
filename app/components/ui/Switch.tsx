import { memo } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { classNames } from '~/utils/classNames';

interface SwitchProps {
  className?: string;
  checked?: boolean;
  onCheckedChange?: (event: boolean) => void;
}

export const Switch = memo(({ className, onCheckedChange, checked }: SwitchProps) => {
  return (
    <SwitchPrimitive.Root
      className={classNames(
        'relative h-10 w-12 cursor-pointer rounded-full bg-bolt-elements-button-primary-background', // h-6 w-11 -> h-10 w-12 (40px x 48px)
        'transition-colors duration-200 ease-in-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-bolt-elements-item-contentAccent',
        className,
      )}
      checked={checked}
      onCheckedChange={(e) => onCheckedChange?.(e)}
    >
      <SwitchPrimitive.Thumb
        className={classNames(
          'block h-8 w-8 rounded-full bg-white', // h-5 w-5 -> h-8 w-8 (32px)
          'shadow-lg shadow-black/20',
          'transition-transform duration-200 ease-in-out',
          'translate-x-1', // translate-x-0.5 -> translate-x-1 (4px)
          'data-[state=checked]:translate-x-3', // translate-x-[1.375rem] (22px) -> translate-x-3 (12px)
          'will-change-transform',
        )}
      />
    </SwitchPrimitive.Root>
  );
});
