import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { cn } from "../lib/utils";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

// TODO: make controlled (optional)
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof View> {
  label?: string;
  labelClasses?: string;
  checkboxClasses?: string;
}
function Checkbox({
  label,
  labelClasses,
  checkboxClasses,
  className,
  ...props
}: CheckboxProps) {
  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked((prev) => !prev);
  };

  return (
    <View
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    >
      <TouchableOpacity onPress={toggleCheckbox}>
        <View
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded bg-gray-800 ",
            {
              "bg-green-500": isChecked,
            },
            checkboxClasses,
          )}
        >
          {isChecked && (
            <MaterialIcons name="check" size={20} color={colors.gray[800]} />
          )}
        </View>
      </TouchableOpacity>
      {label && (
        <Text className={cn("text-primary", labelClasses)}>{label}</Text>
      )}
    </View>
  );
}

export { Checkbox };
