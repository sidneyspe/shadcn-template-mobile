import { Text, TextProps } from "react-native";

export function Title({ ...rest }: TextProps) {
  return <Text className="mb-2 mt-5 text-xl font-bold text-white" {...rest} />;
}
