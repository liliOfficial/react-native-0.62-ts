import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight, SafeAreaView } from 'react-native';
import mainStyle from '../../../assets/styles/globleStyle';
import PageHeader from '../../common/pageHeader';

import { Job } from '../../../Interface/interface';
import { NavigationStackProp } from 'react-navigation-stack';

interface Props {
    name: string,
    matches: Job[],
    navigation: NavigationStackProp
}

const MatchesPage = (props: Props) => {
    const { name, matches, navigation } = props;
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <ScrollView style={mainStyle.scrollView}>
                <PageHeader title='Matches' action={name + ' >'} subTitle='Click to find more detail'
                    onPress={() => navigation.navigate('My Profile')} />

                {matches.map((match, index) => {
                    return (
                        <TouchableHighlight key={index} underlayColor="#eee"
                            onPress={() => navigation.navigate('Job', { job: match })}>
                            <View style={[mainStyle.cardContainer, styles.cardContainer]}>
                                <View style={mainStyle.shadow} />
                                <View style={styles.border} />
                                <View style={mainStyle.cardBox}>

                                    <Text style={styles.jobTitle}>{match.jobTitle.name}</Text>
                                    <Text style={styles.companyName}>{match.company.name}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 8,
    },
    border: {
        position:'absolute',
        top: 0,
        left: 0,
        backgroundColor:'#2fd5ab',
        width:3,
        height:'99%',
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: '600',
        paddingHorizontal: 15,
        paddingTop: 12,
        paddingBottom:5
    },
    companyName: {
        paddingHorizontal: 15,
        paddingBottom: 15,
        color: "#888",
    },
})

export default MatchesPage;