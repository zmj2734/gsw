/**
 * Created by zmj on 2017/5/3.
 */
import {
    StyleSheet
} from 'react-native';

export default StyleSheet.create({
    view: {
        flex: 1
    },
    itemRowLine: {
        height: 0.5,
        width: "100%",
        backgroundColor: "black"
    },
    itemColumnLine: {
        width: 1
    },
    indicator: {
        bottom: 5,
        zIndex: 999,
        justifyContent: "center",
        backgroundColor: "transparent",
        alignItems: "center",
        position: "absolute",
        width: "100%",
    },
    emptyView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})