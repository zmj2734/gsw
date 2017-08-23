/**
 * Created by zmj on 2017/3/7.
 */
import {
    StyleSheet,
    Dimensions
} from 'react-native';

export default StyleSheet.create({
    webView: {
        flex: 1,
    },
    loadingView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%",
    },
    fullWidth: {
        width: "100%",
        height: 2,
    }
});