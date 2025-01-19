import Toast, { 
  ToastProps,
  InfoToast,
  InfoToastProps
} from 'react-native-toast-message';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle
} from 'react-native';
import React from 'react';

// Define props interface
interface ToastComponentProps {
  [key: string]: any;
}

// Define custom toast props interface extending InfoToastProps
interface CustomInfoToastProps extends InfoToastProps {
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  text1?: string;
}

const toastConfig = {
  info: (props: CustomInfoToastProps) => (
    <InfoToast
      {...props}
      style={[styles.container, props.style]}
      contentContainerStyle={[
        styles.contentContainer,
        props.contentContainerStyle
      ]}
    >
      <View>
        <Text style={styles.text}>{props.text1}</Text>
      </View>
    </InfoToast>
  ),
};

export const ToastComponent: React.FC<ToastComponentProps> = (props) => {
  return <Toast config={toastConfig} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'rgb(13, 148, 136)', // Teal-soft
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.04,
    shadowRadius: 14,
    elevation: 4,
    marginHorizontal: 16,
  },
  contentContainer: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  text: {
    color: '#0D9488', // Teal
    textAlign: 'center',
    fontFamily: 'DM-Sans',
    fontSize: 14,
  },
});

export default ToastComponent;