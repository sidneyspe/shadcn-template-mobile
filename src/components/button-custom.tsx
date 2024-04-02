import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";

type Props = TouchableOpacityProps & {
  title?: string;
  isLoading?: boolean;
};

export function ButtonCustom({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading}
      className="h-14 w-full items-center justify-center rounded-lg bg-orange-500"
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator className="text-green-500" />
      ) : (
        <Text className="text-base font-bold uppercase text-green-500">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
