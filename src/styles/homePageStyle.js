import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
export default StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#232F3E',
    },
    PMImage: {
        height: 30,
        fontWeight: '700',
        fontSize: 15,
        // marginTop:20,
        marginTop: 30,
        marginBottom: 20,
        color: 'white',
        alignSelf: "center",
    },
    //------------------------------------HOME PAGE STYLING-------------------------------------------------------------
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
    addDiv: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    textStyle: {
        marginLeft: 20,
        color: 'white',
        fontWeight: '700',
        fontSize: 17,
        marginBottom: 5,
    },
    viewStyle: {
        height: 105,
        width: 180,
        marginRight: 9,
        paddingHorizontal: 20
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
    //------------------------------------------------------CHANNEL PAGE STYLING----------------------------------------------------
    channelAdd: {
        backgroundColor: '#232F3E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    //-------------------------------------------------DOWNLOADS-------------------------------------------------------

    DownloadView: {
        backgroundColor: '#232F3E',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop:30
    },
    downloadStyle: {
        // marginTop: 50,
        color: 'white',
        fontWeight: '900',
        fontSize: 18,
    },
    downloadImage: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#232F3E',
        height: '100%'
    },
    subTextStyle: {
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        color: 'white',
        fontWeight: '900',
        fontSize: 20,
    },
    downloadSettingText: {
        color: 'darkgrey',
        marginTop: 15,
        fontSize: 18
    },

    dImageStyle: {
        height: 150,
        width: 150
    },
    dMainView: {
        backgroundColor: "#232F3E"
    },
    //-------------------------------------------------SEARCH PAGE---------------------------------------------------------------


    searchView: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 70,
        justifyContent: 'space-around',
        backgroundColor: '#232F3E',
        flexDirection: 'row',
        width: '90%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
    },
    searchText: {
        marginHorizontal: 10,
        width: "40%",
        color: 'white',
    },
    searchBar: {
        marginLeft: 15,
        marginTop: 10,
        marginRight: 18,
        height: 30,
        width: 30,
    },

    marginStyle: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
    },
    textStyle: {
        fontWeight: '800',
        marginBottom: 20,
        color: 'white',
        fontSize: 18,
    },
    textGerne: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
        fontSize: 15,
    },
    gridView: {
        position: 'relative',
        flex: 0.5,
        height: 50,
        backgroundColor: '#232F3E',
        marginRight: 20,
        color: 'white',
        width: '40%',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    listStyle1: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    listViewStyle: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    listStyle: {
        flexDirection: 'column',
        color: 'grey'
    },
    arrowStyle: {
        height: 20,
        width: 20,
    },
    languageStyle: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    listMarginStyle: {
        marginTop: 20,
    },
    textStyle: {
        fontWeight: '800',
        marginBottom: 20,
        color: 'white',
        fontSize: 18,
    },
    style1: {
        marginTop: 10,
        fontSize: 15,
        color: '#00BFFF'
    },
    //----------------------------------------------------------------------------------
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


    NavStyle: {
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
        fontWeight: '500',
        fontSize: 14,
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
    //-----------------------------------------------------------MY STUFF--------------------------------------------------------------------
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
    videoText: {
        color: '#838996',
        fontSize: 17,
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
    downloadMain:
    {
        backgroundColor: '#123456',
        marginBottom: 5,
        flexDirection: 'row'
    },
    downloadVideo: {
        // flex: 1,
        flexDirection: 'row',
        height: 100,
        width: 200,
        marginLeft: 2,
        marginRight: 2,
    },
    subViewStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'grey',
        opacity: 0.9,
        height: 5,
        width: '100%'
    },
    childView: {
        position: 'absolute',
        bottom: 0, left: 0,
        backgroundColor: '#00BFFF',
        opacity: 1,
        height: 5,
        width: '30%'
    },
    flatListstyle: {
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
        paddingBottom: 7
    },
    primeText: {
        fontWeight: '800',
        color: '#3BB9FF'
    },
    linearGradientView: {
        height: '20%'
    },
    seeMore: {
        position: 'absolute',
        bottom: 10,
        right: 10,
    },
    seeMoreStyle:{
         height: 20,
          width: 20 
        },


})