import { ReactNode } from "react";
import { View } from "react-native";
import { Text } from "../text";
import { styles } from "./FormControl.styles";

type FormControlRootProps = {
  children: ReactNode;
};

function Root({ children }: FormControlRootProps): JSX.Element {
  return <View>{children}</View>;
}

type FormControlLabelProps = {
  label: string;
  insideInputLabel?: boolean;
};

function Label({
  label,
  insideInputLabel = false,
}: FormControlLabelProps): JSX.Element {
  return (
    <Text fontWeight="bold" style={insideInputLabel && styles.insideInputLabel}>
      {label}
    </Text>
  );
}

type FormControlErrorMessageProps = {
  errorMessage?: string;
};

function ErrorMessage({
  errorMessage,
}: FormControlErrorMessageProps): JSX.Element {
  if (!errorMessage) return <></>;

  return (
    <Text style={styles.errorMessage} fontWeight="semiBold">
      {errorMessage}
    </Text>
  );
}

export const FormControl = {
  Root,
  Label,
  ErrorMessage,
};
