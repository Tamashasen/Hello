import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  //Common Style
  appTitle: {
    fontSize: 22,
    color: 'snow',
  },
  headerBackgroundColor: {
    backgroundColor: '#04213E',
  },
  // Tabs
  tabBarUnderLine: {
    height: 2,
  },
  badge: {
    backgroundColor: '#ECE5DD',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    height: 24,
  },
  badgeText: {
    color: '#04213E',
    fontSize: 12,
  },
  tabsText: {fontSize: 14, fontWeight: 'bold'},
  //Chat Screen
  badgeChats: {
    backgroundColor: '#04213E',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    height: 24,
    marginTop: 4,
  },
  badgeTextChats: {
    color: 'snow',
    fontSize: 12,
  },
  fabColor: {
    backgroundColor: '#04213E',
  },
  // Status Screen
  listItemDivider: {marginTop: 10, height: 10},
  addStatusIcon: {
    color: '#04213E',
    alignSelf: 'flex-end',
    position: 'absolute',
    marginLeft: 40,
    bottom: -5,
    width: 20,
    fontSize: 20,
  },
  // Call Screen
  callIcon: {
    marginRight: 10,
    fontSize: 18,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  backgroundcontainer:{
    flex :1,
    width:null,
    height:null,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  logo:{
    width:175,
    height:175,
  
  },
  logocontainer:{
    alignItems:'center',
    
  },
  logotext:{
    fontSize: 20,
    color: 'white',
    fontWeight:'500',
    opacity:0.5,
    marginTop:10,

  },
  input:{
    width:WIDTH=200,
    height:45,
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor:'rgba(0,0,0,0.35)',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal:25,
    marginTop:25,
  },
  inputicon:{
    position:'absolute',
    top:8,
    left:37
  },

  eyebutton:{
    position: 'absolute',
    top:
    8,
    right:37
  },
  error: {
    margin: 8,
    marginBottom: 0,
    color: 'red',
    textAlign: 'center'
}

});