/*
 *   File : create-conversation-modal.tsx
 *   Description : conversation modal
 *   Integrations : null
 *   Version : v1.1
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  Platform,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CONSTANTS, Styles } from '../../Theme';
import CustomTextInput from './text-input';
import PrimaryButton from './primary-button';

interface AddConversationModalProps {
  visible: boolean;
  onClose: () => void;
  onCreate: (
    conversationName: string,
  ) => string | null;
}


const CreateConversationModal: React.FC<AddConversationModalProps> = (props: AddConversationModalProps) => {

  // useRef variables
  const createdNameRef = useRef<TextInput>(null);

  const [conversationName, setConversationName] = useState('');
  const [conversationNameError, setConversationNameError] = useState('');
  const [focusId, setFocusId] = useState<string>('');

  useEffect(() => {
    if (props.visible) {
      setConversationName('');
      setConversationNameError('');
      setFocusId('');
    }
  }, [props.visible]);

  useEffect(() => {
    setConversationNameError('');
  }, [conversationName])

  // Function - handle blur
  const _onBlurAnimation = () => {
    setFocusId('');
  };

  // Function - focus
  const _onFocusAnimation = (val: string) => {
    setFocusId(val);
  };

  //Function to handle the close
  const _handleClose = () => {
    setConversationName('');
    setConversationNameError('');
    props.onClose();
  };

  // Function to handling button
  const _handlePrimaryButton = () => {
    const isValid =
      _validateName();

    if (!isValid) {
      return;
    }

    const name =
      conversationName.trim();
    props.onCreate(name);
  };

  // Function to handle the validating name
  const _validateName = () => {
    if (!conversationName.trim()) {
      setConversationNameError('Please enter the name');
      return false;
    }

    return true;
  };

  return (
    <Modal
      statusBarTranslucent
      animationType="slide"
      transparent
      visible={props.visible}
      onRequestClose={_handleClose}
    >
      <SafeAreaView style={[Styles.flexOne, Styles.justifyFlexEnd]} edges={['bottom']}>
        <View style={[Styles.positionAbsolute]}>

        </View>
        <KeyboardAvoidingView
          style={[
            Styles.positionAbsolute,
            Styles.fullWidth,
            Styles.fullHeight,
          ]}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View
            style={[
              Styles.flexOne,
              Styles.alignItemsCenter,
              Styles.justifyFlexEnd,
            ]}
          >
            <View
              style={[
                Styles.borderWidth2,
                Styles.borderColorWhite,
                Styles.fullWidth,
                Styles.borderTopLeftRadius32,
                Styles.borderTopRightRadius32,
                Styles.backgroundColorPureWhite,
              ]}
            >
              <View style={[Styles.padding16]}>
                <View
                  style={[
                    Styles.alignSelfCenter,
                    Styles.height1,
                    Styles.backgroundColorPureWhite,
                    Styles.Width72,
                    Styles.marginBottom16,
                  ]}
                />
                <View style={[Styles.row, Styles.spaceBetween, Styles.paddingBottom8]}>
                  <Text
                    style={[
                      Styles.fontSize14,
                      Styles.lineHeight20,
                      Styles.rubikMedium,
                      Styles.colorCynder,
                      Styles.flexOne,
                    ]}
                  >
                    Add a conversation
                  </Text>


                  <TouchableOpacity
                    activeOpacity={CONSTANTS.activeOpacity} style={[Styles.height20, Styles.width20, Styles.backgroundColorDarkGrey, Styles.borderRadius22]}
                    onPress={_handleClose}>
                    <Text
                      style={[
                        Styles.fontSize18,
                        Styles.colorPureWhite,
                        Styles.alignSelfCenter,
                        Styles.marginTopMinus4
                      ]}
                    >
                      x
                    </Text>

                  </TouchableOpacity>

                </View>
                <CustomTextInput
                  id="conversation_name"
                  label="Name the conversation"
                  value={conversationName}
                  inputRef={createdNameRef}
                  error={conversationNameError}
                  placeHolder="Please enter conversation name"
                  editable={true}
                  secureTextEntry={false}
                  returnKeyType="done"
                  keyboardType="default"
                  autoCapitalize="words"
                  autoFocus={false}
                  maxLength={20}
                  onChangeText={setConversationName}
                  onBlur={_onBlurAnimation}
                  onFocus={() =>
                    _onFocusAnimation('conversationName')
                  }
                  onSubmitEditing={() =>
                    createdNameRef.current?.blur()
                  }
                />

              </View>
              <View style={[Styles.marginBottom12, Styles.paddingHorizontal16, Styles.marginTop32]}>
                <PrimaryButton
                  disabled={false}
                  loading={false}
                  is_both={false}
                  onPress={() => _handlePrimaryButton()}
                  label={'Create'}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
};

export default CreateConversationModal;
