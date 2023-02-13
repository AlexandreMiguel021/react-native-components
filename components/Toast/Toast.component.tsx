/* eslint-disable @typescript-eslint/no-explicit-any */
import { Ionicons } from "@expo/vector-icons";
import { useCallback, useEffect } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

import { useAppDispatch, useAppSelector } from "@hooks";
import { ToastProps, closeToast } from "@store";
import { Text } from "../text";
import { VStack } from "../VStack";
import { styles } from "./Toast.styles";
import { useToastAnimated } from "./useToast.animated";

const iconsFeedback = {
  success: "md-checkmark-sharp",
  error: "md-close",
  info: "md-information-sharp",
  warn: "md-warning",
};

const titleFeedback = {
  success: "Sucesso",
  error: "Erro",
  info: "Info",
  warn: "Aviso",
};

const TimeToRemoveToast = 4000;
const WaitTimeToCloseToast = 250;

function Toast({
  message,
  type,
  id,
  config,
  firstRender,
}: ToastProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { closeToastAnimation, toastAnimatedStyle } = useToastAnimated(
    firstRender,
    config?.position
  );

  const closeToastComponent = useCallback(() => {
    closeToastAnimation();
    setTimeout(() => {
      dispatch(closeToast(id));
    }, WaitTimeToCloseToast);
  }, [closeToastAnimation, dispatch, id]);

  const handleOnPressIconClose = useCallback(() => {
    closeToastComponent();
  }, [closeToastComponent]);

  useEffect(() => {
    const handler = setTimeout(() => {
      closeToastComponent();
    }, config?.time ?? TimeToRemoveToast);

    return () => {
      clearTimeout(handler);
    };
  }, [closeToastComponent, config?.time]);

  return (
    <ScrollView
      horizontal
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
      onScrollEndDrag={handleOnPressIconClose}
      contentContainerStyle={styles.scrollViewContainer}
    >
      <Animated.View style={[styles.toast(type), toastAnimatedStyle]}>
        <View style={styles.iconContainer(type)}>
          <Ionicons
            size={20}
            style={styles.icon}
            name={iconsFeedback[type] as any}
          />
        </View>
        <VStack space={8}>
          <Text fontWeight="bold">{titleFeedback[type]}</Text>
          <Text fontSize="sm">{String(message)}</Text>
        </VStack>
        <TouchableOpacity
          onPress={handleOnPressIconClose}
          style={styles.iconCloseTouchable}
        >
          <Ionicons name="close" size={28} style={styles.iconClose} />
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}

export function ToastContainer(): JSX.Element {
  const { toast } = useAppSelector((state) => state.toast);
  const { toastPosition } = useAppSelector((state) => state.toast);

  return (
    <VStack space={12} style={styles.container(toastPosition)}>
      {toast.map((item) => (
        <Toast key={item.id} {...item} />
      ))}
    </VStack>
  );
}
