import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback, FlatList, Dimensions } from 'react-native';
import {styles} from "./SettingsButton"
const BottomSheet = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('C°');

  const handleOverlayPress = () => {
    setModalVisible(false);
  };

  const handleOptionPress = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  const options = [
    { id: 'C°', label: 'C°' },
    { id: 'F°', label: 'F°' },
  ];

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
      <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center' }}>
        <Text style={styles.buttonText}>Temp Unit  </Text>
        <Text style={styles.defaultvalueonbutton}>{selectedOption} &gt; </Text>
        </View>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={handleOverlayPress}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={styles.bottomSheet}>
          <Text style={styles.bottomSheetTitle}>Select your Temp Unit</Text>
          <FlatList
            data={options}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.option} onPress={() => handleOptionPress(item.label)}>
                <Text style={[styles.optionText, selectedOption === item.label && styles.selectedOptionText]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </>
  );
};

export default BottomSheet;