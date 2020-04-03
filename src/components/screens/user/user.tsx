import React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';

import mainStyle from '../../../assets/styles/globleStyle';
import PageHeader from '../../common/pageHeader';

import { User } from '../../../Interface/interface';

interface Props {
    user: User,
    navigation: NavigationStackProp
}

interface ListItem {
    title: string,
    content: string,
}

const UserListItem = (input: ListItem) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listTitle}>{input.title}</Text>
            <Text style={styles.listContent}>{input.content}</Text>
        </View>
    )
}

const UserPage = (props: Props) => {

    const { user, navigation } = props;

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <ScrollView style={mainStyle.scrollView}>
                <PageHeader title='My Profile' action={'Matches >'}
                    onPress={() => navigation.navigate('Matches')} />

                <View style={mainStyle.cardContainer}>
                    <View style={mainStyle.shadow} />
                    <View style={mainStyle.cardBox}>
                        <View style={styles.infoList}>
                            <View style={styles.userName}>
                                <Text style={styles.userNameText}>
                                    {user.firstName} {user.lastName}
                                </Text>
                            </View>

                            <UserListItem title='Email' content={user.email} />
                            <UserListItem title='Address' content={user.address.formattedAddress} />
                            <UserListItem title='Phone Number' content={user.phoneNumber} />
                            <UserListItem title='Max Job Distance' content={user.maxJobDistance + ' miles'} />
                        </View>
                    </View>
                </View >
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    infoList: {
        marginHorizontal: 12,
        marginTop: 25,
        marginBottom: 15,
        padding: 15,
        borderColor: '#2fd5ab',
        borderWidth: 2,
        borderRadius: 5,
        position: 'relative'
    },
    userName: {
        position: 'absolute',
        top: -18,
        left: 12,
    },
    userNameText: {
        fontWeight: '600',
        padding: 3,
        fontSize: 22,
        backgroundColor: '#fff'
    },
    listItem: {
        paddingTop: 10
    },
    listTitle: {
        fontWeight: '700'
    },
    listContent: {
        fontSize: 16
    }
});

export default UserPage;