import { View } from "react-native";
import { Title } from "@/components/title";
import { SKILLS } from "@/utils/skills";
import { Badge } from "./badge";

export function Skills() {
  return (
    <View className="w-full">
      <Title>Skills</Title>
      <View className="w-full flex-row flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <Badge key={skill.name} label={skill.name} icon={skill.icon} />
        ))}
      </View>
    </View>
  );
}
