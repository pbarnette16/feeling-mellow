import Toast, {ToastProps, InfoToast} from 'react-native-toast-message';
import {
    View,
    Text,
    StyleSheet,
  } from 'react-native';

export { ToastProps };

const toastConfig = {
  info: ({ args }: ToastProps) => (
    <InfoToast
    {...props}
    style={{}}
contentContainerStyle={{}}>
    <View style={styles.container}>
      <Text style={styles.text}>{props.text1}</Text>
    </View>
    </InfoToast>
  ),
};

// Export the Toast component for use in App.tsx
const ToastProvider = ({args}):ToastProps => {
  return(
    <Toast config={toastConfig} {...args} />
  );
};


const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'rgba(13, 148, 136, 0.1)', // Teal-soft
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.04,
    shadowRadius: 14,
    elevation: 4,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginHorizontal: 16,
  },
  text: {
    color: '#0D9488', // Teal
    textAlign: 'center',
    fontFamily: 'DM-Sans',
    fontSize: 14,
  },
});

export default ToastProvider;



