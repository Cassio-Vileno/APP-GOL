import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { TabAnimatedViewProps } from './tab.routes';
import { theme } from '../theme/default.theme';
import { RFValue } from '../utils/normalize';

export const AnimatedTabBarBar = styled(Animated.View) <TabAnimatedViewProps>`
  left: 15px;
  width: ${props => props.width}px;
  height: 3px;
  background-color: ${theme.tabNavigator.activeTintColor};
  transform: translate(${props => props.tabOffsetValue}px);
  position: absolute;
  bottom: ${RFValue(62)}px;
`;
