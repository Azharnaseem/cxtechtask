import { StyleSheet } from 'react-native';
import { height, width } from '~utills/Dimension';
import AppColors from '../../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoStyle:{
     width:width(30),
     height:width(30),
     backgroundColor:"gray"
  },
  title: {
    color: AppColors.black,
    fontWeight: 'bold',
    fontSize: width(4),
    marginBottom: height(2)
  }
});
export default styles;
