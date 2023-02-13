import { View } from "react-native";
import { StackProps } from "../HStack";
import { styles } from "./VStack.styles";

export function VStack({
  children,
  space = 0,
  center = false,
  ...rest
}: StackProps): JSX.Element {
  return (
    <View {...rest} style={[styles({ space, center }).stack, rest.style]}>
      {children.map((child, i) => (
        <View
          key={i}
          style={
            styles({ space, child: { index: i, length: children.length } })
              .child
          }
        >
          {child}
        </View>
      ))}
    </View>
  );
}
