/*
 *   File : conversation-list.tsx
 *   Description : conversation list
 *   Integrations : null
 *   Version : v1.1
 */
import React, { useState } from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useChatStore } from '../../Helper/store';
import { Styles } from '../../Theme';
import type { RootStackParamList } from '../../Navigator/Router';
import type { Conversation } from '../../Helper/types';
import CreateConversationModal from '../Component/create-conversation-modal';

type NavigationProp =
    NativeStackNavigationProp<RootStackParamList>;

const ConversationList: React.FC = () => {
    const navigation = useNavigation<NavigationProp>();

    const [isAddConversationModalVisible, setIsAddConversationModalVisible,
    ] = useState(false);

    const conversations = useChatStore(
        state => state.conversations,
    );

    const addConversation = useChatStore(
        state => state.addConversation,
    );

    /*
     * Open an existing conversation
     */
    const _handleConversationPress = (
        item: Conversation,
    ) => {
        navigation.navigate('Chat', {
            conversationId: item.id,
            conversationName: item.name,
        });
    };

    /*
     * Open create conversation modal
     */
    const _handleAddConversation = () => {

        setIsAddConversationModalVisible(true);
    };

    /*
     * Create and immediately open conversation
     */

    const _handleConversationCreateModal = (
        conversationName: string,
    ): string | null => {
        const trimmedName = conversationName.trim();

        if (!trimmedName) {
            return 'Please enter the name';
        }

        const isDuplicate = conversations.some(
            item =>
                item.name.toLowerCase() ===
                trimmedName.toLowerCase(),
        );

        if (isDuplicate) {
            return 'Conversation already exists';
        }

        const conversationId =
            addConversation(trimmedName);

        setIsAddConversationModalVisible(false);

        navigation.navigate('Chat', {
            conversationId,
            conversationName: trimmedName,
        });

        return null;
    };


    /*
     * Render conversation
     */
    const _renderConversation = ({
        item,
    }: {
        item: Conversation;
    }) => {
        return (
            <TouchableOpacity style={[Styles.row, Styles.spaceBetween, Styles.padding8, Styles.borderRadius8, Styles.backgroundColorGainsboro, Styles.marginBottom10]}
                onPress={() =>
                    _handleConversationPress(item)
                }
                activeOpacity={0.7}>


                    <Text
                        style={[
                            Styles.fontSize16,
                            Styles.width288,
                            Styles.lineHeight22,
                            Styles.colorCynder,
                            Styles.rubikMedium,
                        ]}>
                        {item.name}
                    </Text>



                 <Text
                        style={[
                            Styles.fontSize16,
                            Styles.lineHeight22,
                            Styles.colorCynder,
                            Styles.rubikMedium,]}>
             ->
                    </Text>

            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView
            style={[
                Styles.flexGrowOne,
            ]}>

            <View
                style={[
                    Styles.flexOne,
                ]}>

                <KeyboardAvoidingView
                    behavior={
                        Platform.OS === 'ios'
                            ? 'padding'
                            : 'height'
                    }
                    enabled={true}
                    keyboardVerticalOffset={
                        Platform.OS === 'ios'
                            ? 0
                            : 24
                    }
                    style={[
                        Styles.flexOne,
                    ]}>

                    <View
                        style={[
                            Styles.flexOne,
                            Styles.paddingTop24,
                            Styles.paddingHorizontal16,
                        ]}>

                        {/* Header */}

                        <View
                            style={[
                                Styles.rowCenter,
                                Styles.spaceBetween,
                                Styles.paddingBottom16,
                            ]}>

                            <Text
                                style={[
                                    Styles.fontSize14,
                                    Styles.lineHeight16,
                                    Styles.rubicMedium,
                                    Styles.colorBlack,
                                ]}>
                                List of Conversations
                            </Text>

                            <TouchableOpacity
                                style={[
                                    Styles.backgroundColorCloudyGrey,
                                    Styles.paddingHorizontal4,
                                    Styles.paddingVertical4,
                                    Styles.borderRadius8,
                                ]}
                                onPress={
                                    _handleAddConversation
                                }
                                activeOpacity={0.7}>

                                <Text
                                    style={[
                                        Styles.fontSize12,
                                        Styles.lineHeight13,
                                        Styles.rubicMedium,
                                        Styles.colorPureWhite,
                                    ]}>
                                    + Add Conversation
                                </Text>

                            </TouchableOpacity>

                        </View>

                        {/* Conversation List */}
<View style={[Styles.marginBottom64]}>
                        <FlatList
                            data={conversations}
                            keyExtractor={item => item.id}
                            renderItem={
                                _renderConversation
                            }
                            showsVerticalScrollIndicator={
                                false
                            }
                            bounces={false}
                            overScrollMode="never"
                            ListEmptyComponent={
                                <View
                                    style={[
                                        Styles.center,
                                        Styles.marginTop136,
                                        Styles.paddingHorizontal31,
                                    ]}>

                                    <Text
                                        style={[
                                            Styles.fontSize16,
                                            Styles.lineHeight16,
                                            Styles.colorBlack,
                                            Styles.rubikSemibold,
                                        ]}>
                                        No conversations found.
                                    </Text>

                                    <Text
                                        style={[
                                            Styles.fontSize16,
                                            Styles.lineHeight16,
                                            Styles.colorBlack,
                                            Styles.rubikSemibold,
                                            Styles.paddingTop8,
                                        ]}>
                                        Create a conversation.
                                    </Text>

                                </View>
                            }
                        />
</View>
                    </View>

                </KeyboardAvoidingView>

            </View>

            {/* Create Conversation Modal */}
            <CreateConversationModal
                visible={isAddConversationModalVisible}
                onClose={() =>
                    setIsAddConversationModalVisible(false)
                }
                onCreate={_handleConversationCreateModal}
            />
        </SafeAreaView>
    );
};

export default ConversationList;