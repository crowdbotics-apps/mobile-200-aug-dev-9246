import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen310149Navigator from '../features/BlankScreen310149/navigator';
import BlankScreen210147Navigator from '../features/BlankScreen210147/navigator';
import BlankScreen110146Navigator from '../features/BlankScreen110146/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen310149: { screen: BlankScreen310149Navigator },
BlankScreen210147: { screen: BlankScreen210147Navigator },
BlankScreen110146: { screen: BlankScreen110146Navigator },

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
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
