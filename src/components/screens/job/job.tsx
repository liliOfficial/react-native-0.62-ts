import React from 'react';
import moment from 'moment';
import { StyleSheet, View, Image, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import mainStyle from '../../../assets/styles/globleStyle';

import { Job } from '../../../Interface/interface';
import { NavigationStackProp } from 'react-navigation-stack';

import JobReq from './jobReq';
import PageHeader from '../../common/pageHeader';

interface Props {
    name: string,
    route: { params: { job: Job } },
    navigation: NavigationStackProp
}

export default function JobCard(props: Props) {
    const { navigation, name } = props;
    const job = props.route.params.job;

    const Icon = (input: { source: any }) => {
        return (
            <View>
                <Image source={input.source} style={styles.icon} />
            </View>
        )
    };

    const ShiftDates = () => {
        return (
            <View style={styles.list}>
                <Icon source={require('../../../assets/images/date.png')}></Icon>
                <View>
                    <Text style={styles.listTitle}>Shift Dates</Text>
                    {
                        job.shifts.map((shift, index) => {
                            return (
                                <View key={index}>
                                    <Text >
                                        {moment(shift.startDate).format('lll')} - {moment(shift.endDate).format('lll')}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    };

    const Location = () => {
        return (
            <View style={styles.list}>
                <Icon source={require('../../../assets/images/location.png')}></Icon>
                <View>
                    <Text style={styles.listTitle}>Location</Text>
                    <Text>{job.company.address.formattedAddress}</Text>
                    <Text>{job.milesToTravel} miles from your job search location</Text>
                </View>
            </View>
        )
    };

    const Requirements = () => {
        return (
            <View>
                {job.requirements &&
                    <View style={styles.list}>
                        <Icon source={require('../../../assets/images/requirements.png')}></Icon>
                        <View>
                            <Text style={styles.listTitle}>Requirements</Text>
                            {job.requirements.map((requirement, index) => {
                                return (
                                    <View key={index}>
                                        <Text>- {requirement}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>}
            </View>
        )
    };

    const ReportTo = () => {
        return (
            <View style={styles.list}>
                <Icon source={require('../../../assets/images/user.png')}></Icon>
                <View>
                    <Text style={styles.listTitle}>Report To</Text>
                    <Text>{job.company.reportTo.name} {job.company.reportTo.phone}</Text>
                </View>
            </View>
        )
    }

    const DistanceAndRate = () => {
        return (
            <View style={styles.distanceAndRate}>
                <View>
                    <Text style={styles.distanceAndRateTitle}>Distance</Text>
                    <Text style={styles.distanceAndRateNo}>{job.milesToTravel} miles</Text>
                </View>
                <View>
                    <Text style={styles.distanceAndRateTitle}>Hourly Rate</Text>
                    <Text style={styles.distanceAndRateNo}>
                        $ {(job.wagePerHourInCents / 100).toFixed(2)}
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <ScrollView style={mainStyle.scrollView}>
                <PageHeader title='Job Detail' action={name + ' >'}
                    onPress={() => navigation.navigate('My Profile')} />

                <View style={mainStyle.cardContainer}>
                    <View style={mainStyle.shadow} />
                    <View style={mainStyle.cardBox}>
                        <Image style={styles.backgroundImage} source={{ uri: job.jobTitle.imageUrl }} />

                        <Text style={styles.jobTitle}>{job.jobTitle.name}</Text>
                        <Text style={styles.companyName}>{job.company.name}</Text>

                        <DistanceAndRate />

                        <ShiftDates />
                        <Location />
                        <Requirements />
                        <ReportTo />

                        <JobReq job={job} />

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: 140,
    },
    jobTitle: {
        fontSize: 22,
        fontWeight: '600',
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    companyName: {
        paddingHorizontal: 15,
        paddingBottom: 10,
    },
    distanceAndRate: {
        backgroundColor: '#2fd5ab',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    distanceAndRateTitle: {
        fontWeight: '700'
    },
    distanceAndRateNo: {
        fontWeight: '600',
        fontSize: 24,
        color: '#fff'
    },
    list: {
        flexDirection: 'row',
        padding: 15,
    },
    borderBottom: {
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    listTitle: {
        fontWeight: '700',
        marginBottom: 5
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 15
    }
})