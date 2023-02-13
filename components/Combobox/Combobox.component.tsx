import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

import { toast } from "@hooks";
import { OptionModel } from "@models";

import { InputSearch } from "../InputSearch";
import { Loading } from "../loading";
import { Text } from "../text";
import { styles } from "./combobox-styles";

export type ComboboxProps = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  handleSearch: (value: string) => Promise<OptionModel[]>;
};

export function Combobox({
  handleSearch,
  placeholder,
  onChange,
}: ComboboxProps): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);
  const [options, setOptions] = useState<OptionModel[]>([]);

  const { debouncedValue, isChanging } = useDebounce(value);

  const showCombobox = !!value && !isChanging && !loading && !selected;
  const showLoadingBox = isChanging && !!value && !selected;

  const isAnimatedStyles = useComboboxAnimated(showLoadingBox);
  const comboboxAnimatedStyles = useComboboxAnimated(showCombobox);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setOptions(await handleSearch(debouncedValue ?? ""));
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    }

    debouncedValue && fetchData();

    return () => {
      setOptions([]);
    };
  }, [debouncedValue, handleSearch]);

  function handleOnPress(selectedOption: string): void {
    onChange(selectedOption);
    setValue(selectedOption);
    setSelected(true);
  }

  return (
    <View style={styles.container}>
      <InputSearch
        handleOnChange={setValue}
        value={value}
        placeholder={placeholder}
        onFocus={() => setSelected(false)}
      />
      {showLoadingBox && (
        <Animated.View style={[styles.loadingBox, isAnimatedStyles]}>
          <Loading showLoadingMessage={false} loadingColor="black" />
        </Animated.View>
      )}
      {showCombobox && (
        <Animated.FlatList
          ListEmptyComponent={() => (
            <Text style={styles.emptyText} textAlign="center">
              Termo pesquisado não foi encontrado.
            </Text>
          )}
          data={options}
          style={[styles.box(options.length), comboboxAnimatedStyles]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.item(index)}
              onPress={() => handleOnPress(item.value)}
            >
              <Text fontWeight="bold">{item.value}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
