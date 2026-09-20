import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Based on standard width
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 800;

export const scaleWidth = (size: number): number => (width / guidelineBaseWidth) * size;
export const scaleHeight = (size: number): number => (height / guidelineBaseHeight) * size;
