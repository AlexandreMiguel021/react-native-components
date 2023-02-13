import {
  Control,
  Controller,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { RadioButtonGroup, RadioButtonGroupProps } from "../radio-button";

export type HfRadioButtonProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<RadioButtonGroupProps, "errorMessage" | "onChange" | "value"> & {
    name: string;
    control: Control<T>;
    defaultValue?: string | number;
  };

export function HfRadioButton<T extends FieldValues>({
  control,
  name,
  defaultValue,
  options,
  title,
}: HfRadioButtonProps<T>): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <RadioButtonGroup
          options={options}
          title={title}
          value={value}
          errorMessage={error?.message}
          onChange={(value) => onChange(value)}
        />
      )}
    />
  );
}
