import { useCallback, useState } from "react";
import { Pressable, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./Checkbox.styles";
import { Text } from "../text";

type Option = {
  id: string | number;
  value: string;
  textRight?: string;
};

type CheckBoxGroupProps = {
  options: Option[];
};

export function CheckBoxGroup({ options }: CheckBoxGroupProps): JSX.Element {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleOnSelectedCheckbox = useCallback((option: Option): void => {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((prevOption) => prevOption.id !== option.id)
        : [...prevOptions, option]
    );
  }, []);

  return (
    <View>
      {options.map((option) => (
        <CheckBox
          key={option.id}
          selected={selectedOptions.includes(option)}
          handleOnPress={() => handleOnSelectedCheckbox(option)}
          {...option}
        />
      ))}
    </View>
  );
}

type CheckBoxProps = {
  selected: boolean;
  children?: JSX.Element;
  handleOnPress(): void;
} & Option;

export function CheckBox({
  selected,
  handleOnPress,
  id,
  value,
  textRight,
}: CheckBoxProps): JSX.Element {
  return (
    <Pressable style={styles.checkbox} key={id} onPress={handleOnPress}>
      <View style={styles.labelBoxWrapper}>
        <View style={styles.box(selected)}>
          {selected && (
            <Ionicons name="md-checkmark-sharp" size={16} color="white" />
          )}
        </View>
        <Text style={styles.label}>{value}</Text>
      </View>
      <Text fontSize="sm">{textRight}</Text>
    </Pressable>
  );
}
