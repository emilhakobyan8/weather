import React from 'react';
import RNModal from 'react-native-modal';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Modal.styles';

Icon.loadFont();

type ModalProps = {
  isVisible: boolean;
  closeModal: () => void;
  children: React.ReactElement;
};

const Modal: React.FC<ModalProps> = ({isVisible, closeModal, children}) => {
  return (
    <RNModal
      isVisible={isVisible}
      coverScreen={true}
      animationIn="fadeIn"
      animationOut="fadeOut"
      useNativeDriver={true}
      useNativeDriverForBackdrop={true}
      backdropColor="#000"
      backdropOpacity={1}
      style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={closeModal}>
            <Icon name="close" color="white" size={30} />
          </Pressable>
        </View>
        {children}
      </View>
    </RNModal>
  );
};

export default Modal;
