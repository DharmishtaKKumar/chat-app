/*
 *   File : login.tsx
 *   Description : Login
 *   Integrations : null
 *   Version : v1.1
 */

import React, { useState, useRef, useEffect } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TextInput,
} from 'react-native';
import { Styles } from "../../Theme";
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from "../Component/text-input";
import { useNavigation } from '@react-navigation/native';
import { useChatStore } from "../../Helper/store";
import PrimaryButton from "../Component/primary-button";
import type { RootStackParamList } from '../../Navigator/Router';
import type {
    NativeStackNavigationProp,
} from '@react-navigation/native-stack';


const Login: React.FC = () => {
    // useRef variables
    const userNameRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    const [apiLoading, setApiLoading] = useState(false);
    const [userName, setUserName] = useState<string>('');
    const [userNameError, setUserNameError] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [focusId, setFocusId] = useState<string>('');

    useEffect(() => {
        setUserNameError('');
    }, [userName]);

    useEffect(() => {
        setPasswordError('');
    }, [password]);

    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    // Function - handle blur
    const _onBlurAnimation = () => {
        setFocusId('');
    };

    // Function - focus
    const _onFocusAnimation = (val: string) => {
        setFocusId(val);
    };

    //Function to handle the primary button
    const _handlePrimaryButton = () => {
        setApiLoading(true);
        const is_valid = _validateInputs();

        if (is_valid == true) {
            login(userName);
            navigation.replace('ConversationList');
        } else {
            setApiLoading(false);
        }
    }

    //function to validate the inputs
    const _validateInputs = () => {
        if (userName.length == 0) {
            setUserNameError('User name is required');
            userNameRef.current?.focus();
            return false;
        } else if (password.length == 0) {
            setPasswordError('Please enter the password');
            passwordRef.current?.focus();
            return false;
        }
        else if (password.length < 10) {
            setPasswordError('Minimum password length should be 10');
            passwordRef.current?.focus();
            return false;
        }
        return true;
    };

    const login = useChatStore(state => state.login);

    return (
        <SafeAreaView style={[Styles.flexGrowOne]}>
            <View style={[Styles.flexOne]}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    enabled={true}
                    keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 24}
                    style={[Styles.flexOne]}
                >
                    <View style={[Styles.flexOne, Styles.paddingTop20, Styles.paddingHorizontal16]}>

                        <ScrollView
                            style={[Styles.flexOne]}
                            contentContainerStyle={[Styles.paddingBottom24]}
                            keyboardShouldPersistTaps={'always'}
                            bounces={false}
                            showsVerticalScrollIndicator={false}
                            overScrollMode={'never'}
                        >

                            <View style={[Styles.justifyCenter]}>
                                <View style={[Styles.alignSelfCenter, Styles.padding16]}>
                                    <Text style={[Styles.fontSize16, Styles.RubicBold, Styles.lineHeight18, Styles.colorBlack,]}>
                                        Login
                                    </Text>
                                </View>

                                <View style={[Styles.alignSelfCenter, Styles.paddingTop24]}>
                                    <Text style={[Styles.fontSize20, Styles.RubicBold, Styles.lineHeight30, Styles.colorBlack,]}>
                                        Here we start!
                                    </Text>
                                </View>

                                <View style={[Styles.marginTop80]}>
                                    <CustomTextInput
                                        id="user_name"
                                        prefix={null}
                                        suffix={null}
                                        label={'User Name'}
                                        value={userName}
                                        inputRef={userNameRef}
                                        error={userNameError}
                                        placeHolder="Enter your name"
                                        editable={true}
                                        focusId={focusId}
                                        secureTextEntry={false}
                                        returnKeyType="next"
                                        keyboardType="default"
                                        autoCapitalize="words"
                                        autoFocus={false}
                                        maxLength={20}
                                        onChangeText={(val) => setUserName(val)}
                                        onBlur={() => _onBlurAnimation()}
                                        onFocus={() => _onFocusAnimation('firstName')}
                                        autoCompleteType="none"
                                        onSubmitEditing={() => password.current?.focus()}
                                    />

                                    <View style={[Styles.paddingTop8]}>
                                        <CustomTextInput
                                            id="pass_word"
                                            prefix={null}
                                            suffix={null}
                                            label={'Password'}
                                            value={password}
                                            inputRef={passwordRef}
                                            error={passwordError}
                                            placeHolder="Enter password"
                                            editable={true}
                                            focusId={focusId}
                                            secureTextEntry={false}
                                            returnKeyType="done"
                                            keyboardType="default"
                                            autoCapitalize="words"
                                            autoFocus={false}
                                            maxLength={20}
                                            onChangeText={(val) => setPassword(val)}
                                            onBlur={() => _onBlurAnimation()}
                                            onFocus={() => _onFocusAnimation('')}
                                            autoCompleteType="none"
                                            onSubmitEditing={() => passwordRef.current?.focus()
                                            }
                                        />
                                    </View>
                                </View>


                            </View>
                        </ScrollView>
                        <View style={[Styles.marginTop16, Styles.paddingBottom16]}>
                            <PrimaryButton
                                loading={apiLoading}
                                type={2}
                                disabled={false}
                                onPress={() => _handlePrimaryButton()}
                                label={'Verify'}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

export default Login;