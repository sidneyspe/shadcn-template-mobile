import { Text, View } from "react-native";
import { Avatar, AvatarImage } from "./avatar";

export function User() {
  return (
    <View className="items-center">
      <Avatar >
        <AvatarImage source={{ uri: "https://github.com/sidneyspe.png" }} />
      </Avatar>
      <Text className="text-white font-bold text-2xl mt-4">
        Sidney Pimentel
      </Text>
      <Text className="text-gray-400 text-lg">
        @sidneyspe
      </Text>
    </View>
  )
}
