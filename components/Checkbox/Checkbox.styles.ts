import { theme } from '@theme'
import { StyleSheet } from 'react-native'

const boxStyles = (selected: boolean) => {
  return StyleSheet.create({
    box: {
      height: 20,
      width: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1.2,
      borderRadius: 4,
      borderColor: theme.colors.gray[700],
      marginRight: 12,
      backgroundColor: selected ? 'black' : 'white'
    }
  }).box
}

const style = StyleSheet.create({
  checkbox: {
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 4,
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  label: {
    fontSize: 16,
    letterSpacing: 0.3
  },
  labelBoxWrapper: {
    flexDirection: 'row'
  }
})

export const styles = {
  ...style,
  box: boxStyles
}
