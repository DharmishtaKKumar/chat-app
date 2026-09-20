/*
 *   File : chat.tsx
 *   Description : chat display
 *   Integrations : null
 *   Version : v1.1
 */
import React, { useRef, useState } from 'react';
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../../Navigator/Router';
import { useChatStore } from '../../Helper/store';
import { streamChatResponse } from '../../Service/chat-service';
import { Message } from '../../Helper/types';
import { Styles } from '../../Theme';
import CustomTextInput from '../Component/text-input';

type ChatProps = NativeStackScreenProps<
    RootStackParamList,
    'Chat'
>;

const Chat: React.FC<ChatProps> = ({ route, navigation }) => {
    const { conversationId, conversationName } = route.params;

    const [messageText, setMessageText] = useState('');

    const flatListRef = useRef<FlatList>(null);

    const conversation = useChatStore(state =>
        state.conversations.find(
            item => item.id === conversationId,
        ),
    );

    const addMessage = useChatStore(
        state => state.addMessage,
    );

    const updateMessage = useChatStore(
        state => state.updateMessage,
    );

    const messages = conversation?.messages ?? [];

    const _scrollToBottom = () => {
        setTimeout(() => {
            flatListRef.current?.scrollToEnd({
                animated: true,
            });
        }, 50);
    }

//Function Generate automated streaming reply
    const _startBotReply = async (
        userMessage: string,
    ) => {
        const botMessageId =
            `${Date.now()}-${Math.random()
                .toString(36)
                .substring(2, 9)}`;

        const botMessage: Message = {
            id: botMessageId,
            text: '',
            sender: 'bot',
            timestamp: Date.now(),
        };

        // Create empty bot message first
        addMessage(
            conversationId,
            botMessage,
        );

        try {
            let currentText = '';

            await streamChatResponse(
                [
                    ...messages,
                    {
                        id: `${Date.now()}-user`,
                        text: userMessage,
                        sender: 'user',
                        timestamp: Date.now(),
                    },
                ],
                (chunk: string) => {
                    currentText += chunk;

                    // Update the same bot message
                    updateMessage(
                        conversationId,
                        botMessageId,
                        currentText,
                    );

                    _scrollToBottom();
                },
            );
        } catch (error) {
            console.log(
                'Bot response error:',
                error,
            );

            updateMessage(
                conversationId,
                botMessageId,
                'Unable to generate a response.',
            );
        }
    };

    //Function to handle send message
    const _handleSendMessage = () => {
        const text = messageText.trim();

        if (!text) {
            return;
        }

        const newMessage: Message = {
            id:
                `${Date.now()}-${Math.random()
                    .toString(36)
                    .substring(2, 9)}`,
            text,
            sender: 'user',
            timestamp: Date.now(),
        };

        addMessage(
            conversationId,
            newMessage,
        );

        setMessageText('');

        _scrollToBottom();

        _startBotReply(text);
    };

    //Function to render the message
    const _renderMessage = ({
        item,
    }: {
        item: Message;
    }) => {
        const isUser = item.sender === 'user';
        return (
            <View
                style={[
                    Styles.paddingHorizontal14, Styles.paddingVertical10, Styles.borderRadius16, Styles.marginBottom12, { maxWidth: '80%' },
                    isUser
                        ? [Styles.alignSelfFlexEnd, Styles.backgroundColorCyanBlue]
                        : [Styles.alignSelfFlexStart, Styles.backgroundColorLightSilver]
                ]}>
                <Text
                    style={[Styles.fontSize16, Styles.lineHeight22, Styles.rubicMedium, Styles.colorBlack,
                    isUser
                        ? [Styles.colorDarkPrimary]
                        : [Styles.colorSeaGreen],
                    ]}>
                    {item.text}
                </Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={[Styles.flexGrowOne]}>
            <View style={[Styles.flexOne]}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    enabled={true}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 24}
                    style={[Styles.flexOne]}
                >

                    {/* Header */}
                    <View style={[Styles.height62, Styles.row, Styles.alignItemsCenter, Styles.paddingHorizontal16, Styles.borderBottomWidth1, Styles.borderColorBlackEel]}>

                        <Text
                            style={[ Styles.fontSize14, Styles.lineHeight17, Styles.colorBlack, Styles.rubikSemibold]}
                            numberOfLines={1}>
                            {conversationName}
                        </Text>

                        <View style={[Styles.Width43]} />
                    </View>

                    {/* Messages */}
                    <FlatList
                        ref={flatListRef}
                        data={messages}
                        keyExtractor={item => item.id}
                        renderItem={_renderMessage}
                        contentContainerStyle={[
                            Styles.padding16,
                            Styles.flexGrowOne,
                        ]}
                        keyboardShouldPersistTaps="handled"
                        ListEmptyComponent={
                            <View
                                style={[
                                    Styles.flexOne,
                                    Styles.alignItemsCenter,
                                    Styles.justifyCenter,
                                ]}>
                                <Text
                                    style={[
                                        Styles.fontSize14,
                                        Styles.lineHeight18,
                                        Styles.colorDimGray,
                                        Styles.rubikMedium,
                                    ]}>
                                    Start a conversation
                                </Text>
                            </View>
                        }
                    />


                    {/* Input */}
 <View
  style={[
    Styles.row,
    Styles.alignItemsFlexEnd,
    Styles.padding12,
    Styles.borderTopWidth1,
    Styles.borderColorDarkPrimary,
  ]}
>
  <View style={[Styles.flexOne]}>
    <CustomTextInput
      id="chat_message"
      label=""
      placeHolder="Type a message..."
      value={messageText}
      editable={true}
      multiline={true}
      returnKeyType="send"
      autoCapitalize="sentences"
      keyboardType="default"
      maxLength={1000}
      onChangeText={setMessageText}
      onSubmitEditing={_handleSendMessage}
    />
  </View>

  <TouchableOpacity
    style={[
      Styles.height43,
      Styles.paddingHorizontal16,
      Styles.marginLeft8,
      Styles.borderRadius22,
      Styles.backgroundColorBlack,
      Styles.alignItemsCenter,
      Styles.justifyCenter,
    ]}
    onPress={_handleSendMessage}
    activeOpacity={0.7}
  >
    <Text
      style={[
        Styles.fontSize14,
        Styles.lineHeight17,
        Styles.colorPureWhite,
        Styles.rubikSemibold,
      ]}
    >
      Send
    </Text>
  </TouchableOpacity>
</View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
};



export default Chat;