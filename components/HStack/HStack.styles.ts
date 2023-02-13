import { StyleSheet } from 'react-native'

type stylesProps = {
  space: number
  center?: boolean
  child?: {
    length: number
    index: number
    flexShrink?: boolean
  }
}

export const styles = ({ space, center, child }: stylesProps) =>
  StyleSheet.create({
    stack: {
      paddingHorizontal: space / -2,
      flexDirection: 'row',
      justifyContent: center ? 'center' : 'flex-start'
    },
    child: {
      marginLeft: child?.index !== 0 ? space / 2 : 0,
      marginRight: child && child.index !== child.length - 1 ? space / 2 : 0,
      flex: child?.flexShrink ? 0 : 1,
      flexShrink: child?.flexShrink ? 1 : 0
    }
  })
