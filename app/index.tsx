import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { init } from "@/db-operation/init";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    init();
  }, []);

  return (
    <View className="h-full flex">
      {/* header */}
      <View className="h-[40px] px-[10px] border-b flex flex-row justify-between items-center">
        <Text>Crafting recipes</Text>
        <Link href="/add-item" asChild>
          <TouchableOpacity className="flex items-center justify-center border w-[30px] h-[30px]">
            <Text>+</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <ScrollView className="grow">
        <Text className="red">Hi?Man</Text>
      </ScrollView>
    </View>
  );
}
