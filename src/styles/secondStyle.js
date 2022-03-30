import { StyleSheet } from 'react-native';
// import react from 'react';
const Styles = StyleSheet.create({

  linearGradient: {
    height: '100%',
    width: '100%',
  },
  searchBar: {
    // backgroundColor:'blue',
    marginLeft: 15,
    marginTop: 10,
    marginRight: 18,
    height: 30,
    width: 30,
  },
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
  textGerne: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
  listStyle: {
    flexDirection: 'column',
    color: 'grey'
  },
  listMarginStyle: {
    marginTop: 20,
  },
  mainView:{
    // justifyContent:'center',
    // alignItems:'center'
  },
  style1: {
    marginTop: 10,
    fontSize: 15,
    color: '#00BFFF'
  },
  arrowStyle: {
    height: 20,
    width: 20,
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
  listViewStyle: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between'
  },
  HeaderText: {
    fontWeight: '800',
    color: 'white',
    fontSize: 16,
  },
  HeaderView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    marginBottom:10
  },
  settingDataTittle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15
  },
  settingDataDetails: {
    color: 'grey',
    fontSize: 13
  },
  tittleView: {
    paddingHorizontal: 20,
    paddingTop: 10

  },
  detailsView: {
    paddingLeft: 20,
    paddingBottom: 10
  },
  //---------------------------------LogIn page CSS--------------------------------------------------
  logInView: {
    backgroundColor: '#3b3737',
    marginLeft: 20,
    flexDirection: 'row',
    backgroundColor:'#4a4846',
    width: '90%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  placeHolderStyle: {
    marginLeft:10,
    width: "40%",
    color: 'white',
  },
  tittletext:{
    color:'white',
    fontSize:25,
    fontWeight:'700',
    marginLeft:18
},
forgotText:{
  marginBottom:20,
    fontSize:15,
    color:'#3090C7',
},
forgotView:{
    alignItems:'flex-end',
    justifyContent:'flex-end',
    paddingRight:20
},
signInView:{
  marginTop:30,
  height:40,
  backgroundColor:'#db831f',
  width:'90%',
  marginLeft: 20,
  borderRadius:5,
  justifyContent:'center',
  alignItems:'center'
},
signInText:{
  fontSize:20,
  color:'white'
},
conditionView:{
  backgroundColor: '#3b3737',
    marginLeft: 20,
    marginTop:20,
    flexDirection: 'row',
    width: '90%',
    height: 50,
},
conditonText:{
  color:'white',
  fontSize:15
},
dividerStyle:{
  // color:'white',
},
footerGradient:{
height:40,
marginTop:30,
marginHorizontal:20,
justifyContent:'center',
alignItems:"center"
},
newTextStyle:{
  color:'#adaaa6',
  fontSize:18,
},
newAccount:{
  width:'90%',
  marginLeft: 20,
  borderRadius:5,
  justifyContent:'center',
  alignItems:'center',
},
footerViewStyle:{
  marginTop:40,
  flexDirection:'row',
  justifyContent:'space-evenly',
  
  
},
footerGradientView:{
height:100,
justifyContent:'center',
alignItems:"center"
},
footerTextStyle:{
  color:'#3090C7',
  fontSize:15
},
copyRight:{
  color:'grey',
  fontSize:10
},
copyRightView:{
  marginTop:10,
  alignSelf:'center'
}
});

export default Styles;