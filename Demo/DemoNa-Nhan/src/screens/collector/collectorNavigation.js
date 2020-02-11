import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

class HomeScreenNavi extends React.Component {

    render() {
        const loopList = [];
        for (let i = 0; i < 20; i++) {
            loopList.push(
                <List>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{ uri: 'Image URL' }} />
                        </Left>
                        <Body>
                            <Text>Sankhadeep</Text>
                            <Text note numberOfLines={2}>Its time to build a difference . .</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>View</Text>
                            </Button>
                        </Right>
                    </ListItem>
                </List>
            );
        }
        return (
            <Container>
                <Content>
                    {loopList}
                </Content>
            </Container>
        );
    }
}

class MapScreenNavi extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Map Screen Navi</Text>
            </View>
        );
    }
}

class ChatScreenNavi extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Chat Screen Navi</Text>
            </View>
        );
    }
}

class ProfileScreenNavi extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Screen Navi</Text>
            </View>
        );
    }
}

const TabNavigator = createMaterialBottomTabNavigator(
    {
        HomeNavi: {
            screen: HomeScreenNavi,

            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name="home" />
                    </View>
                ),
            }
        },
        MapNavi: {
            screen: MapScreenNavi,
            navigationOptions: {
                tabBarLabel: "Map",
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name="home" />
                    </View>
                ),
            }
        },
        ChatNavi: {
            screen: ChatScreenNavi,
            navigationOptions: {
                tabBarLabel: "Chat",
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name="home" />
                    </View>
                ),
            }
        },
        ProfileNavi: {
            screen: ProfileScreenNavi,
            navigationOptions: {
                tabBarLabel: "Profile",
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name="home" />
                    </View>
                ),
            }
        },
    },
    {
        initialRouteName: 'HomeNavi',

    }
);

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});