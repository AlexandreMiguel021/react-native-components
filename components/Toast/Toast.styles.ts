import { FeedbackType, ToastPosition } from '@store'
import { globalStyles, theme } from '@theme'
import { StyleSheet } from 'react-native'
const { colors } = theme

const toastStyles = (feedbackType: FeedbackType) => {
  return StyleSheet.create({
    toast: {
      backgroundColor: 'white',
      padding: 8,
      minHeight: 74,
      maxWidth: '80%',
      minWidth: '80%',
      paddingLeft: 8,
      paddingRight: 16,
      borderLeftWidth: 12,
      borderRadius: 4,
      alignItems: 'center',
      flexDirection: 'row',
      borderLeftColor: colors[feedbackType],
      ...globalStyles.cardShadow
    }
  }).toast
}

const iconContainerStyles = (feedbackType: FeedbackType) => {
  return StyleSheet.create({
    iconContainer: {
      marginRight: 12,
      backgroundColor: colors[feedbackType],
      borderRadius: 100,
      padding: 4,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }).iconContainer
}

const containerModifier = {
  top: () => ({
    top: 64
  }),
  bottom: () => ({
    bottom: 32
  })
}

const containerStyles = (position: ToastPosition) => {
  return StyleSheet.create({
    container: {
      zIndex: 5,
      position: 'absolute',
      width: '100%',
      justifyContent: 'flex-start',
      ...containerModifier[position]()
    }
  }).container
}

const style = StyleSheet.create({
  icon: {
    color: 'white',
    padding: 0,
    margin: 0
  },
  iconCloseTouchable: {
    position: 'absolute',
    right: 2,
    top: 2
  },
  iconClose: {
    color: colors.gray[500]
  },
  scrollView: {
    paddingVertical: 4
  },
  scrollViewContainer: {
    width: '100%',
    justifyContent: 'center'
  }
})

export const styles = {
  iconContainer: iconContainerStyles,
  toast: toastStyles,
  container: containerStyles,
  ...style
}
