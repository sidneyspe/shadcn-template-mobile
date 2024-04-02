import { forwardRef } from "react";
import { Text, TextInput, View } from "react-native";

import { cn } from "../lib/utils";
import { colors } from "@/styles/colors";

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelClasses, inputClasses, ...props }, ref) => (
    <View className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <Text
          className={cn("mb-1 text-base font-bold text-white", labelClasses)}
        >
          {label}
        </Text>
      )}
      <TextInput
        placeholderTextColor={colors.gray[400]}
        className={cn(
          inputClasses,
          "rounded-lg bg-gray-600 px-4 py-2.5 text-white",
        )}
        {...props}
      />
    </View>
  ),
);

export { Input };
