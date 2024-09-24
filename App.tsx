import { Pressable, Text, View } from 'react-native';

import './global.css';

export default function App() {
  return (
    <View className="shadow-sm shadow-white">
      <View className="shadow">
        <Pressable className="bg-primary">
          <Text>This should be red</Text>
        </Pressable>
      </View>
    </View>
  );
}
