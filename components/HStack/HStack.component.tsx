import { ReactNode } from "react";
import { View, ViewProps } from "react-native";
import { styles } from "./HStack.styles";

export type StackProps = {
  children: ReactNode[];
  space?: number;
  center?: boolean;
  flexShrink?: boolean;
} & ViewProps;

export function HStack({
  children,
  space = 0,
  center = false,
  flexShrink = true,
  ...rest
}: StackProps): JSX.Element {
  return (
    <View {...rest} style={[styles({ space, center }).stack, rest.style]}>
      {children
        .filter((node) => !!node)
        .map((child, index) => (
          <View
            key={index}
            style={[
              styles({
                space,
                child: { index, length: children.length, flexShrink },
              }).child,
            ]}
          >
            {child}
          </View>
        ))}
    </View>
  );
}
