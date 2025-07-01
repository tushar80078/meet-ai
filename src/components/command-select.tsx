import { ReactNode, useState } from "react";

import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

import {
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandResponsiveDialog,
} from "@/components/ui/command";

interface CommandSelectProps {
  options: Array<{
    id: string;
    value: string;
    children: ReactNode;
  }>;
  onSelect: (value: string) => void;
  onSearch?: (value: string) => void;
  value: string;
  placeholder?: string;
  isSearchable?: boolean;
  className?: string;
}

const CommandSelect = ({
  onSearch,
  onSelect,
  options,
  value,
  className,
  placeholder = "Select an option.",
}: CommandSelectProps) => {
  const [open, setOpen] = useState(false);
  const selectedOption = options.find((option) => option.value === value);

  const handleOpenChange = (open: boolean) => {
    console.log('open', open)
    onSearch?.("");
    setOpen(open);
  };

  return (
    <>
      <Button
        type="button"
        variant={"outline"}
        className={cn(
          "h-9 justify-between font-normal px-2",
          !selectedOption && " text-muted-foreground",
          className
        )}
        onClick={() => setOpen(true)}
      >
        <div>{selectedOption?.children ?? placeholder} </div>
        <ChevronDownIcon />

        <CommandResponsiveDialog
          open={open}
          onOpenChange={handleOpenChange}
          shouldFilter={!onSearch}
        >
          <CommandInput placeholder={"Search..."} onValueChange={onSearch} />
          <CommandList>
            <CommandEmpty>
              <span className="text-muted-foreground text-sm">
                No options found
              </span>
            </CommandEmpty>
            {options.map((option) => (
              <CommandItem
                key={option.id}
                onSelect={() => {
                  onSelect(option.value);
                  setOpen(false);
                }}
              >
                {option.children}
              </CommandItem>
            ))}
          </CommandList>
        </CommandResponsiveDialog>
      </Button>
    </>
  );
};

export default CommandSelect;
