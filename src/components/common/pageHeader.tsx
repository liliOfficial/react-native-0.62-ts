import React from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

interface Input {
    title: string;
    subTitle?: string;
    action?: string;
    onPress?: any;
}
const PageHeader = (input: Input) => {
    return (
        <View style={styles.pageHeader}>
            <View>
                <Text style={styles.pageHeaderTitle}>{input.title}</Text>
                {input.subTitle &&
                    <Text style={styles.pageHeaderSubtitle}>{input.subTitle}</Text>
                }
            </View>
            <TouchableHighlight onPress={input.onPress}
                style={styles.pageHeaderAction} underlayColor="#eee">
                <Text style={styles.actionText}>{input.action}</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    pageHeader: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    pageHeaderTitle: {
        fontSize: 22,
        fontWeight: '600',
    },
    pageHeaderSubtitle: {
        color: "#888",
        fontWeight: '600',
    },
    pageHeaderAction: {
        alignSelf: 'center'
    },
    actionText: {
        fontSize: 15
    }
})

export default PageHeader;