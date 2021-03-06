import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen0193299Navigator from '../features/BlankScreen0193299/navigator';
//import PrivacyPolicyScreen1181974Navigator from '../features/PrivacyPolicyScreen1181974/navigator';


/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen0193299: { screen: BlankScreen0193299Navigator },
//PrivacyPolicyScreen1181974: { screen: PrivacyPolicyScreen1181974Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
//    initialRouteName: "BlankScreen1181975",
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
