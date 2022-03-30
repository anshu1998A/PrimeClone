import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');
export default StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#232F3E',
    },
    PMImage: {
        height: 30,
        fontWeight: '700',
        fontSize: 15,
        marginTop:20,
        marginTop:30,
        marginBottom: 20,
        color: 'white',
        alignSelf: "center",
    },
    searchViewstyle: {
        height: 40,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    searchStyle: {
        height: 25,
        width: 25,
        marginStart: 15,
        borderRadius: 30,
        margin: 10
    },
    searchTextStyle: {
        margin: 3,
        backgroundColor: "#d3d3d3",
        flex: 1,
        justifyContent: 'center',
        paddingRight: 30,
        marginRight: 30,
        paddingLeft: 10,
        borderRadius: 30,
    },
    addDiv: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    addStyles: {
        flex: 1,
        flexDirection: 'row',
        height: 150,
        width: 400,
        marginLeft: 2,
        backgroundColor: '#232F3E',
        marginRight: 2,
        marginBottom: 11
    },
    NavStyle: {
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
        fontWeight: '500',
        fontSize: 14,
    },
    textStyle: {
        marginLeft: 20,
        color: 'white',
        fontWeight: '700',
        fontSize: 17,
        marginBottom: 5,
    },
    WatchStyle: {
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        height: 90,
        width: 180,
        justifyContent: 'space-evenly',
    },
    watchBar: {
        height: 5,
        backgroundColor: '#00CED1',
        width: 170 / 1.5,
    },
    WatchStyleMargin: {
        flex: 1,
        height: 150,
        width: 400,
    },
    MenuContainerStyle: {
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    MenuText: {
        color: 'white',
        alignItems: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        textAlign: 'center'
    },
    menuStyle: {
        height: 20,
        width: 20,
        marginStart: 20,
        marginEnd: 20,
        marginTop: 10,
    },
    // CSS for the arrows shown with text
    ArrowStyle: {
        height: 15,
        marginTop: 16,
        resizeMode: 'contain',
    },
    logoStyle: {
        marginTop: -50,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    viewStyle: {
        height: 105,
        width: 180,
        marginRight: 9,
        paddingHorizontal: 20
    },
    languageViewStyle: {
        height: 105,
        width: 170,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    LanguageStyle: {
        borderRadius: 7,
        height: 200,
        marginBottom: 20,
        width: 160,
        padding: 10,
        justifyContent: 'space-evenly',
    },
    gridViewStyle: {
        height: 150,
        width: 170,
        margin: 5,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    gridImageStyle: {
        borderRadius: 7,
        height: 150,
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 20,
        width: 160,
        justifyContent: 'space-evenly',
    },
    DownloadView: {
        backgroundColor: '#232F3E',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop:30
    },
    channelAdd: {
        backgroundColor: '#232F3E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    episode: {
        marginTop: 10,
        marginLeft: 20,
    },
    channelText: {
        marginLeft: 15,
        color: 'white',
        fontWeight: '900',
        fontSize: 17,
        marginBottom: 5,
    },
    downloadStyle: {
        marginTop: 10,
        color: 'white',
        fontWeight: '900',
        fontSize: 18,
    },
    subTextStyle: {
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        color: 'white',
        fontWeight: '900',
        fontSize: 20,
    },
    downloadImage: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#232F3E',
        height: '100%'
    },


    MyStuffBackground: {
        // flex: 1,
        backgroundColor: '#232F3E'
    },
    downloadImageStyle: {
        flex: 1,
        flexDirection: 'row',
        height: 150,
        width: 200,
        marginLeft: 2,
        backgroundColor: '#232F3E',
        marginRight: 2,
        backgroundColor: '#2d3947',
        marginBottom: 11
    },
    downloadViewStyle: {
        width: '100%',

    },
    profileView:
    {
        // marginTop:1,
        flexDirection: 'row',
        // backgroundColor: '#232F3E'
    },
    profileImageStyle: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20
    },
    profileName: {
        marginTop: 45,
        color: 'white',
        fontWeight: '900',
    },
    expandArrow: {
        marginTop: 45,
        height: 20,
        width: 20
    },
    settingStyle: {
        justifyContent: "center",
        alignItems: "flex-end",
        flex: 1,
        marginRight: 20
    },
    settingIcon: {
        marginTop: 35,
        height: 20,
        width: 20,
    },
    watchView: {
        justifyContent: "center",
        alignItems: 'center',
        marginRight: 20,
        marginBottom: 10
    },
    watchText: {
        justifyContent: "center",
        alignItems: 'center',
        marginRight: 20,
        fontSize: 18,
        color: 'white',
        fontWeight: '700',
        marginTop: 30,
    },
    subView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    filterView:
    {
        backgroundColor: '#6e7b8a',
        backfaceVisibility: 'visible',
        height: 25, width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    downloadVideo:{
        // flex: 1,
        flexDirection: 'row',
        height: 100,
        width: 200,
        marginLeft: 2,
        marginRight: 2,
    },
    linearGradientView:{
        height:'20%'
    },
    
})