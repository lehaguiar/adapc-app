import React from 'react';
import { Scene, Router, Tabs, Lightbox, Drawer } from 'react-native-router-flux'; 
import { Icon, Text } from 'native-base';
import { View } from 'react-native';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import PlaceDetails from './components/PlaceDetails';
import MapSearch from './components/Map';
import BadgeScreen from './components/BadgesScreen';
import DrawerMenu from './components/DrawerMenu';

const TabIcon = ({title}) => {
    // let color = selected ? '#807DFF' : 'black';
    let label = '';
    let iconName = '';


    if(title == 'Proximidades'){
        iconName = 'ios-navigate-outline';
        label = 'Proximidades';
    }
    else if(title == 'Mapa'){
        iconName = 'search';
        label = 'Mapa';
    }
    else if( title == 'Medalhas'){
        iconName = 'ribbon'
        label = 'Medalhas';
    }

    return(
        <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Icon name={iconName} style={{fontSize: 24}}/>
            <Text style={{fontSize: 12}}>{label}</Text> 
        </View>
    );
}

const MenuIcon = () => {
    return(
        <Icon name='ios-menu' style={{color: 'white'}}></Icon>
    );
}

const RouterComponent = () => {
    return(
        <Router>
            <Scene 
                key="root" 
                navBarButtonColor='white'
                navigationBarStyle={{backgroundColor: '#807DFF'}}>
                <Scene
                    key='login'
                    component={LoginScreen}
                    title='Login'
                    hideNavBar={true} 
                />
                <Lightbox key="lightbox" initial >
                    <Drawer
                        key="drawer"
                        contentComponent={DrawerMenu}
                        drawerIcon={MenuIcon}
                        hideNavBar
                    >
                        <Scene key="main" >
                            <Tabs
                                key="tabbar"
                                tabBarPosition='bottom' 
                                default="homeScreen"
                                showLabel={false}
                                activeBackgroundColor="#DDD"
                            >  
                                <Scene
                                    key="homeScreen"
                                    component={HomeScreen}
                                    title="Proximidades"
                                    icon={TabIcon}
                                />
                                <Scene
                                    key="mapSearch"
                                    component={MapSearch}
                                    title="Mapa"
                                    icon={TabIcon}
                                />
                                <Scene
                                    key="badgeScreen"
                                    component={BadgeScreen}
                                    title="Medalhas"
                                    icon={TabIcon}
                                />
                            </Tabs>
                        </Scene>
                    </Drawer>
                    <Scene
                        key='details'
                        component={PlaceDetails}
                        title='Detalhes'
                    />
                </Lightbox>
            </Scene>
        </Router>
    );
}

export default RouterComponent;
