import React from 'react';
import { MinusIcon } from '@heroicons/react/20/solid';
import PlusIcon from '../icons/plus';

interface QuantityPickerProps {
  value: number;
  onChange(value: number): void;
}

const QuantityPicker: React.FC<QuantityPickerProps> = (props) => {
  const { value, onChange } = props;

  const handleClickDecrement = (e: any) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    e.nativeEvent.preventDefault();

    if (value > 0) {
      onChange(value - 1);
    }
  };

  const handleClickIncrement = (e: any) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    e.nativeEvent.preventDefault();

    onChange(value + 1);
  };

  return (
    <>
      <div className="flex h-9 flex-row items-center justify-center rounded-full border border-second px-1">
        <span onClick={handleClickDecrement}>
          <MinusIcon className="h-6 cursor-pointer select-none text-black" />
        </span>
        <span className="p-2 text-second ">{props?.value ?? 0}</span>
        <span onClick={handleClickIncrement}>
          <PlusIcon className="h-6 cursor-pointer select-none text-black" />
        </span>
      </div>
    </>
  );
};

export default QuantityPicker;
