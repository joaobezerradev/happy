import { StyleSheet, Dimensions } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width:160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: "center",
  },

  calloutText: {
    color: "#0089a5",
    fontSize: 14,
    fontFamily: "Nunito_700Bold"
  },

  footer: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 32,


    backgroundColor: "#fff",
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
 
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3
  },

  footerText: {
    color: "#8fa7b3",
    fontFamily: "Nunito_700Bold"
  },

  createOphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: "#15c3d6",
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles