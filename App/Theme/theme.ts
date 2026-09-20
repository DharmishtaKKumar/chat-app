/*
 *   File : theme.tsx
 *   Description : common file for styles
 *   Integrations : null
 *   Version : v1.1
 */

import { StyleSheet } from 'react-native';

// manual imports
import CONSTANTS from './constant';
import COLOURS from './color';
import { scaleWidth } from '../Helper/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.PURE_WHITE,
  },
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
  flexThree: {
    flex: 3,
  },
  flex10: {
    flex: 0.1,
  },

  flexGrowOne: {
    flexGrow: 1,
  },
  flexShrink: {
    flexShrink: 1,
  },
  row: {
    flexDirection: 'row',
  },
  rowSpaceCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },

  positionAbsoluteBottom: {
    position: 'absolute',
    bottom: 0,
  },

  fullWidth: {
    width: CONSTANTS.Width,
  },
  fullWidth30: {
    width: CONSTANTS.FullWidth30,
  },
  fullWidth33: {
    width: CONSTANTS.FullWidth33,
  },
  fullWidth35: {
    width: CONSTANTS.FullWidth35,
  },
  fullWidth40: {
    width: CONSTANTS.FullWidth40,
  },
  fullWidth48: {
    width: CONSTANTS.FullWidth48,
  },
  fullWidth50: {
    width: CONSTANTS.FullWidth50,
  },
  fullWidth55: {
    width: CONSTANTS.FullWidth55,
  },
  fullWidth60: {
    width: CONSTANTS.FullWidth60,
  },

  fullWidth70: {
    width: CONSTANTS.FullWidth70,
  },
  fullWidth75: {
    width: CONSTANTS.FullWidth75,
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  spaceAround: {
    justifyContent: 'space-around',
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
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end',
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
  textAlignRight: {
    textAlign: 'right',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  alignSelfFlexEnd: {
    alignSelf: 'flex-end',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfFlexStart: {
    alignSelf: 'flex-start',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  overFlow: {
    overflow: 'hidden',
  },
  overFlowVisible: {
    overflow: 'visible',
  },
  underLine: {
    textDecorationLine: 'underline',
  },
  textAlign: {
    textAlign: 'center',
  },

  dottedUnderlinePrimary: {
    borderBottomWidth: 1,
    borderBottomColor: '#1877F2',
    borderStyle: 'dotted',
  },

  dottedUnderlineWhite: {
    borderBottomWidth: 1,
    borderBottomColor: '#FAFAFA',
    borderStyle: 'dotted',
  },

  dottedUnderlineBlack: {
    borderBottomWidth: 1,
    borderBottomColor: '#151515',
    borderStyle: 'dotted',
  },

  dottedBorder: {
    borderStyle: 'dotted',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  activeZindex: {
    zIndex: 1,
  },
  zeroZindex: {
    zIndex: 0,
  },
  zeroZindex1: {
    zIndex: 1,
  },
  minusOneZindex: {
    zIndex: -1,
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  borderDash: {
    borderStyle: 'dashed',
  },

  transForm180: {
    transform: [{ rotate: '180deg' }],
  },
  transForm90: {
    transform: [{ rotate: '90deg' }],
  },
  transForm270: {
    transform: [{ rotate: '270deg' }],
  },
  transForm45: {
    transform: [{ rotate: '45deg' }],
  },

  // position
  position: {
    position: 'absolute',
  },
  positionAbsolute: { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 },

  // Roboto font family
  rubicLight: {
    fontFamily: 'Rubik-Light',
  },
  rubicRegualr: {
    fontFamily: 'Rubik-Regular',
  },
  rubicMedium: {
    fontFamily: 'Rubik-Medium',
  },
  RubicSemiBold: {
    fontFamily: 'Rubik-SemiBold',
  },
  RubicBold: {
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

  // color
  colorPrimary: {
    color: COLOURS.PRIMARY_COLOR,
  },
  colorDarkPrimary: {
    color: COLOURS.DARK_PRIMARY,
  },
  colorTealishGreen: {
    color: COLOURS.TEALISH_GREEN,
  },
  colorCynder: {
    color: COLOURS.CYNDER,
  },
  colorRed: {
    color: COLOURS.RED,
  },
  colorViolet: {
    color: COLOURS.VIOLET,
  },
  colorCedarRed: {
    color: COLOURS.CEDAR_RED,
  },
  colorGraniteGray: {
    color: COLOURS.GRANITE_GRAY,
  },

  colorBlack: {
    color: COLOURS.BLACK,
  },
  colorHookerGreen: {
    color: COLOURS.HOOKER_GREEN,
  },
  colorArsenic: {
    color: COLOURS.ARSENIC,
  },
  colorSecondaryBlack: {
    color: COLOURS.SECONDARY_COLOR,
  },
  colorBrightNavyBlue: {
    color: COLOURS.BRIGHT_NAVY_BLUE,
  },
  colorDarkSilver: {
    color: COLOURS.DARK_SILVER,
  },
  colorLavaRed: {
    color: COLOURS.LAVA_RED,
  },
  colorIronSideGrey: {
    color: COLOURS.IRONSIDE_GREY,
  },
  colorSeaGreen: {
    color: COLOURS.SEA_GREEN,
  },
  colorOrangeLight: {
    color: COLOURS.ORANGE_LIGHT,
  },
  colorStarDust: {
    color: COLOURS.STAR_DUST,
  },
  colorPureWhite: {
    color: COLOURS.PURE_WHITE,
  },
  colorLotionWhite: {
    color: COLOURS.LOTION_WHITE,
  },
  colorDimGray: {
    color: COLOURS.DIM_GRAY,
  },
  colorGreyOpacity80: {
    color: COLOURS.GREY_OPACITY_80,
  },
  colorDarkCharcoal: {
    color: COLOURS.DARK_CHARCOAL,
  },

  // background Color
  backgroundColorSecondary: {
    backgroundColor: COLOURS.SECONDARY_COLOR,
  },
  backgroundColorCedarRed: {
    backgroundColor: COLOURS.CEDAR_RED,
  },
  backgroundColorDarkishSilver: {
    backgroundColor: COLOURS.DARKISH_SILVER,
  },

  backgroundColorWildBlueYonder: {
    backgroundColor: COLOURS.WILD_BLUE_YONDER,
  },
  backgroundColorPureWhite: {
    backgroundColor: COLOURS.PURE_WHITE,
  },
  backgroundColorLightBluishLavander: {
    backgroundColor: COLOURS.LIGHT_BLUISH_LAVANDER,
  },
  backgroundSeaGreenOpacity30: {
    backgroundColor: COLOURS.SEA_GREEN_OPACITY_30,
  },
  backgroundGreyGoose: {
    backgroundColor: COLOURS.GREY_GOOSE,
  },
  backgroundIronsideGrey: {
    backgroundColor: COLOURS.IRONSIDE_GREY,
  },

  backgroundColorPrimary: {
    backgroundColor: COLOURS.PRIMARY_COLOR,
  },
  backgroundColorLavendarBlue: {
    backgroundColor: COLOURS.LAVENDAR_BLUE,
  },
  backgroundColorsDarkPrimary: {
    backgroundColor: COLOURS.DARK_PRIMARY,
  },
  backgroundColorCyanBlue: {
    backgroundColor: COLOURS.CYAN_BLUE,
  },
  backgroundColorSunRay: {
    backgroundColor: COLOURS.SUN_RAY,
  },
  backgroundColorRangoonGreen: {
    backgroundColor: COLOURS.RANGOON_GREEN,
  },
  backgroundColorPurplyBlue: {
    backgroundColor: COLOURS.PURPLY_BLUE,
  },
  backgroundColorDustyGrey: {
    backgroundColor: COLOURS.DUSTY_GREY,
  },
  backgroundColorWhiteOpacity5: {
    backgroundColor: COLOURS.WHITE_OPACITY_5,
  },
  backgroundColorWhiteOpacity43: {
    backgroundColor: COLOURS.WHITE_OPACITY_43,
  },
  backgroundColorWhiteOpacity60: {
    backgroundColor: COLOURS.WHITE_OPACITY_60,
  },
  backgroundColorWhiteOpacity80: {
    backgroundColor: COLOURS.WHITE_OPACITY_80,
  },
  backgroundColorWhiteOpacity90: {
    backgroundColor: COLOURS.WHITE_OPACITY_90,
  },
  backgroundColorWhiteOpacity10: {
    backgroundColor: COLOURS.WHITE_OPACITY_10,
  },
  backgroundColorGreyOpacity10: {
    backgroundColor: COLOURS.GREY_OPACITY_10,
  },
  backgroundColorGreyOpacity40: {
    backgroundColor: COLOURS.GREY_OPACITY_40,
  },
  backgroundColorGreyOpacity200: {
    backgroundColor: COLOURS.GREY_200,
  },

  backgroundColorWhiteOpacity30: {
    backgroundColor: COLOURS.WHITE_OPACITY_30,
  },
  backgroundColorWhiteOpacity50: {
    backgroundColor: COLOURS.WHITE_OPACITY_50,
  },
  backgroundColorWhiteOpacity70: {
    backgroundColor: COLOURS.WHITE_OPACITY_70,
  },
  backgroundColorLightSilver: {
    backgroundColor: COLOURS.LIGHT_SILVER,
  },
  backgroundColorLightishSilver: {
    backgroundColor: COLOURS.LIGHTISH_SILVER,
  },
  backgroundColorMandy: {
    backgroundColor: COLOURS.MANDY,
  },
  backgroundColorSmokyBlackOpacity60: {
    backgroundColor: COLOURS.SMOKY_BLACK_OPACITY_60,
  },
  backgroundColorTwilightOpacity80: {
    backgroundColor: COLOURS.TWILIGHT_OPACITY_80,
  },
  backgroundColorGoldOpacity7: {
    backgroundColor: COLOURS.GOLD_OPACITY_7,
  },
  backgroundColorWaterOpacity10: {
    backgroundColor: COLOURS.WATER_OPACITY_10,
  },
  backgroundColorForestGreenOpacity20: {
    backgroundColor: COLOURS.FOREST_GREEN_OPACITY_20,
  },
  backgroundColorIronOpacity70: {
    backgroundColor: COLOURS.IRON_OPACITY_70,
  },
  backgroundColorCopper: {
    backgroundColor: COLOURS.COPPER,
  },
  backgroundColorGreyOpacity50: {
    backgroundColor: COLOURS.GREY_OPACITY_50,
  },

  backgroundColorLavendarLight: {
    backgroundColor: COLOURS.LAVENDAR_LIGHT,
  },
  backgroundColorDarkIronColor: {
    backgroundColor: COLOURS.DARK_IRON_COLOR,
  },
  backgroundColorGravel: {
    backgroundColor: COLOURS.GRAVEL,
  },
  backgroundColorBlack: {
    backgroundColor: COLOURS.BLACK,
  },
  backgroundColorChineseGreen: {
    backgroundColor: COLOURS.CHINESE_GREEN,
  },
  backgroundColorAntiqueWhite: {
    backgroundColor: COLOURS.ANTIQUE_WHITE,
  },

  backgroundColorWater: {
    backgroundColor: COLOURS.WATER,
  },
  backgroundColorPrimaryColorOpacity90: {
    backgroundColor: COLOURS.PRIMARY_COLOR_OPACITY_90,
  },
  backgroundColorLightGainsboro: {
    backgroundColor: COLOURS.LIGHT_GAINSBORO,
  },
  backgroundColorHookerGreen: {
    backgroundColor: COLOURS.HOOKER_GREEN,
  },
  backgroundColorCornFlowerBlue: {
    backgroundColor: COLOURS.CORN_FLOWER_BLUE,
  },
  backgroundColorLightPeriwingle: {
    backgroundColor: COLOURS.LIGHT_PERIWINGLE,
  },
  backgroundColorLightLavendar: {
    backgroundColor: COLOURS.LIGHT_LAVENDAR,
  },
  backgroundColorLightLavendar_OPACITY30: {
    backgroundColor: COLOURS.LIGHT_LAVENDAR_OPACITY30,
  },
  backgroundColorBoulderOpacity30: {
    backgroundColor: COLOURS.BOULDER_OPACITY_30,
  },
  backgroundColorMagnolia: {
    backgroundColor: COLOURS.MAGNOLIA,
  },
  backgroundColorPrimaryOpacity30: {
    backgroundColor: COLOURS.PRIMARY_COLOR_OPACITY_30,
  },
  backgroundColorPrimaryOpacity20: {
    backgroundColor: COLOURS.PRIMARY_COLOR_OPACITY_20,
  },
  backgroundColorMidGreen: {
    backgroundColor: COLOURS.MID_GREEN,
  },
  backgroundColorLanvanderBlush: {
    backgroundColor: COLOURS.LAVANDER_BLUSH,
  },
  backgroundColorCloudyGrey: {
    backgroundColor: COLOURS.CLOUDY_GREY,
  },
  backgroundColorZeus: {
    backgroundColor: COLOURS.ZEUS_OPACITY_40,
  },
  backgroundColorMirage: {
    backgroundColor: COLOURS.MIRAGE,
  },
  backgroundColorWhiteSmokeOpacity90: {
    backgroundColor: COLOURS.WHITE_SMOKE_OPACITY_90,
  },
  backgroundColorDune: {
    backgroundColor: COLOURS.DUNE,
  },
  backgroundColorDarkGrey: {
    backgroundColor: COLOURS.GREY_DARK,
  },
  backgroundColorGreyOpacity_20: {
    backgroundColor: COLOURS.GREY_20OPACITY,
  },

  backgroundColorGondola: {
    backgroundColor: COLOURS.GONDOLA,
  },
  borderColorHeavyMetal: {
    borderColor: COLOURS.HEAVY_METAL,
  },
  borderColorLavaRed: {
    borderColor: COLOURS.LAVA_RED,
  },
  borderColorWhite: {
    borderColor: COLOURS.PURE_WHITE,
  },
  borderColorDarkGainsboro: {
    borderColor: COLOURS.DARK_GAINSBORO,
  },
  backgroundColorBalticSea: {
    backgroundColor: COLOURS.BALTIC_SEA,
  },
  backgroundColorLavendarLightish: {
    backgroundColor: COLOURS.LAVENDAR_LIGHTISH,
  },

  backgroundColorLightLavaRed: {
    backgroundColor: COLOURS.LIGHT_LAVA_RED,
  },
  backgroundColorSeaGreen: {
    backgroundColor: COLOURS.SEA_GREEN,
  },

  backgroundColorGainsboro: {
    backgroundColor: COLOURS.GAINSBORO,
  },
  backgroundColorPattensBlue: {
    backgroundColor: COLOURS.PATTENS_BLUE,
  },
  backgroundColorLust: {
    backgroundColor: COLOURS.LUST,
  },
  backgroundColorLightishLavendarBlue: {
    backgroundColor: COLOURS.LIGHTISH_LAVENDAR_BLUE,
  },

  // font size
  fontSize8: {
    fontSize: CONSTANTS.Width8,
  },
  fontSize9: {
    fontSize: CONSTANTS.Width9,
  },
  fontSize10: {
    fontSize: CONSTANTS.Width10,
  },
  fontSize11: {
    fontSize: CONSTANTS.Width11,
  },
  fontSize12: {
    fontSize: CONSTANTS.Width12,
  },
  fontSize14: {
    fontSize: CONSTANTS.Width14,
  },
  fontSize16: {
    fontSize: CONSTANTS.Width16,
  },
  fontSize18: {
    fontSize: CONSTANTS.Width18,
  },
  fontSize20: {
    fontSize: CONSTANTS.Width20,
  },
  fontSize22: {
    fontSize: CONSTANTS.Width22,
  },
  fontSize24: {
    fontSize: CONSTANTS.Width24,
  },
  fontSize25: {
    fontSize: CONSTANTS.Width25,
  },
  fontSize28: {
    fontSize: CONSTANTS.Width28,
  },
  fontSize32: {
    fontSize: CONSTANTS.Width32,
  },
  fontSize48: {
    fontSize: CONSTANTS.Width48,
  },
  fontSize56: {
    fontSize: CONSTANTS.Width56,
  },
  fontSize64: {
    fontSize: CONSTANTS.Width64,
  },
  fontSize72: {
    fontSize: CONSTANTS.Width72,
  },

  opacityDisable: {
    opacity: 0.4,
  },

  // line height
  lineHeight8: {
    lineHeight: CONSTANTS.Width8,
  },
  lineHeight10: {
    lineHeight: CONSTANTS.Width10,
  },
  lineHeight12: {
    lineHeight: CONSTANTS.Width12,
  },
  lineHeight13: {
    lineHeight: CONSTANTS.Width13,
  },
  lineHeight14: {
    lineHeight: CONSTANTS.Width14,
  },
  lineHeight15: {
    lineHeight: CONSTANTS.Width15,
  },
  lineHeight16: {
    lineHeight: CONSTANTS.Width16,
  },
  lineHeight17: {
    lineHeight: CONSTANTS.Width17,
  },
  lineHeight18: {
    lineHeight: CONSTANTS.Width18,
  },
  lineHeight19: {
    lineHeight: CONSTANTS.Width19,
  },
  lineHeight20: {
    lineHeight: CONSTANTS.Width20,
  },
  lineHeight21: {
    lineHeight: CONSTANTS.Width21,
  },
  lineHeight22: {
    lineHeight: CONSTANTS.Width22,
  },
  lineHeight23: {
    lineHeight: CONSTANTS.Width23,
  },
  lineHeight24: {
    lineHeight: CONSTANTS.Width24,
  },
  lineHeight25: {
    lineHeight: CONSTANTS.Width25,
  },
  lineHeight26: {
    lineHeight: CONSTANTS.Width26,
  },
  lineHeight28: {
    lineHeight: CONSTANTS.Width28,
  },
  lineHeight29: {
    lineHeight: CONSTANTS.Width29,
  },
  lineHeight30: {
    lineHeight: CONSTANTS.Width30,
  },
  lineHeight32: {
    lineHeight: CONSTANTS.Width32,
  },
  lineHeight36: {
    lineHeight: CONSTANTS.Width36,
  },
  lineHeight40: {
    lineHeight: CONSTANTS.Width40,
  },
  lineHeight48: {
    lineHeight: CONSTANTS.Width48,
  },

  // border width
  // borderWidth2: {
  //   borderWidth: StyleSheet.hairlineWidth * 1,
  // },
  borderWidth3: {
    borderWidth: CONSTANTS.Width1,
  },
  borderWidth4: {
    borderWidth: CONSTANTS.Width2,
  },
  borderWidth6: {
    borderWidth: CONSTANTS.Width4,
  },

  // border Color
  borderColorWhiteOpacity5: {
    borderColor: COLOURS.WHITE_OPACITY_5,
  },
  borderColorWhiteOpacity10: {
    borderColor: COLOURS.WHITE_OPACITY_10,
  },
  borderColorThunder: {
    borderColor: COLOURS.THUNDER,
  },
  borderColorBlackEelOpacity30: {
    borderColor: COLOURS.BLACK_EEL_OPACITY_30,
  },
  borderColorGoldOpacity20: {
    borderColor: COLOURS.GOLD_OPACITY_20,
  },
  borderColorGhoshWhiteOpacity10: {
    borderColor: COLOURS.GHOSH_WHITE_OPACITY_10,
  },
  borderColorBlackEel: {
    borderColor: COLOURS.BLACK_EEL,
  },
  borderColorAmericanSilver: {
    borderColor: COLOURS.AMERICAN_SILVER,
  },
  borderColorLightLavendarBlue: {
    borderColor: COLOURS.LIGHT_LAVENDAR_BLUE,
  },
  borderColorLightishSilver: {
    borderColor: COLOURS.LIGHTISH_SILVER,
  },
  borderColorHookerGreen: {
    borderColor: COLOURS.HOOKER_GREEN,
  },
  borderColorCornFlowerBlue: {
    borderColor: COLOURS.CORN_FLOWER_BLUE,
  },
  borderColorLightPeriwingle: {
    borderColor: COLOURS.LIGHT_PERIWINGLE,
  },

  borderColorMidGreenOpacity30: {
    borderColor: COLOURS.MID_GREEN_OPACITY_30,
  },
  borderColorCharcoal: {
    borderColor: COLOURS.CHARCOAL,
  },
  borderColorSoftPeach: {
    borderColor: COLOURS.SOFT_PEACH,
  },
  borderColorSeaShellBlue: {
    borderColor: COLOURS.SEA_SHELL_BLUE,
  },
  borderColorPrimary: {
    borderColor: COLOURS.PRIMARY_COLOR,
  },
  borderColorLightSilver: {
    borderColor: COLOURS.LIGHT_SILVER,
  },
  borderColorDarkPrimary: {
    borderColor: COLOURS.DARK_PRIMARY,
  },

  // letter spacing
  letterSpacing3: {
    letterSpacing: 0.3,
  },

  //complete margin
  margin6: {
    margin: CONSTANTS.Width6,
  },
  margin8: {
    margin: CONSTANTS.Width8,
  },
  margin12: {
    margin: CONSTANTS.Width12,
  },
  margin16: {
    margin: CONSTANTS.Width16,
  },
  margin20: {
    margin: CONSTANTS.Width20,
  },

  marginTopMinus175: {
    marginTop: -CONSTANTS.Width175,
  },
  marginTopMinus4: {
    marginTop: -CONSTANTS.Width4,
  },
  marginTopMinus8: {
    marginTop: -CONSTANTS.Width8,
  },
  marginTopMinus11: {
    marginTop: -CONSTANTS.Width11,
  },
  marginTopMinus12: {
    marginTop: -CONSTANTS.Width12,
  },
  marginTopMinus16: {
    marginTop: -CONSTANTS.Width16,
  },
  marginTopMinus18: {
    marginTop: -CONSTANTS.Width18,
  },
  marginTopMinus20: {
    marginTop: -CONSTANTS.Width20,
  },
  marginTopMinus30: {
    marginTop: -CONSTANTS.Width30,
  },
  marginTopMinus64: {
    marginTop: -CONSTANTS.Width64,
  },
  marginTopMinus72: {
    marginTop: -CONSTANTS.Width72,
  },
  marginTopMinus80: {
    marginTop: -CONSTANTS.Width80,
  },
  marginTopMinus88: {
    marginTop: -CONSTANTS.Width88,
  },
  marginTop1: {
    marginTop: CONSTANTS.Width1,
  },
  marginTop2: {
    marginTop: CONSTANTS.Width2,
  },
  marginTop3: {
    marginTop: CONSTANTS.Width3,
  },
  marginTop4: {
    marginTop: CONSTANTS.Width4,
  },
  marginTop6: {
    marginTop: CONSTANTS.Width6,
  },
  marginTop8: {
    marginTop: CONSTANTS.Width8,
  },

  //margin top
  marginTop10: {
    marginTop: CONSTANTS.Width10,
  },
  marginTop12: {
    marginTop: CONSTANTS.Width12,
  },
  marginTop14: {
    marginTop: CONSTANTS.Width14,
  },
  marginTop16: {
    marginTop: CONSTANTS.Width16,
  },

  marginTop18: {
    marginTop: CONSTANTS.Width18,
  },
  marginTop20: {
    marginTop: CONSTANTS.Width20,
  },
  marginTop22: {
    marginTop: CONSTANTS.Width22,
  },
  marginTop24: {
    marginTop: CONSTANTS.Width24,
  },
  marginTop28: {
    marginTop: CONSTANTS.Width28,
  },
  marginTop30: {
    marginTop: CONSTANTS.Width30,
  },
  marginTop32: {
    marginTop: CONSTANTS.Width32,
  },
  marginTop40: {
    marginTop: CONSTANTS.Width40,
  },
  marginTop42: {
    marginTop: CONSTANTS.Width42,
  },
  marginTop48: {
    marginTop: CONSTANTS.Width48,
  },
  marginTop50: {
    marginTop: CONSTANTS.Width50,
  },
  marginTop56: {
    marginTop: CONSTANTS.Width56,
  },
  marginTop62: {
    marginTop: CONSTANTS.Width62,
  },
  marginTop64: {
    marginTop: CONSTANTS.Width64,
  },
  marginTop70: {
    marginTop: CONSTANTS.Width70,
  },
  marginTop71: {
    marginTop: CONSTANTS.Width71,
  },
  marginTop80: {
    marginTop: CONSTANTS.Width80,
  },
  marginTop136: {
    marginTop: CONSTANTS.Width136,
  },

  //padding bottom
  paddingBottom2: {
    paddingBottom: CONSTANTS.Width2,
  },
  paddingBottom4: {
    paddingBottom: CONSTANTS.Width4,
  },
  paddingBottom8: {
    paddingBottom: CONSTANTS.Width8,
  },
  paddingBottom16: {
    paddingBottom: CONSTANTS.Width16,
  },
  paddingBottom20: {
    paddingBottom: CONSTANTS.Width20,
  },
  paddingBottom24: {
    paddingBottom: CONSTANTS.Width24,
  },
  paddingBottom32: {
    paddingBottom: CONSTANTS.Width32,
  },
  paddingBottom48: {
    paddingBottom: CONSTANTS.Width48,
  },
  paddingBottom56: {
    paddingBottom: CONSTANTS.Width56,
  },
  paddingBottom100: {
    paddingBottom: CONSTANTS.Width100,
  },

  // margin vertical
  marginVerticalMinus1: {
    marginVertical: -CONSTANTS.Width1,
  },
  marginVerticalMinus2: {
    marginVertical: -CONSTANTS.Width2,
  },
  marginVertical4: {
    marginVertical: CONSTANTS.Width4,
  },
  marginVertical6: {
    marginVertical: CONSTANTS.Width6,
  },
  marginVertical8: {
    marginVertical: CONSTANTS.Width8,
  },
  marginVertical10: {
    marginVertical: CONSTANTS.Width10,
  },
  marginVertical12: {
    marginVertical: CONSTANTS.Width12,
  },
  marginVertical16: {
    marginVertical: CONSTANTS.Width16,
  },
  marginVertical24: {
    marginVertical: CONSTANTS.Width24,
  },

  // margin horizontal
  marginHorizontalMinus16: {
    marginHorizontal: -CONSTANTS.Width16,
  },
  marginHorizontal0: {
    marginHorizontal: CONSTANTS.Width0,
  },
  marginHorizontal4: {
    marginHorizontal: CONSTANTS.Width4,
  },
  marginHorizontal8: {
    marginHorizontal: CONSTANTS.Width8,
  },
  marginHorizontal16: {
    marginHorizontal: CONSTANTS.Width16,
  },
  marginHorizontal20: {
    marginHorizontal: CONSTANTS.Width20,
  },
  marginHorizontal24: {
    marginHorizontal: CONSTANTS.Width24,
  },

  // marginBottom
  marginBottom2: {
    marginBottom: CONSTANTS.Width2,
  },
  marginBottom4: {
    marginBottom: CONSTANTS.Width4,
  },
  marginBottom6: {
    marginBottom: CONSTANTS.Width6,
  },
  marginBottom8: {
    marginBottom: CONSTANTS.Width8,
  },
  marginBottom10: {
    marginBottom: CONSTANTS.Width10,
  },
  marginBottom12: {
    marginBottom: CONSTANTS.Width12,
  },
  marginBottom14: {
    marginBottom: CONSTANTS.Width14,
  },
  marginBottom16: {
    marginBottom: CONSTANTS.Width16,
  },
  marginBottom18: {
    marginBottom: CONSTANTS.Width18,
  },
  marginBottom20: {
    marginBottom: CONSTANTS.Width20,
  },
  marginBottom24: {
    marginBottom: CONSTANTS.Width24,
  },
  marginBottom30: {
    marginBottom: CONSTANTS.Width30,
  },
  marginBottom32: {
    marginBottom: CONSTANTS.Width32,
  },
  marginBottom34: {
    marginBottom: CONSTANTS.Width34,
  },
  marginBottom38: {
    marginBottom: CONSTANTS.Width38,
  },
  marginBottom40: {
    marginBottom: CONSTANTS.Width40,
  },
  marginBottom42: {
    marginBottom: CONSTANTS.Width42,
  },
  marginBottom48: {
    marginBottom: CONSTANTS.Width48,
  },
  marginBottom54: {
    marginBottom: CONSTANTS.Width54,
  },
  marginBottom64: {
    marginBottom: CONSTANTS.Width64,
  },
  marginBottom72: {
    marginBottom: CONSTANTS.Width72,
  },
  marginBottom80: {
    marginBottom: CONSTANTS.Width80,
  },
  marginBottom84: {
    marginBottom: CONSTANTS.Width84,
  },
  marginBottom100: {
    marginBottom: CONSTANTS.Width100,
  },
  marginBottom147: {
    marginBottom: CONSTANTS.Width147,
  },

  // margin left
  marginLeftMinus32: {
    marginLeft: -CONSTANTS.Width32,
  },
  marginLeftMinus25: {
    marginLeft: -CONSTANTS.Width25,
  },
  marginLeftMinus24: {
    marginLeft: -CONSTANTS.Width24,
  },
  marginLeftMinus16: {
    marginLeft: -CONSTANTS.Width16,
  },
  marginLeft1: {
    marginLeft: CONSTANTS.Width1,
  },
  marginLeft4: {
    marginLeft: CONSTANTS.Width4,
  },
  marginLeft5: {
    marginLeft: CONSTANTS.Width5,
  },
  marginLeft6: {
    marginLeft: CONSTANTS.Width6,
  },
  marginLeft8: {
    marginLeft: CONSTANTS.Width8,
  },
  marginLeft12: {
    marginLeft: CONSTANTS.Width12,
  },
  marginLeft16: {
    marginLeft: CONSTANTS.Width16,
  },
  marginLeft18: {
    marginLeft: CONSTANTS.Width18,
  },
  marginLeft22: {
    marginLeft: CONSTANTS.Width22,
  },
  marginLeft24: {
    marginLeft: CONSTANTS.Width24,
  },
  marginLeft20: {
    marginLeft: CONSTANTS.Width20,
  },
  marginLeft40: {
    marginLeft: CONSTANTS.Width40,
  },
  marginLeft80: {
    marginLeft: CONSTANTS.Width80,
  },
  marginLeft81: {
    marginLeft: CONSTANTS.Width81,
  },
  marginLeft120: {
    marginLeft: CONSTANTS.Width120,
  },
  // margin right
  marginRightMinus16: {
    marginRight: -CONSTANTS.Width16,
  },
  marginRightMinus12: {
    marginRight: -CONSTANTS.Width12,
  },
  marginRightMinus1: {
    marginRight: -CONSTANTS.Width1,
  },
  marginRight2: {
    marginRight: CONSTANTS.Width2,
  },
  marginRight4: {
    marginRight: CONSTANTS.Width4,
  },
  marginRight5: {
    marginRight: CONSTANTS.Width5,
  },
  marginRight6: {
    marginRight: CONSTANTS.Width6,
  },
  marginRight12: {
    marginRight: CONSTANTS.Width12,
  },
  marginRight16: {
    marginRight: CONSTANTS.Width16,
  },
  marginRight24: {
    marginRight: CONSTANTS.Width24,
  },
  marginRight32: {
    marginRight: CONSTANTS.Width32,
  },
  marginRight48: {
    marginRight: CONSTANTS.Width48,
  },
  marginRight8: {
    marginRight: CONSTANTS.Width8,
  },

  // padding right
  paddingRight20: {
    paddingRight: CONSTANTS.Width20,
  },

  // padding top
  paddingTop2: {
    paddingTop: CONSTANTS.Width2,
  },
  paddingTop4: {
    paddingTop: CONSTANTS.Width4,
  },
  paddingTop6: {
    paddingTop: CONSTANTS.Width6,
  },
  paddingTop8: {
    paddingTop: CONSTANTS.Width8,
  },
  paddingTop10: {
    paddingTop: CONSTANTS.Width10,
  },
  paddingTop12: {
    paddingTop: CONSTANTS.Width12,
  },
  paddingTop14: {
    paddingTop: CONSTANTS.Width14,
  },
  paddingTop16: {
    paddingTop: CONSTANTS.Width16,
  },
  paddingTop18: {
    paddingTop: CONSTANTS.Width18,
  },
  paddingTop20: {
    paddingTop: CONSTANTS.Width20,
  },
  paddingTop24: {
    paddingTop: CONSTANTS.Width24,
  },
  paddingTop25: {
    paddingTop: CONSTANTS.Width25,
  },
  paddingTop40: {
    paddingTop: CONSTANTS.Width40,
  },

  paddingTop50: {
    paddingTop: CONSTANTS.Width50,
  },
  paddingTop57: {
    paddingTop: CONSTANTS.Width57,
  },
  paddingTop182: {
    paddingTop: CONSTANTS.Width182,
  },
  paddingTop210: {
    paddingTop: CONSTANTS.Width210,
  },

  // padding left
  paddingLeft258: {
    paddingLeft: CONSTANTS.Width258,
  },

  // height width
  heightWidth290: {
    width: CONSTANTS.Width290,
    height: CONSTANTS.Width290,
  },

  // TouchableOpacity hitslops
  hitSlop5: {
    top: CONSTANTS.Width5,
    bottom: CONSTANTS.Width5,
    left: CONSTANTS.Width5,
    right: CONSTANTS.Width5,
  },
  hitSlopVertical5: {
    top: CONSTANTS.Width5,
    bottom: CONSTANTS.Width5,
    left: 0,
    right: 0,
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

  // border width
  borderHairlineWidth3: {
    borderWidth: StyleSheet.hairlineWidth * 3,
  },
  borderWidth2: {
    borderWidth: StyleSheet.hairlineWidth * 2,
  },
  borderWidth1: {
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

  // borderDash: {
  //   borderStyle: 'dotted',
  //   borderRadius: 4,
  // },

  // dottedBorder: {
  //   borderStyle: 'dashed',
  // },

  // border bottom width
  borderBottomHairlineWidth1: {
    borderBottomWidth: StyleSheet.hairlineWidth * 1,
  },
  borderBottomHairlineWidth2: {
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
  },
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
  borderTopHairlineWidth2: {
    borderTopWidth: StyleSheet.hairlineWidth * 2,
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

  // margin bottom
  marginBottomMinus4: {
    marginBottom: CONSTANTS.WidthMinus4,
  },
  marginBottomMinus14: {
    marginBottom: CONSTANTS.WidthMinus14,
  },
  marginBottomMinus24: {
    marginBottom: CONSTANTS.WidthMinus24,
  },
  // marginLeft
  marginLeftMinus8: {
    marginLeft: CONSTANTS.WidthMinus8,
  },
  marginLeft38: {
    marginLeft: CONSTANTS.Width38,
  },

  // padding right

  paddingRight38: {
    paddingRight: CONSTANTS.Width38,
  },
  paddingRight81: {
    paddingRight: CONSTANTS.Width81,
  },

  // padding left
  paddingLeft2: {
    paddingLeft: CONSTANTS.Width2,
  },

  // width
  hairlineWidth1: {
    width: StyleSheet.hairlineWidth * 1,
  },
  hairlineWidth2: {
    width: StyleSheet.hairlineWidth * 2,
  },
  width0: {
    width: CONSTANTS.Width0,
  },
  width1: {
    width: CONSTANTS.Width1,
  },
  width2: {
    width: CONSTANTS.Width2,
  },
  width8: {
    width: CONSTANTS.Width8,
  },
  width9: {
    width: CONSTANTS.Width9,
  },
  width16: {
    width: CONSTANTS.Width16,
  },
  width20: {
    width: CONSTANTS.Width20,
  },
  width22: {
    width: CONSTANTS.Width22,
  },
  width24: {
    width: CONSTANTS.Width24,
  },
  width27: {
    width: CONSTANTS.Width27,
  },
  width28: {
    width: CONSTANTS.Width28,
  },
  width30: {
    width: CONSTANTS.Width30,
  },
  width32: {
    width: CONSTANTS.Width32,
  },
  width36: {
    width: CONSTANTS.Width36,
  },
  Width43: {
    width: CONSTANTS.Width43,
  },
  Width44: {
    width: CONSTANTS.Width44,
  },
  Width46: {
    width: CONSTANTS.Width46,
  },
  width48: {
    width: CONSTANTS.Width48,
  },
  width52: {
    width: CONSTANTS.Width52,
  },
  Width55: {
    width: CONSTANTS.Width55,
  },
  Width56: {
    width: CONSTANTS.Width56,
  },
  width62: {
    width: CONSTANTS.Width62,
  },
  width64: {
    width: CONSTANTS.Width64,
  },
  width65: {
    width: CONSTANTS.Width65,
  },
  width68: {
    width: CONSTANTS.Width68,
  },
  Width72: {
    width: CONSTANTS.Width72,
  },
  Width76: {
    width: CONSTANTS.Width76,
  },
  Width86: {
    width: CONSTANTS.Width86,
  },
  Width87: {
    width: CONSTANTS.Width87,
  },
  Width88: {
    width: CONSTANTS.Width88,
  },
  Width89: {
    width: CONSTANTS.Width89,
  },
  Width90: {
    width: CONSTANTS.Width90,
  },
  Width95: {
    width: CONSTANTS.Width95,
  },
  Width99: {
    width: CONSTANTS.Width99,
  },
  width123: {
    width: CONSTANTS.Width123,
  },
  width132: {
    width: CONSTANTS.Width132,
  },
  width138: {
    width: CONSTANTS.Width138,
  },
  width156: {
    width: CONSTANTS.Width156,
  },
  width160: {
    width: CONSTANTS.Width160,
  },
  width168: {
    width: CONSTANTS.Width168,
  },
  width174: {
    width: CONSTANTS.Width174,
  },
  width190: {
    width: CONSTANTS.Width190,
  },
  width197: {
    width: CONSTANTS.Width197,
  },
  width212: {
    width: CONSTANTS.Width212,
  },
  width220: {
    width: CONSTANTS.Width220,
  },
  width228: {
    width: CONSTANTS.Width228,
  },
  width234: {
    width: CONSTANTS.Width234,
  },
  width288: {
    width: CONSTANTS.Width288,
  },
  width312: {
    width: CONSTANTS.Width312,
  },
  width328: {
    width: CONSTANTS.Width328,
  },
  width320: {
    width: CONSTANTS.Width320,
  },

  // height
  height1: {
    height: CONSTANTS.Width1,
  },
  height4: {
    height: CONSTANTS.Width4,
  },
  height8: {
    height: CONSTANTS.Width8,
  },
  height16: {
    height: CONSTANTS.Width16,
  },
  height17: {
    height: CONSTANTS.Width17,
  },
  height20: {
    height: CONSTANTS.Width20,
  },
  height22: {
    height: CONSTANTS.Width22,
  },
  height32: {
    height: CONSTANTS.Width32,
  },
  height24: {
    height: CONSTANTS.Width24,
  },
  height28: {
    height: CONSTANTS.Width28,
  },
  height36: {
    height: CONSTANTS.Width36,
  },
  height38: {
    height: CONSTANTS.Width38,
  },
  height40: {
    height: CONSTANTS.Width40,
  },
  height43: {
    height: CONSTANTS.Width43,
  },
  height46: {
    height: CONSTANTS.Width46,
  },
  height48: {
    height: CONSTANTS.Width48,
  },
  height62: {
    height: CONSTANTS.Width62,
  },
  height64: {
    height: CONSTANTS.Width64,
  },
  height80: {
    height: CONSTANTS.Width80,
  },
  height83: {
    height: CONSTANTS.Width83,
  },
  height88: {
    height: CONSTANTS.Width88,
  },
  height112: {
    height: CONSTANTS.Width112,
  },
  height120: {
    height: CONSTANTS.Width120,
  },
  height150: {
    height: CONSTANTS.Width150,
  },
  heigh180: {
    height: CONSTANTS.Width180,
  },
  height200: {
    height: CONSTANTS.Width200,
  },
  height208: {
    height: CONSTANTS.Width208,
  },
  height224: {
    height: CONSTANTS.Width224,
  },
  height307: {
    height: CONSTANTS.Width307,
  },
  heigh540: {
    height: CONSTANTS.Width540,
  },
  height660: {
    height: CONSTANTS.Width660,
  },

  //height width
  heightWidth4: {
    width: CONSTANTS.Width4,
    height: CONSTANTS.Width4,
  },
  heightWidth6: {
    width: CONSTANTS.Width6,
    height: CONSTANTS.Width6,
  },
  heightWidth14: {
    width: CONSTANTS.Width14,
    height: CONSTANTS.Width14,
  },
  heightWidth15: {
    width: CONSTANTS.Width15,
    height: CONSTANTS.Width15,
  },
  heightWidth16: {
    width: CONSTANTS.Width16,
    height: CONSTANTS.Width16,
  },
  heightWidth24: {
    width: CONSTANTS.Width24,
    height: CONSTANTS.Width24,
  },
  heightWidth28: {
    width: CONSTANTS.Width28,
    height: CONSTANTS.Width28,
  },
  heightWidth30: {
    width: CONSTANTS.Width30,
    height: CONSTANTS.Width30,
  },
  heightWidth32: {
    width: CONSTANTS.Width32,
    height: CONSTANTS.Width32,
  },
  heightWidth40: {
    width: CONSTANTS.Width40,
    height: CONSTANTS.Width40,
  },
  heightWidth64: {
    width: CONSTANTS.Width64,
    height: CONSTANTS.Width64,
  },
  width10: {
    width: CONSTANTS.Width10,
  },
  width12: {
    width: CONSTANTS.Width12,
  },
  width100: {
    width: CONSTANTS.Width100,
  },
  width106: {
    width: CONSTANTS.Width106,
  },
  width118: {
    width: CONSTANTS.Width118,
  },
  width360: {
    width: CONSTANTS.Width360,
  },

  // height
  hairlineHeight1: {
    height: StyleSheet.hairlineWidth * 1,
  },
  hairlineHeight2: {
    height: StyleSheet.hairlineWidth * 2,
  },
  hairlineHeight3: {
    height: StyleSheet.hairlineWidth * 3,
  },
  height2: {
    height: CONSTANTS.Width2,
  },
  height9: {
    height: CONSTANTS.Width9,
  },
  height10: {
    height: CONSTANTS.Width10,
  },
  height12: {
    height: CONSTANTS.Width12,
  },
  height23: {
    height: CONSTANTS.Width23,
  },
  height100: {
    height: CONSTANTS.Width100,
  },
  height160: {
    height: CONSTANTS.Width160,
  },
  height168: {
    height: CONSTANTS.Width168,
  },
  height179: {
    height: CONSTANTS.Width179,
  },
  height188: {
    height: CONSTANTS.Width188,
  },
  height191: {
    height: CONSTANTS.Width191,
  },
  height262: {
    height: CONSTANTS.Width262,
  },
  height287: {
    height: CONSTANTS.Width287,
  },

  // opacity
  opacity24: {
    opacity: CONSTANTS.opacity24,
  },
  opacity48: {
    opacity: CONSTANTS.opacity48,
  },
  opacity50: {
    opacity: CONSTANTS.opacity50,
  },
  opacity60: {
    opacity: CONSTANTS.opacity60,
  },
  opacity64: {
    opacity: CONSTANTS.opacity64,
  },
  opacity70: {
    opacity: CONSTANTS.opacity70,
  },
  opacity80: {
    opacity: CONSTANTS.opacity80,
  },
  opacity85: {
    opacity: CONSTANTS.opacity85,
  },
  opacity90: {
    opacity: CONSTANTS.opacity90,
  },
  // padding horizontal
  paddingHorizontal4: {
    paddingHorizontal: CONSTANTS.Width4,
  },
  paddingHorizontal6: {
    paddingHorizontal: CONSTANTS.Width6,
  },
  paddingHorizontal7: {
    paddingHorizontal: CONSTANTS.Width7,
  },
  paddingHorizontal8: {
    paddingHorizontal: CONSTANTS.Width8,
  },
  paddingHorizontal10: {
    paddingHorizontal: CONSTANTS.Width10,
  },
  paddingHorizontal12: {
    paddingHorizontal: CONSTANTS.Width12,
  },
  paddingHorizontal14: {
    paddingHorizontal: CONSTANTS.Width14,
  },
  paddingHorizontal16: {
    paddingHorizontal: CONSTANTS.Width16,
  },
  paddingHorizontal18: {
    paddingHorizontal: CONSTANTS.Width18,
  },
  paddingHorizontal20: {
    paddingHorizontal: CONSTANTS.Width20,
  },
  paddingHorizontal24: {
    paddingHorizontal: CONSTANTS.Width24,
  },
  paddingHorizontal26: {
    paddingHorizontal: CONSTANTS.Width26,
  },
  paddingHorizontal31: {
    paddingHorizontal: CONSTANTS.Width31,
  },

  // padding left
  paddingLeft4: {
    paddingLeft: CONSTANTS.Width4,
  },
  paddingLeft8: {
    paddingLeft: CONSTANTS.Width8,
  },
  paddingLeft12: {
    paddingLeft: CONSTANTS.Width12,
  },
  paddingLeft16: {
    paddingLeft: CONSTANTS.Width16,
  },
  paddingLeft18: {
    paddingLeft: CONSTANTS.Width18,
  },
  paddingLeft22: {
    paddingLeft: CONSTANTS.Width22,
  },
  paddingLeft24: {
    paddingLeft: CONSTANTS.Width24,
  },
  paddingLeft26: {
    paddingLeft: CONSTANTS.Width26,
  },
  paddingLeft48: {
    paddingLeft: CONSTANTS.Width48,
  },
  paddingLeft49: {
    paddingLeft: CONSTANTS.Width49,
  },
  paddingLeft78: {
    paddingLeft: CONSTANTS.Width78,
  },
  paddingLeft100: {
    paddingLeft: CONSTANTS.Width100,
  },
  paddingLeft242: {
    paddingLeft: CONSTANTS.Width242,
  },

  // padding right
  paddingRight2: {
    paddingRight: CONSTANTS.Width2,
  },
  paddingRight4: {
    paddingRight: CONSTANTS.Width4,
  },
  paddingRight6: {
    paddingRight: CONSTANTS.Width6,
  },
  paddingRight8: {
    paddingRight: CONSTANTS.Width10,
  },
  paddingRight10: {
    paddingRight: CONSTANTS.Width10,
  },
  paddingRight12: {
    paddingRight: CONSTANTS.Width12,
  },
  paddingRight16: {
    paddingRight: CONSTANTS.Width16,
  },
  paddingRight24: {
    paddingRight: CONSTANTS.Width24,
  },
  paddingRight28: {
    paddingRight: CONSTANTS.Width28,
  },
  paddingRight30: {
    paddingRight: CONSTANTS.Width30,
  },

  // padding vertical
  paddingVertical2: {
    paddingVertical: CONSTANTS.Width2,
  },
  paddingVertical4: {
    paddingVertical: CONSTANTS.Width4,
  },
  paddingVertical6: {
    paddingVertical: CONSTANTS.Width6,
  },
  paddingVertical8: {
    paddingVertical: CONSTANTS.Width8,
  },
  paddingVertical9: {
    paddingVertical: CONSTANTS.Width9,
  },
  paddingVertical10: {
    paddingVertical: CONSTANTS.Width10,
  },
  paddingVertical12: {
    paddingVertical: CONSTANTS.Width12,
  },
  paddingVertical14: {
    paddingVertical: CONSTANTS.Width14,
  },
  paddingVertical16: {
    paddingVertical: CONSTANTS.Width16,
  },
  paddingVertical20: {
    paddingVertical: CONSTANTS.Width20,
  },

  // padding
  padding2: {
    padding: CONSTANTS.Width2,
  },
  padding3: {
    padding: CONSTANTS.Width3,
  },
  padding4: {
    padding: CONSTANTS.Width4,
  },
  padding6: {
    padding: CONSTANTS.Width6,
  },
  padding8: {
    padding: CONSTANTS.Width8,
  },
  padding10: {
    padding: CONSTANTS.Width10,
  },
  padding12: {
    padding: CONSTANTS.Width12,
  },
  padding16: {
    padding: CONSTANTS.Width16,
  },
  padding24: {
    padding: CONSTANTS.Width24,
  },

  borderRadius4: {
    borderRadius: CONSTANTS.Width4,
  },
  borderRadius6: {
    borderRadius: CONSTANTS.Width6,
  },
  borderRadius8: {
    borderRadius: CONSTANTS.Width8,
  },
  borderRadius10: {
    borderRadius: CONSTANTS.Width10,
  },
  borderRadius12: {
    borderRadius: CONSTANTS.Width12,
  },
  borderRadius16: {
    borderRadius: CONSTANTS.Width16,
  },
  borderRadius14: {
    borderRadius: CONSTANTS.Width14,
  },
  borderRadius20: {
    borderRadius: CONSTANTS.Width20,
  },
  borderRadius22: {
    borderRadius: CONSTANTS.Width22,
  },
  borderRadius24: {
    borderRadius: CONSTANTS.Width24,
  },
  borderRadius28: {
    borderRadius: CONSTANTS.Width28,
  },
  borderRadius25: {
    borderRadius: CONSTANTS.Width25,
  },
  borderRadius32: {
    borderRadius: CONSTANTS.Width32,
  },
  borderRadius40: {
    borderRadius: CONSTANTS.Width40,
  },
  borderRadius90: {
    borderRadius: CONSTANTS.Width90,
  },
  borderRadius100: {
    borderRadius: CONSTANTS.Width100,
  },
  borderTopLeftRadius12: {
    borderTopLeftRadius: CONSTANTS.Width12,
  },
  borderTopLeftRadius32: {
    borderTopLeftRadius: CONSTANTS.Width32,
  },
  borderTopLeftRadius16: {
    borderTopLeftRadius: CONSTANTS.Width16,
  },
  borderTopRightRadius12: {
    borderTopRightRadius: CONSTANTS.Width12,
  },
  borderTopRightRadius16: {
    borderTopRightRadius: CONSTANTS.Width16,
  },
  borderTopRightRadius32: {
    borderTopRightRadius: CONSTANTS.Width32,
  },
  borderBottomRightRadius16: {
    borderBottomRightRadius: CONSTANTS.Width16,
  },
  borderBottomRightRadius20: {
    borderBottomRightRadius: CONSTANTS.Width20,
  },
  borderBottomLeftRadius16: {
    borderBottomLeftRadius: CONSTANTS.Width16,
  },
  borderBottomLeftRadius20: {
    borderBottomLeftRadius: CONSTANTS.Width20,
  },
  borderTopRightRadius8: {
    borderTopRightRadius: CONSTANTS.Width8,
  },
  borderTopLeftRadius8: {
    borderTopLeftRadius: CONSTANTS.Width8,
  },
  borderBottomLeftRadius4: {
    borderBottomLeftRadius: CONSTANTS.Width4,
  },
  borderBottomRightRadius4: {
    borderBottomRightRadius: CONSTANTS.Width4,
  },
  borderBottomLeftRadius8: {
    borderBottomLeftRadius: CONSTANTS.Width8,
  },
  borderBottomRightRadius8: {
    borderBottomRightRadius: CONSTANTS.Width8,
  },

  //Border bottom color
  borderBottomColorPrimary: {
    borderBottomColor: COLOURS.PRIMARY_COLOR,
  },
  borderBottomColorLightSilver: {
    borderBottomColor: COLOURS.LIGHT_SILVER,
  },

  // maxWidth
  maxWidth65: {
    width: CONSTANTS.Width65,
  },
  maxWidth80: {
    maxWidth: CONSTANTS.Width80,
  },
  maxWidth95: {
    maxWidth: CONSTANTS.Width95,
  },
  maxWidth114: {
    width: CONSTANTS.Width114,
  },
  maxWidth128: {
    width: CONSTANTS.Width128,
  },
  width236: {
    width: CONSTANTS.Width236,
  },
  width240: {
    width: CONSTANTS.Width240,
  },
  width245: {
    width: CONSTANTS.Width245,
  },
  width270: {
    width: CONSTANTS.Width270,
  },
  width268: {
    width: CONSTANTS.Width268,
  },

  //maxheight
  maxHeight70: {
    maxHeight: '70%',
  },
  maxHeight75: {
    maxHeight: '75%',
  },
  maxHeight80: {
    maxHeight: '80%',
  },
  maxHeight90: {
    maxHeight: '90%',
  },
  // right
  right12: {
    right: CONSTANTS.Width12,
  },
  right16: {
    right: CONSTANTS.Width16,
  },
  // bottom
  bottom5: {
    bottom: CONSTANTS.Width5,
  },
  bottom7: {
    bottom: CONSTANTS.Width7,
  },
  bottom8: {
    bottom: CONSTANTS.Width8,
  },
  bottom15: {
    bottom: CONSTANTS.Width15,
  },
  bottom30: {
    bottom: CONSTANTS.Width30,
  },
  bottom75: {
    bottom: CONSTANTS.Width75,
  },

  // height dimension styles
  heightOnDeviceHeight256: {
    height: CONSTANTS.Height * (256 / 760),
  },
  marginTopOnHeight110: {
    marginTop: CONSTANTS.Height * (110 / 760),
  },
  top14: {
    top: CONSTANTS.Width14,
  },
  top16: {
    top: CONSTANTS.Width16,
  },
  customModal: {
    height: CONSTANTS.Height,
    width: CONSTANTS.Width,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  top43: {
    top: CONSTANTS.Width43,
  },
  fullHeight60: {
    height: '60%',
  },
  fullHeight65: {
    height: '65%',
  },
  fullHeight70: {
    height: '70%',
  },
  fullHeight75: {
    height: '75%',
  },
  fullHeight80: {
    height: '80%',
  },
  fullHeight90: {
    height: '90%',
  },
  fullHeight: {
    height: '100%',
  },

  leftRight0: {
    left: 0,
    right: 0,
  },

  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.16,
    shadowRadius: 4,
    elevation: 1,
  },
  cardShadowLite: {
    elevation: 1,
  },
  colorChineseBlack: {
    color: COLOURS.CHINESE_BLACK,
  },
  colorLightSilver: {
    color: COLOURS.LIGHT_SILVER,
  },
  //background color
  backgroundColorPureBlack: {
    backgroundColor: COLOURS.PURE_BLACK,
  },
  backgroundColorPlatinum: {
    backgroundColor: COLOURS.PLATINUM,
  },

  //border color
  borderColorGainsboro: {
    borderColor: COLOURS.GAINSBORO,
  },

  // Risk profile styles
  riskProfileImage: {
    width: scaleWidth(328),
    height: scaleWidth(301),
  },
  riskProfileProgress: {
    width: scaleWidth(52),
    height: scaleWidth(4),
    borderRadius: 100,
    marginRight: scaleWidth(9),
  },
  riskProfileCheckBox: {
    paddingHorizontal: scaleWidth(16),
    paddingVertical: scaleWidth(26),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: scaleWidth(16),
    marginBottom: scaleWidth(16),
    borderColor: '#D9D9D9',
  },
});
