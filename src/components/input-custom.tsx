import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { TextInput, View, TextInputProps } from "react-native";
import { Input } from "./input";

function InputCustom({ children }: { children: ReactNode }) {
  return (
    <View className="h-14 w-full flex-row items-center gap-3 rounded-lg border border-green-400 p-3">
      {children}
    </View>
  );
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="font-regular flex-1 text-base text-white"
      placeholderTextColor={colors.gray[400]}
      {...rest}
    />
  );
}

InputCustom.Field = Field;

export { InputCustom };
