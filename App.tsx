import { Text, View } from "react-native";
import NewTree from "./components/NewTree";

export default function App() {
  return (
    <View className="flex-1 bg-green-50 items-center justify-center gap-5">
      <Text className="text-green-500 text-xl">Untitled Tree Thing</Text>
      <NewTree />
    </View>
  );
}
