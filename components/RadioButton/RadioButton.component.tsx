import { memo } from "react";
import { Pressable, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { Option } from "@types";

import { HStack } from "../hstack";
import { Text } from "../text";
import { VStack } from "../vstack";
import { FormControl } from "../form-control";
import { styles } from "./RadioButton.styles";

export type RadioButtonGroupProps = {
  options: Option[];
  title: string;
  value: string;
  errorMessage?: string;
  onChange: (value: string) => void;
};

const pressableArea = {
  top: 16,
  bottom: 16,
  left: 5,
  right: 5,
};

export function RadioButtonGroup({
  options,
  title,
  onChange,
  errorMessage,
  value,
}: RadioButtonGroupProps): JSX.Element {
  function removeOptionSelected(): void {
    onChange("");
  }

  function handleOnPressRadioButton(selectedValue: string): void {
    if (selectedValue === value) {
      removeOptionSelected();
      return;
    }

    onChange(selectedValue);
  }

  return (
    <FormControl.Root>
      <VStack space={34}>
        <FormControl.Label label={title} />
        <View style={styles.radioGroupContainer}>
          {options.map((item) => (
            <Pressable
              key={item.id}
              hitSlop={pressableArea}
              onPress={() => handleOnPressRadioButton(item.value)}
            >
              <RadioButton {...item} selected={value === item.value} />
            </Pressable>
          ))}
        </View>
      </VStack>
      <FormControl.ErrorMessage errorMessage={errorMessage} />
    </FormControl.Root>
  );
}

type RadioButtonProps = Option & {
  selected?: boolean;
};

const RadioButton = memo(
  ({ label, selected }: RadioButtonProps): JSX.Element => {
    return (
      <HStack style={styles.radioButtonContainer} space={8}>
        <View style={styles.radioButton(selected)}>
          {selected && <Entypo name="check" size={12} color="white" />}
        </View>
        <Text style={styles.radioLabel} fontWeight="bold">
          {label}
        </Text>
      </HStack>
    );
  }
);

RadioButton.displayName = "RadioButton";
