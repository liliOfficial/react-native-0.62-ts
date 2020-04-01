import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const mainStyles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
        padding: 10,
    },
    cardContainer: {
        position: 'relative',
        width: '100%',
        marginBottom: 30,
    },
    cardBox: {
        borderRadius: 3,
        overflow: 'hidden',
    },
    shadow: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: 0,
        left: 0,
        width: '100%',
        bottom: 0,
        shadowColor: '#D8D8D8',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        borderRadius: 5
    },
});

export default mainStyles;