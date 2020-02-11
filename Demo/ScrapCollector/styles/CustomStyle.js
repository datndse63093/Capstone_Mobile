import {StyleSheet} from 'react-native';
import COLORS from './CustomColor';

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
