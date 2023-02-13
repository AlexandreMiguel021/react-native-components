import { StyleSheet } from 'react-native'

type stylesProps = {
  space: number
  center?: boolean
  child?: {
    length: number
    index: number
  }
}

export const styles = ({ space, center, child }: stylesProps) =>
  StyleSheet.create({
    stack: {
      paddingVertical: space / -2,
      flexShrink: 1,
      alignItems: center ? 'center' : 'stretch'
    },
    child: {
      flexShrink: 1,
      marginTop: child && child.index !== 0 ? space / 2 : 0,
      marginBottom: child && child.index !== child.length - 2 ? space / 2 : 0
    }
  })
