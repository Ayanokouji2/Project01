import React from 'react';

import {
    Text,
    View,
    StyleSheet,
    useColorScheme,
    SafeAreaView,
    ScrollView,
    Image,
} from 'react-native';

import tw from 'twrnc';

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={{margin: 5}}>
            <ScrollView>
                <View>
                    <Text>Flat Cards</Text>
                    <View style={styles.flatCardContainer}>
                        <View style={[styles.flatCardsItems, styles.flatCard1]}>
                            <Text>Red</Text>
                        </View>
                        <View style={[styles.flatCardsItems, styles.flatCard2]}>
                            <Text>Yellow</Text>
                        </View>
                        <View style={[styles.flatCardsItems, styles.flatCard3]}>
                            <Text>Blue</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text>Elevated Cards</Text>
                    <ScrollView horizontal={true}>
                        <View style={styles.elevatedCards}></View>
                        <View style={styles.elevatedCards}></View>
                        <View style={styles.elevatedCards}></View>
                        <View style={styles.elevatedCards}></View>
                        <View style={styles.elevatedCards}></View>
                        <View style={styles.elevatedCards}></View>
                        <View style={styles.elevatedCards}></View>
                        <View style={styles.elevatedCards}></View>
                    </ScrollView>
                </View>

                <View>
                    <Text style={tw`mt-5 font-medium text-base`}>
                        Trending Places
                    </Text>
                    <Image
                        style={tw`h-90 w-100`}
                        source={require('./assets/app_icon.png')}></Image>
                    <Text style={tw`text-lg font-medium pl-5`}>
                        {' '}
                        Flipkart Shopping{' '}
                    </Text>
                    <Text style={tw`text-base font-normal pl-5`}>
                        {' '}
                        Flipkart Shopping is an e-commerce website that deals
                        with Billions of user's EveryDay..!{' '}
                    </Text>
                </View>
            </ScrollView>
            <Text style={tw`text-center`}>Made By :- Khushi Sharma</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    flatCardContainer: {
        height: 120,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        gap: 5,
        paddingHorizontal: 8,
        marginVertical: 4,
    },
    flatCardsItems: {
        height: 100,
        width: 90,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatCard1: {
        backgroundColor: 'red',
        color: 'black',
    },
    flatCard2: {
        backgroundColor: 'yellow',
        color: 'black',
    },
    flatCard3: {
        backgroundColor: 'blue',
        color: 'black',
    },
    elevatedCards: {
        height: 100,
        width: 100,
        backgroundColor: 'gray',
        marginLeft: 8,
    },
});

export default AppPro;
