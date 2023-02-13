import { Ionicons } from "@expo/vector-icons";
import { useCallback } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./InputSearch.styles";

type InputSearchProps = TextInputProps & {
  handleOnChange: (value: string) => void;
};

export function InputSearch({
  handleOnChange,
  value,
  ...rest
}: InputSearchProps): JSX.Element {
  const handleOnChangeText = useCallback(
    (value: string): void => {
      handleOnChange(value);
    },
    [handleOnChange]
  );

  const handleOnPressButtonClear = useCallback((): void => {
    handleOnChange("");
  }, [handleOnChange]);

  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconSearchWrapper}>
        <Ionicons name="search" size={24} style={styles.iconSearch} />
      </View>

      <TextInput
        {...rest}
        style={styles.textInput}
        value={value}
        onChangeText={handleOnChangeText}
      />

      {value && (
        <TouchableOpacity
          onPress={handleOnPressButtonClear}
          style={styles.iconClose}
        >
          <Ionicons name="close" size={28} />
        </TouchableOpacity>
      )}
    </View>
  );
}
