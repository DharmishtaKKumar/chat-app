/*
 *   File : text-input.tsx
 *   Description : text input
 *   Integrations : null
 *   Version : v1.1
 */
import React from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import {COLORS, Styles} from '../../Theme';

type TextInputProps = {
  id: string;
  label?: string;
  placeHolder?: string;
  value: string;
  secureTextEntry?: boolean;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  autoCapitalize?: 'words' | 'characters' | 'none' | 'sentences';
  autoFocus?: boolean;
  keyboardType?: any;
  maxLength?: number;
  error?: string;
  editable?: boolean;
  multiline?: boolean;
  inputRef?: React.RefObject<TextInput>;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (text: string) => void;
  onSubmitEditing?: () => void;
};

const CustomTextInput = (props: TextInputProps) => {
  return (
    <View>
      {!!props.label && (
        <Text
          style={[
            Styles.rubikRegular,
            Styles.fontSize12,
            Styles.lineHeight16,
            Styles.colorDarkCharcoal,
            Styles.marginBottom4,
          ]}
        >
          {props.label}
        </Text>
      )}

      <View
        style={[
          props.multiline
            ? {
                minHeight: 48,
                maxHeight: 120,
              }
            : [
                Styles.height48,
                Styles.justifyCenter,
              ],
        ]}
      >
        <TextInput
          value={props.value || ''}
          style={[Styles.colorBlack, Styles.borderWidth1,Styles.borderColorBlackEel, Styles.borderRadius8]}
               ref={props.inputRef}
          placeholder={props.placeHolder}
          editable={props.editable}
          autoCorrect={false}
          spellCheck={false}
          allowFontScaling={false}
          returnKeyType={props.returnKeyType}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
          maxLength={props.maxLength}
          autoCapitalize={props.autoCapitalize}
          autoFocus={props.autoFocus}
          onChangeText={props.onChangeText}
          onSubmitEditing={props.onSubmitEditing}
          placeholderTextColor={COLORS.GREY_OPACITY_80}
          selectionColor={COLORS.LIGHT_GREY}
          cursorColor={COLORS.PRIMARY_COLOR}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          multiline={props.multiline}
          scrollEnabled={props.multiline}
          textAlignVertical={
            props.multiline ? 'top' : 'center'
          }
        />
      </View>

      {!!props.error && (
        <Text
          style={[
            Styles.rubikRegular,
            Styles.fontSize12,
            Styles.lineHeight16,
            Styles.colorLavaRed,
            Styles.marginTop2,
          ]}
        >
          {'* '}
          {props.error}
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;