import { Link } from "expo-router";
import { StatusBar, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center font-">
      <Text className="text-3xl">ABRA</Text>
      <StatusBar style="auto" />
      <Link href="home">GO TO HOME PAGE</Link>
    </View>
  );
}
