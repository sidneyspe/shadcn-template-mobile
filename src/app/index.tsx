import { Image, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-700">
      <Image source={require("@/assets/banner.png")} className="h-52 w-full" />
    </View>
  );
}
