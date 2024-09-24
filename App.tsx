import { Pressable, ScrollView, Text, View } from 'react-native';

import './global.css';

export default function App() {
  return (
    <>
      <Text className="self-center">The following should all be red</Text>
      <Text className="self-center px-4 text-sm">
        (1) uses bg-primary css var and isn't red, while{'\n'}(2) uses tailwind built-in bg-red-500 and is red
      </Text>
      <ScrollView className="my-4" contentContainerClassName="flex-col gap-2">
        <Button i={1} useOuterShadow useInnerShadow useCSSColor />
        <Button i={2} useOuterShadow useInnerShadow useCSSColor={false} />
        <Button i={3} useOuterShadow useInnerShadow={false} useCSSColor />
        <Button i={4} useOuterShadow useInnerShadow={false} useCSSColor={false} />
        <Button i={5} useOuterShadow={false} useInnerShadow useCSSColor />
        <Button i={6} useOuterShadow={false} useInnerShadow useCSSColor={false} />
        <Button i={7} useOuterShadow={false} useInnerShadow={false} useCSSColor />
        <Button i={8} useOuterShadow={false} useInnerShadow={false} useCSSColor={false} />
      </ScrollView>
    </>
  );
}

interface ButtonProps {
  useOuterShadow: boolean;
  useInnerShadow: boolean;
  useCSSColor: boolean;
  i: number;
}

const Button = ({ useOuterShadow, useInnerShadow, useCSSColor, i }: ButtonProps) => {
  return (
    <View className={useOuterShadow ? 'shadow-sm shadow-white' : undefined}>
      <View className={`${useInnerShadow ? 'shadow' : ''}`}>
        <Pressable className={`${useCSSColor ? 'bg-primary' : 'bg-red-500'} p-4`}>
          <Text className="text-sm">
            {i} {useOuterShadow ? 'outer-shadow' : 'NO-outer-shadow'}{' '}
            {useInnerShadow ? 'inner-shadow' : 'NO-inner-shadow'} {useCSSColor ? 'bg-primary' : 'bg-red-500'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
