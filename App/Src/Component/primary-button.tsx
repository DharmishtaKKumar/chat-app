/*
 *   File : primary-button.tsx
 *   Description : Primary button
 *   Integrations : null
 *   Version : v1.1
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from 'react-native';

// manual import
import { Styles, CONSTANTS, COLORS } from '../../Theme';

// Define the type for the data object
type PrimaryButtonProps = {
  type?: number;
  is_both?: boolean;
  disabled?: boolean;
  loading?: boolean;
  sec_loading?: boolean;
  primary_loading?: boolean;
  label?: string;
  btnStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  secondary_backgroundColor?: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = (props: PrimaryButtonProps) => {
  // constant variable
  const {
    disabled,
    loading,
    label,
    type,
    onPress,
  } = props;

  return (

    <View
      style={[
        props.disabled == true
          ? Styles.backgroundColorWildBlueYonder
          : Styles.backgroundColorsDarkPrimary,
        Styles.height48,
        Styles.borderRadius24,
      ]}
    >
      <TouchableOpacity
        activeOpacity={CONSTANTS.activeOpacity}
        disabled={disabled || loading}
        onPress={() => onPress()}
        style={[Styles.center, Styles.height48, Styles.paddingVertical12]}
      >
        {loading ? (
          <View style={[Styles.height16]}>
            <ActivityIndicator color={COLORS.PURE_WHITE} size={'small'} />
          </View>
        ) : (
          // label for the button
          <Text
            style={[
              type == 2 ? Styles.rubicRegualr : Styles.rubikSemibold,
              type == 2 ? Styles.fontSize16 : Styles.fontSize14,
              Styles.colorPureWhite,
              Styles.textAlignCenter,
            ]}
          >
            {label}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
