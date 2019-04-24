import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  headerViewStyle: {
    backgroundColor: '#FFDF00',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    marginTop: 0,
    paddingTop: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  headerTextStyle: {
    fontFamily: 'Hiragino Sans',
    fontWeight: 'bold',
    fontSize: 20
  },
  currentPriceViewStyle: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 0,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  currentPriceTextStyle: {
    fontFamily: 'Hiragino Sans',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFDF00'
  },
  chartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff"
  },
  disclaimerTextStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 3,
    padding: 5,
    fontFamily: 'Hiragino Sans',
    fontSize: 8
  },
  // buttonStyle: {
  //   position: 'relative',
  //   display: 'inline-block',
  //   marginLeft: 10,
  //   height: 31,
  //   width: 90,
  //   border: 1px solid black;
  //   borderRadius: 3,
  //   outline: 'none',
  //   justifyContent: 'center',
  //   fontFamily: 'Hiragino Sans',
  //   fontWeight: 'normal',
  //   fontSize: 12,

  //   : focus: active {
  //   backgroundColor: '#FFD700'
  //   transition: backgroundColor 5ms ease-in-out;
  // }
  //}
});

export default Styles;


// const CommentaryWrapper = styled.div`
//   position: relative;
//   height: 350px;
//   width: 350px;
//   margin-top: 3vh;
//   margin-left: 4vh;
//   margin-right: 4vh;
//   border: solid 1px;
//   border-radius: 2px;
//   padding-top: 5px;
//   padding-bottom: 50px;
//   padding-left: 15px;
//   padding-right: 15px;
// `;