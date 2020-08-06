import { Platform, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");



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
  profile:{
    width:150,
    height:150,
  
  },
  logocontainer:{
    alignItems:'center',
    marginBottom: 75,
    
  },
  myname:{
    fontSize: 20,
    color: 'black',
    fontWeight:'500',
    marginBottom: 80,
    opacity:0.8,
    alignSelf:'center',
    
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

  iconstyle:{
    color: 'snow',
    opacity: 1,
    
    
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
export const AppStyles = {
  color: {
    main: "#5ea23a",
    text: "#696969",
    title: "#464646",
    subtitle: "#545454",
    categoryTitle: "#161616",
    tint: "#3096EE",
    description: "#bbbbbb",
    filterTitle: "#8a8a8a",
    starRating: "#2bdf85",
    location: "#a9a9a9",
    white: "white",
    facebook: "#4267b2",
    grey: "grey",
    greenBlue: "#00aea8",
    placeholder: "#a0a0a0",
    background: "#f2f2f2",
    blue: "#3293fe"
  },
  fontSize: {
    title: 30,
    content: 20,
    normal: 16
  },
  buttonWidth: {
    main: "70%"
  },
  textInputWidth: {
    main: "80%"
  },
  fontName: {
    main: "Noto Sans",
    bold: "Noto Sans"
  },
  borderRadius: {
    main: 25,
    small: 5
  }
};

export const AppIcon = {
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    marginRight: 10
  },
  style: {
    tintColor: AppStyles.color.tint,
    width: 25,
    height: 25
  },
  images: {
    //home: require("../assets/icons/home.png"),
    //defaultUser: require("../assets/icons/default_user.jpg"),
    //logout: require("../assets/icons/shutdown.png")
  }
};

export const HeaderButtonStyle = StyleSheet.create({
  multi: {
    flexDirection: "row"
  },
  container: {
    padding: 10
  },
  image: {
    justifyContent: "center",
    width: 35,
    height: 35,
    margin: 6
  },
  rightButton: {
    color: AppStyles.color.tint,
    marginRight: 10,
    fontWeight: "normal",
    fontFamily: AppStyles.fontName.main
  }
});

export const ListStyle = StyleSheet.create({
  title: {
    fontSize: 16,
    color: AppStyles.color.subtitle,
    fontFamily: AppStyles.fontName.bold,
    fontWeight: "bold"
  },
  subtitleView: {
    minHeight: 55,
    flexDirection: "row",
    paddingTop: 5,
    marginLeft: 10
  },
  leftSubtitle: {
    flex: 2
  },
  avatarStyle: {
    height: 80,
    width: 80
  }
});
