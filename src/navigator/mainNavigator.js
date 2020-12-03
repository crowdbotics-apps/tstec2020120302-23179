import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import PrivacyPolicyScreen1181974Navigator from '../features/PrivacyPolicyScreen1181974/navigator';
import BlankScreen1181975Navigator from '../features/BlankScreen1181975/navigator';


/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
PrivacyPolicyScreen1181974: { screen: PrivacyPolicyScreen1181974Navigator },
BlankScreen1181975: { screen: BlankScreen1181975Navigator },

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
    initialRouteName: "BlankScreen1181975",
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
