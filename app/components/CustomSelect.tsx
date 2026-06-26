'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export type SelectOption = {
  value: string;
  label: string;
  icon?: string;
};

type CustomSelectProps = {
  id?: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
};

function OptionLabel({ option }: { option: SelectOption }) {
  return (
    <span className="flex items-center gap-3 min-w-0">
      {option.icon && (
        <span className="w-6 h-6 shrink-0 flex items-center justify-center">
          <Image
            src={option.icon}
            alt=""
            width={24}
            height={24}
            className="object-contain"
            aria-hidden
          />
        </span>
      )}
      <span className="truncate">{option.label}</span>
    </span>
  );
}

export default function CustomSelect({
  id: idProp,
  name,
  label,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  required = false,
}: CustomSelectProps) {
  const generatedId = useId();
  const id = idProp ?? generatedId;
  const listboxId = `${id}-listbox`;

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);
  const displayLabel = selectedOption?.label ?? placeholder;

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const selectOption = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <label id={`${id}-label`} htmlFor={id} className="block text-sm font-semibold text-foreground mb-2">
        {label}
      </label>

      <input type="hidden" name={name} value={value} required={required} />

      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={`${id}-label`}
        aria-controls={listboxId}
        onClick={() => setIsOpen((open) => !open)}
        className={`w-full px-4 py-3 bg-background border rounded-xl text-left transition-all duration-200 flex items-center justify-between gap-3 focus:outline-none focus:border-primary/40 ${
          isOpen ? 'border-primary/40 ring-2 ring-primary/10' : 'border-border/40'
        } ${selectedOption ? 'text-foreground' : 'text-foreground/50'}`}
      >
        <span className="min-w-0 flex-1">
          {selectedOption ? <OptionLabel option={selectedOption} /> : displayLabel}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-foreground/50 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden
        />
      </button>

      {isOpen && (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={`${id}-label`}
          className="absolute z-50 mt-2 w-full max-h-64 overflow-auto rounded-2xl border border-border/40 bg-card/95 backdrop-blur-md py-2 shadow-xl shadow-black/10"
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <li key={option.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => selectOption(option.value)}
                  className={`w-full px-4 py-3 text-left text-sm md:text-base flex items-center justify-between gap-3 transition-colors ${
                    isSelected
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/80 hover:bg-accent/80 hover:text-foreground'
                  }`}
                >
                  <span className="min-w-0 flex-1">
                    <OptionLabel option={option} />
                  </span>
                  {isSelected && <Check className="w-4 h-4 shrink-0" aria-hidden />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
