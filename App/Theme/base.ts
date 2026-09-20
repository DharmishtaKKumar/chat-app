/*
 *   File : base.tsx
 *   Description : file for base styling
 *   Integrations : null
 *   Version : v1.1
 */

import { StyleSheet } from 'react-native';
import CONSTANTS from './constant';

export default StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
  flexThree: {
    flex: 3,
  },
  flexFive: {
    flex: 5,
  },
  flexSix: {
    flex: 6,
  },
  flexSeven: {
    flex: 7,
  },
  flex30: {
    flex: 0.3,
  },
  flex40: {
    flex: 0.4,
  },
  flex45: {
    flex: 0.45,
  },
  flex48: {
    flex: 0.48,
  },
  flex50: {
    flex: 0.5,
  },
  flexGrowOne: {
    flexGrow: 1,
  },
  zIndexTwo: {
    zIndex: 2,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyFlexStart: {
    justifyContent: 'flex-start',
  },
  justifyFlexEnd: {
    justifyContent: 'flex-end',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  alignContentStart: {
    alignContent: 'flex-start',
  },
  alignContentCenter: {
    alignContent: 'center',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  positionAbsoluteBottom: {
    position: 'absolute',
    bottom: 0,
  },
  positionAbsoluteRight: {
    position: 'absolute',
    right: 0,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  rowSpaceCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  overFlow: {
    overflow: 'hidden',
  },
  alignSelfFlexStart: {
    alignSelf: 'flex-start',
  },
  alignSelfFlexEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    right: 0,
  },
  textAlign: {
    textAlign: 'center',
  },
  underLine: {
    textDecorationLine: 'underline',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  activeZindex: {
    zIndex: 1,
  },
  zeroZindex: {
    zIndex: 0,
  },
  negativeZindex: {
    zIndex: -1,
  },
  zeroZindex1: {
    zIndex: 1,
  },
  opacityDisable: {
    opacity: 0.4,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  disabled: {
    opacity: 0.5,
  },
  position: {
    position: 'absolute',
  },

  // fullWidth: {
  // 	width: CONSTANTS.FullWidth
  // },
  fullHeight: {
    height: '100%',
  },

  // fonts
  rubikRegular: {
    fontFamily: 'Rubik-Regular',
  },
  rubikMedium: {
    fontFamily: 'Rubik-Medium',
  },
  rubikSemibold: {
    fontFamily: 'Rubik-SemiBold',
  },
  rubikBold: {
    fontFamily: 'Rubik-Bold',
  },
  robotoRegular: {
    fontFamily: 'Roboto-Regular',
  },
  robotoMedium: {
    fontFamily: 'Roboto-Medium',
  },
  robotoSemibold: {
    fontFamily: 'Roboto-SemiBold',
  },
  robotoBold: {
    fontFamily: 'Roboto-Bold',
  },

  // font size
  fontSize8: {
    fontSize: CONSTANTS.Width8,
  },
  fontSize16: {
    fontSize: CONSTANTS.Width16,
  },

  // line height
  lineHeight16: {
    lineHeight: CONSTANTS.Width16,
  },

  // border width
  borderWidth2: {
    borderWidth: StyleSheet.hairlineWidth * 2,
  },
  borderWidth2: {
    borderWidth: StyleSheet.hairlineWidth * 1,
  },
  borderLeft1: {
    borderLeftWidth: StyleSheet.hairlineWidth * 1,
  },
  borderLeft2: {
    borderLeftWidth: StyleSheet.hairlineWidth * 2,
  },
  borderLeft4: {
    borderLeftWidth: StyleSheet.hairlineWidth * 4,
  },
  borderRight1: {
    borderRightWidth: StyleSheet.hairlineWidth * 1,
  },
  borderRight2: {
    borderRightWidth: StyleSheet.hairlineWidth * 2,
  },

  borderDash: {
    borderStyle: 'dotted',
    borderRadius: 4,
  },

  dottedBorder: {
    borderStyle: 'dashed',
  },

  // border bottom width
  borderBottomWidth1: {
    borderBottomWidth: CONSTANTS.Width1,
  },
  borderBottomWidth2: {
    borderBottomWidth: CONSTANTS.Width2,
  },
  borderRightWidth1: {
    borderRightWidth: CONSTANTS.Width1,
  },

  borderTopWidth1: {
    borderTopWidth: StyleSheet.hairlineWidth * 1,
  },
  borderTopWidth2: {
    borderTopWidth: CONSTANTS.Width2,
  },

  // letter spacing
  letterSpacingNormal: {
    // letterSpacing: 0.2
  },
  letterSpacingMinus2: {
    letterSpacing: -0.2,
  },
  letterSpacing: {
    letterSpacing: 1,
  },

  //margin
  margin16: {
    margin: CONSTANTS.Width16,
  },

  //marginVertical
  marginVertical8: {
    marginVertical: CONSTANTS.Width8,
  },
  marginVertical16: {
    marginVertical: CONSTANTS.Width16,
  },

  // margin horizontal
  marginHorizontal0: {
    marginHorizontal: CONSTANTS.Width0,
  },
  marginHorizontal16: {
    marginHorizontal: CONSTANTS.Width16,
  },
  marginHorizontal8: {
    marginHorizontal: CONSTANTS.Width8,
  },
  marginHorizontal4: {
    marginHorizontal: CONSTANTS.Width4,
  },

  // margin top
  marginTop2: {
    marginTop: CONSTANTS.Width2,
  },
  marginTop4: {
    marginTop: CONSTANTS.Width4,
  },
  marginTop8: {
    marginTop: CONSTANTS.Width8,
  },
  marginTop16: {
    marginTop: CONSTANTS.Width16,
  },
  marginTopMinus2: {
    marginTop: CONSTANTS.WidthMinus2,
  },
  marginTopMinus4: {
    marginTop: CONSTANTS.WidthMinus4,
  },
  marginTopMinus8: {
    marginTop: CONSTANTS.WidthMinus8,
  },
  marginTopMinus14: {
    marginTop: CONSTANTS.WidthMinus14,
  },
  marginTopMinus16: {
    marginTop: CONSTANTS.WidthMinus16,
  },
  marginTopMinus20: {
    marginTop: CONSTANTS.WidthMinus20,
  },
  marginTopMinus24: {
    marginTop: CONSTANTS.WidthMinus24,
  },
  marginTopMinus30: {
    marginTop: CONSTANTS.WidthMinus30,
  },
  marginTopMinus60: {
    marginTop: CONSTANTS.WidthMinus60,
  },

  // margin bottom
  marginBottomMinus4: {
    marginBottom: CONSTANTS.WidthMinus4,
  },
  marginBottomMinus16: {
    marginBottom: CONSTANTS.WidthMinus16,
  },
  marginBottomMinus120: {
    marginBottom: CONSTANTS.WidthMinus120,
  },
  marginBottom2: {
    marginBottom: CONSTANTS.Width2,
  },
  marginBottom4: {
    marginBottom: CONSTANTS.Width4,
  },
  marginBottom8: {
    marginBottom: CONSTANTS.Width8,
  },
  marginBottom16: {
    marginBottom: CONSTANTS.Width16,
  },
  marginBottom38: {
    marginBottom: CONSTANTS.Width38,
  },

  // marginLeft
  marginLeftMinus8: {
    marginLeft: CONSTANTS.WidthMinus8,
  },
  marginRightMinus16: {
    marginRight: CONSTANTS.WidthMinus8,
  },
  marginLeftMinus16: {
    marginLeft: CONSTANTS.WidthMinus16,
  },
  marginLeft2: {
    marginLeft: CONSTANTS.Width2,
  },
  marginLeft4: {
    marginLeft: CONSTANTS.Width4,
  },
  marginLeft8: {
    marginLeft: CONSTANTS.Width8,
  },
  marginLeft16: {
    marginLeft: CONSTANTS.Width16,
  },

  // marginRight
  marginRight4: {
    marginRight: CONSTANTS.Width4,
  },
  marginRight8: {
    marginRight: CONSTANTS.Width8,
  },
  marginRight16: {
    marginRight: CONSTANTS.Width16,
  },

  // padding right
  paddingRight38: {
    paddingRight: CONSTANTS.Width38,
  },

  // padding bottom
  paddingBottom4: {
    paddingBottom: CONSTANTS.Width4,
  },
  paddingBottom8: {
    paddingBottom: CONSTANTS.Width8,
  },
  paddingBottom16: {
    paddingBottom: CONSTANTS.Width16,
  },
  paddingBottom38: {
    paddingBottom: CONSTANTS.Width38,
  },
  paddingBottom120: {
    paddingBottom: CONSTANTS.Width120,
  },

  // padding top
  paddingTop2: {
    paddingTop: CONSTANTS.Width2,
  },
  paddingTop4: {
    paddingTop: CONSTANTS.Width4,
  },
  paddingTop8: {
    paddingTop: CONSTANTS.Width8,
  },
  paddingTop16: {
    paddingTop: CONSTANTS.Width16,
  },

  // padding left
  paddingLeft2: {
    paddingLeft: CONSTANTS.Width2,
  },

  // width
  heightWidth4: {
    width: CONSTANTS.Width4,
    height: CONSTANTS.Width4,
  },
  heightWidth8: {
    width: CONSTANTS.Width8,
    height: CONSTANTS.Width8,
  },

  heightWidth16: {
    width: CONSTANTS.Width16,
    height: CONSTANTS.Width16,
  },
  heightWidth38: {
    width: CONSTANTS.Width38,
    height: CONSTANTS.Width38,
  },

  // width
  width: {
    width: CONSTANTS.Width,
  },
  width1: {
    width: CONSTANTS.Width1,
  },
  Width16: {
    width: CONSTANTS.Width16,
  },
  width120: {
    width: CONSTANTS.Width120,
  },

  // height
  height1: {
    height: StyleSheet.hairlineWidth * 1,
  },
  height2: {
    height: CONSTANTS.Width2,
  },
  height4: {
    height: CONSTANTS.Width4,
  },

  height8: {
    height: CONSTANTS.Width8,
  },
  height120: {
    height: CONSTANTS.Width120,
  },

  // opacity
  opacity0: {
    opacity: CONSTANTS.opacity0,
  },
  opacity12: {
    opacity: CONSTANTS.opacity12,
  },
  opacity40: {
    opacity: CONSTANTS.opacity40,
  },
  opacity48: {
    opacity: CONSTANTS.opacity48,
  },
  opacity50: {
    opacity: CONSTANTS.opacity50,
  },
  opacity64: {
    opacity: CONSTANTS.opacity64,
  },
  opacity75: {
    opacity: CONSTANTS.opacity75,
  },
  opacity80: {
    opacity: CONSTANTS.opacity80,
  },
  opacity100: {
    opacity: CONSTANTS.opacity100,
  },

  // padding horizontal
  paddingHorizontal4: {
    paddingHorizontal: CONSTANTS.Width4,
  },
  paddingHorizontal8: {
    paddingHorizontal: CONSTANTS.Width8,
  },
  paddingHorizontal16: {
    paddingHorizontal: CONSTANTS.Width16,
  },
  paddingHorizontal38: {
    paddingHorizontal: CONSTANTS.Width38,
  },

  // padding left
  paddingLeftMinus4: {
    paddingLeft: CONSTANTS.WidthMinus4,
  },
  paddingLeft4: {
    paddingLeft: CONSTANTS.Width4,
  },
  paddingLeft8: {
    paddingLeft: CONSTANTS.Width8,
  },
  paddingLeft16: {
    paddingLeft: CONSTANTS.Width16,
  },

  // padding right
  paddingRight4: {
    paddingRight: CONSTANTS.Width4,
  },
  paddingRight8: {
    paddingRight: CONSTANTS.Width8,
  },
  paddingRight16: {
    paddingRight: CONSTANTS.Width16,
  },

  // padding vertical
  paddingVertical2: {
    paddingVertical: CONSTANTS.Width2,
  },
  paddingVertical4: {
    paddingVertical: CONSTANTS.Width4,
  },
  paddingVertical8: {
    paddingVertical: CONSTANTS.Width8,
  },
  paddingVertical16: {
    paddingVertical: CONSTANTS.Width16,
  },

  // padding
  padding0: {
    padding: 0,
  },
  padding1: {
    padding: CONSTANTS.Width1,
  },
  padding2: {
    padding: CONSTANTS.Width2,
  },
  padding4: {
    padding: CONSTANTS.Width4,
  },
  padding8: {
    padding: CONSTANTS.Width8,
  },
  padding16: {
    padding: CONSTANTS.Width16,
  },

  // padding bottom
  paddingBottom2: {
    paddingBottom: CONSTANTS.Width2,
  },

  // border radius
  borderRadius4: {
    borderRadius: CONSTANTS.Width4,
  },
  borderRadius8: {
    borderRadius: CONSTANTS.Width8,
  },
  borderRadius16: {
    borderRadius: CONSTANTS.Width16,
  },
  borderRadius38: {
    borderRadius: CONSTANTS.Width38,
  },
  borderTopLeftRadius16: {
    borderTopLeftRadius: CONSTANTS.Width16,
  },
  borderTopRightRadius16: {
    borderTopRightRadius: CONSTANTS.Width16,
  },
  borderTopRightRadius8: {
    borderTopRightRadius: CONSTANTS.Width8,
  },
  borderTopLeftRadius8: {
    borderTopLeftRadius: CONSTANTS.Width8,
  },
  borderBottomLeftRadius8: {
    borderBottomLeftRadius: CONSTANTS.Width8,
  },
  borderBottomLeftRadius16: {
    borderBottomLeftRadius: CONSTANTS.Width16,
  },
  borderBottomRightRadius8: {
    borderBottomRightRadius: CONSTANTS.Width8,
  },
  borderBottomRightRadius16: {
    borderBottomRightRadius: CONSTANTS.Width16,
  },

  // right
  right16: {
    right: CONSTANTS.Width16,
  },

  // bottom
  // bottom7: {
  // 	bottom: CONSTANTS.Width7
  // },

  // height on height dimension
  heightOnDeviceHeight256: {
    height: CONSTANTS.Height * (256 / 760),
  },
  marginTopOnHeight110: {
    marginTop: CONSTANTS.Height * (110 / 760),
  },
  right0: {
    right: 0,
  },
  // right_10: {
  // 	right: CONSTANTS.Width10 * -1
  // },
  top0: {
    top: CONSTANTS.Width0,
  },
  top8: {
    top: CONSTANTS.Width8,
  },
  top16: {
    top: CONSTANTS.Width16,
  },
  topMinus4: {
    top: CONSTANTS.WidthMinus4,
  },
  topMinus5: {
    top: CONSTANTS.WidthMinus5,
  },
  topMinus6: {
    top: CONSTANTS.WidthMinus6,
  },
  topMinus10: {
    top: CONSTANTS.WidthMinus10,
  },
  bottomMinus8: {
    bottom: CONSTANTS.WidthMinus8,
  },
  bottomMinus10: {
    bottom: CONSTANTS.WidthMinus10,
  },
  bottomMinus12: {
    bottom: CONSTANTS.WidthMinus12,
  },
  bottomMinus13: {
    bottom: CONSTANTS.WidthMinus13,
  },
  bottomMinus14: {
    bottom: CONSTANTS.WidthMinus14,
  },
  bottomMinus16: {
    bottom: CONSTANTS.WidthMinus16,
  },
  bottomMinus20: {
    bottom: CONSTANTS.WidthMinus20,
  },
  bottomMinus24: {
    bottom: CONSTANTS.WidthMinus24,
  },
  rightMinus6: {
    right: CONSTANTS.WidthMinus6,
  },
  rightMinus4: {
    right: CONSTANTS.WidthMinus4,
  },
  right2: {
    right: CONSTANTS.Width2,
  },
  right4: {
    right: CONSTANTS.Width4,
  },
  right8: {
    right: CONSTANTS.Width8,
  },


});
