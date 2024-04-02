import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Preferences } from "@/components/preferences";
import { Skills } from "@/components/skills";
import { useToast } from "@/components/toast";
import { User } from "@/components/user";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Home() {
  const { toast } = useToast();
  return (
    <View className="flex-1 bg-gray-700 ">
      <ScrollView>
        <Image
          source={require("@/assets/banner.png")}
          className="-mb-16 h-52 w-full"
        />
        <View className="flex-1 px-4 pb-4">
          <User />
          <Skills />
          <Preferences />

          <View className="mt-6 w-full flex-1">
            <Input placeholder="Company" inputClasses="mb-6" label="Company" />
            <Button label="Save" onPress={() => toast("Saved!")} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
