import {
  Control,
  Controller,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { Combobox, ComboboxProps } from "../combobox";

export type HfComboboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<ComboboxProps, "onChange" | "value"> & {
    name: string;
    control: Control<T>;
  };

export function HfCombobox<T extends FieldValues>({
  control,
  name,
  handleSearch,
  defaultValue,
  placeholder,
}: HfComboboxProps<T>): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { onChange, value } }) => (
        <Combobox
          handleSearch={handleSearch}
          value={value}
          placeholder={placeholder}
          onChange={(value) => onChange(value)}
        />
      )}
    />
  );
}
