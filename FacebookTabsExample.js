'use strict';

var React = require('react-native');
var VectorWidget = require('./VectorWidget');

var {
    StyleSheet,
    Text,
    View,
    ScrollView,
} = React;

var tabInfos = [
    {
        tabIcon: 'ion|ios-paper',
        tabName: '当前数据',
    },
    {
        tabIcon: 'ion|calendar',
        tabName: '历史数据',
    },
    {
        tabIcon: 'ion|connection-bars',
        tabName: '图表生成',
    },
];

var ScrollableTabView = require('react-native-scrollable-tab-view');
var FacebookTabBar = require('./FacebookTabBar');

var FacebookTabsExample = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView initialPage={1} renderTabBar={() => <FacebookTabBar />}>
                    <ScrollView tabLabel={tabInfos[0]} style={styles.tabView}>
                            <Text>Friends</Text>
                    </ScrollView>
                    <View tabLabel={tabInfos[1]} style={styles.tabView}>
                        <VectorWidget style={styles.card}/>
                    </View>
                    <ScrollView tabLabel={tabInfos[2]} style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>Messenger</Text>
                        </View>
                    </ScrollView>
                </ScrollableTabView>
            </View>
        );
    }
});

var SimpleExample = React.createClass({
    render() {
        return (
            <ScrollableTabView style={{marginTop: 20}}>
            <Text tabLabel='Tab #1'>My</Text>
            <Text tabLabel='Tab #2'>favorite</Text>
            <Text tabLabel='Tab #3'>project</Text>
            </ScrollableTabView>
        )
    }
});

// module.exports = SimpleExample;
module.exports = FacebookTabsExample;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});
