import { Text, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export function User() {
  return (
    <View className="items-center">
      <Avatar className="w-32 h-32 border-4 border-gray-600" >
        <AvatarImage source={{ uri: "https://github.com/sidneyspe.png" }} />
        <AvatarFallback>SPE</AvatarFallback>
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
