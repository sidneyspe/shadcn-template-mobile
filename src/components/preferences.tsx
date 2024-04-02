import { View } from "react-native";
import { Title } from "./title";
import { Option } from "./option";
import { Switch } from "./switch";
import { useState } from "react";
import { Checkbox } from "./checkbox";

export function Preferences() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View className="w-full">
      <Title>Preferences</Title>
      <Option>
        <Option.Icon icon="dark-mode" />
        <Option.Title>Dark Mode</Option.Title>
        <Switch onValueChange={setIsEnabled} value={isEnabled} />
      </Option>
      <Option>
        <Option.Icon icon="email" />
        <Option.Title>Public e-mail</Option.Title>
        <Checkbox />
      </Option>
    </View>
  );
}
