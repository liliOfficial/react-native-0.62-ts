import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import axios from 'axios';
import { ApiEndPoint, WorkerId } from '../../../assets/data/workerId';

import { Job } from '../../../Interface/interface';
import { BlackButton, OutlineButton } from '../../common/buttons';

export default function JobReq(props: { job: Job }) {
    const { job } = props;
    const httpEndpoint: string = `${ApiEndPoint}${WorkerId}/job/${job.jobId}`;

    const [padlock, setPadlock] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('');

    const acceptJob = async () => {
        setPadlock(true);
        setStatus('');
        let accept = await axios(`${httpEndpoint}/accept`);
        console.log(accept);
        if (accept.status === 200) return setStatus('accept');
        setPadlock(false);
        setStatus('error');
    };

    const rejectJob = async () => {
        setPadlock(true);
        setStatus('');
        let reject = await axios(`${httpEndpoint}/reject`);
        if (reject.status === 200) return setStatus('reject');
        setPadlock(false);
        setStatus('error');
    };

    return (
        <View>
            <View style={styles.buttonGroup}>
                <View style={styles.buttonBox}>
                    <OutlineButton text="No Thanks" onPress={rejectJob} />
                </View>
                <View style={styles.buttonBox}>
                    <BlackButton text="I'll Take it" onPress={acceptJob} />
                </View>
                {padlock &&
                    <View style={styles.padlock}>
                        {status === '' &&
                            <ActivityIndicator size="large" color="#2fd5ab" style={styles.activityIndicator} />
                        }
                        {status === 'accept' &&
                            <Text style={[styles.messageText, { color: '#2fd5ab' }]}>You have successfully accepted this job.</Text>
                        }
                        {status === 'reject' &&
                            <Text style={styles.messageText}>You have rejected this job.</Text>
                        }
                    </View>
                }

            </View>
            {status === 'error' &&
                <View style={styles.messageBox}>
                    <Text style={[styles.messageText, { fontSize: 12 }]}>Request failed. Please try again.</Text>
                </View>
            }
        </View>

    )
}

const styles = StyleSheet.create({
    buttonGroup: {
        flexDirection: 'row',
        margin: 12,
        height: 56,
        position: 'relative'
    },
    padlock: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,255,255,1)'
    },
    activityIndicator: {
        flex: 1,
        alignSelf: 'center'
    },
    messageBox: {
        marginTop: -15,
        marginBottom: 25
    },
    messageText: {
        flex: 1,
        alignSelf: 'center',
        paddingTop: 8,
        fontSize: 18,
    },
    buttonBox: {
        flex: 1,
        padding: 3
    }
})