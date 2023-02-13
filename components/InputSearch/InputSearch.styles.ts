import { theme } from '@theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    backgroundColor: theme.colors.gray[100],
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 12,
    alignItems: 'center',
    flexShrink: 1
  },
  iconSearchWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconSearch: {
    color: theme.colors.gray[700]
  },
  textInput: {
    borderWidth: 0,
    height: '100%',
    flex: 8
  },
  iconClose: {
    position: 'absolute',
    right: 12,
    top: 9
  }
})
