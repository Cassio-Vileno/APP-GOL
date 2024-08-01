import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  width?: number;
  height?: number;
  color?: string;
  children?: React.ReactNode;
  value?: string;
  loading?: boolean;
  disabled?: boolean;
}
