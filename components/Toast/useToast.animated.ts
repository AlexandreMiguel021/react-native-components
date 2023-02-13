import { ToastPosition } from '@store'
import { useCallback, useEffect } from 'react'
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

export function useToastAnimated(
  firstRender: boolean,
  toastPosition?: ToastPosition
) {
  const translateY = useSharedValue(
    !firstRender ? 0 : toastPosition === 'bottom' ? 80 : -80
  )
  const translateX = useSharedValue(0)
  const opacity = useSharedValue(!firstRender ? 1 : 0)

  const showToastAnimation = useCallback(() => {
    translateY.value = 0
    opacity.value = 1
  }, [opacity, translateY])

  const closeToastAnimation = useCallback(() => {
    opacity.value = 0
    translateX.value = 80
  }, [opacity, translateX])

  const toastAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: withTiming(translateY.value, { duration: 350 }) },
      { translateX: withTiming(translateX.value, { duration: 180 }) }
    ],
    opacity: withTiming(opacity.value, { duration: 180 })
  }))

  useEffect(() => {
    showToastAnimation()
  }, [showToastAnimation])

  return {
    closeToastAnimation,
    toastAnimatedStyle
  }
}
