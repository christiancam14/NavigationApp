import {useNavigation, DrawerActions} from '@react-navigation/native';
import {useEffect} from 'react';
import {Pressable} from 'react-native';
import {IonIcon} from './IonIcon';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{
            marginLeft: 16,
          }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name="menu-outline" size={20} />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
