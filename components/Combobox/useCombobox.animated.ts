import { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

function useComboboxAnimated(value: boolean) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(-30);

  const comboboxAnimatedStyles = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value, { duration: 300 }),
    transform: [{ translateY: translateY.value }],
  }));

  useEffect(() => {
    opacity.value = value ? 1 : 0;
    translateY.value = value ? withSpring(0) : -30;
  }, [opacity, translateY, value]);

  return comboboxAnimatedStyles;
}
