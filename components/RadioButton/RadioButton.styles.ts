import { theme } from '@theme'
import { StyleSheet } from 'react-native'

const radioButtonStyles = (selected?: boolean) => {
  return StyleSheet.create({
    radioButton: {
      height: 20,
      width: 20,
      backgroundColor: selected ? theme.colors.gray[800] : 'white',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1.4,
      borderColor: theme.colors.gray[800]
    }
  }).radioButton
}

export const style = StyleSheet.create({
  radioLabel: {
    color: theme.colors.secondary[400]
  },
  radioButtonContainer: {
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 16
  },
  radioGroupContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export const styles = {
  radioButton: radioButtonStyles,
  ...style
}
