import React, {useState} from 'react';
import {Switch as RNSwitch, ViewStyle} from 'react-native';
import {Units} from '../../types';

type SwitchProps = {
  onChange: () => void;
  value: string;
  style: ViewStyle;
};

const Switch: React.FC<SwitchProps> = ({onChange, value, style}) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(
    () => value === Units.metric,
  );

  const toggleSwitch = (enabled: boolean) => {
    setIsEnabled(enabled);
    onChange();
  };
  return (
    <RNSwitch
      trackColor={{false: '#468498', true: '#468498'}}
      thumbColor="#fff"
      ios_backgroundColor="#468498"
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={style}
    />
  );
};

export default Switch;
