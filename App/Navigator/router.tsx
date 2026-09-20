/*
 *   File : router.tsx
 *   Description : router
 *   Integrations : null
 *   Version : v1.1
 */
import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Src/Container/login";
import ConversationList from "../Src/Container/conversation-list";
import Chat from '../Src/Container/chat';

export type RootStackParamList = {
  Login: undefined;
  ConversationList: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

const Router: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
      />

      <Stack.Screen
        name="ConversationList"
        component={ConversationList}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
      />
    </Stack.Navigator>
  )
}

export default Router;