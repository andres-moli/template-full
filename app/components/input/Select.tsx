import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import {useColor} from '../../Constants/Color';
import { Ionicons } from '@expo/vector-icons';
const { color } = useColor();
interface SelectProps {
  options: string[];
  placeholder?: string;
  onSelect: (selectedOption: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, placeholder, onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsVisible(false);
    setSearchTerm('');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectBox}
        onPress={() => setIsVisible(true)}
      >
        <Text style={styles.selectText}>
          {selectedOption ? selectedOption : placeholder}
        </Text>
      </TouchableOpacity>

      <Modal
        transparent
        animationType="slide"
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color={color.lightPink} style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Buscar..."
                placeholderTextColor={color.lightPink}
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
            </View>
            <FlatList
              data={filteredOptions}
              keyExtractor={(item) => item}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item)}
                >
                  <View style={styles.radioContainer}>
                    <View style={selectedOption === item ? styles.selectedRadio : styles.unselectedRadio} />
                    <Text style={styles.optionText}>{item}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  selectBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
  selectText: {
    fontSize: 16,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end', // Asegura que el modal se desplace desde la parte inferior
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro trasparente
  },
  modalContainer: {
    width: '100%',
    height: '50%', // Ajustar altura del modal
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Para Android
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 5,
    marginLeft: 10,
  },
  searchIcon: {
    padding: 5,
    color: color.lightPink
  },
  option: {
    padding: 10,
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: color.lightPink,
    paddingVertical: 10,
    borderRadius: 19,
    alignItems: 'center',
  },
  closeButtonText: {
    color: color.lightBeige,
    fontWeight: 'bold',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedRadio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: color.lightPink, // Color del radio seleccionado
    marginRight: 10,
  },
  unselectedRadio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: color.darkGray, // Color del radio no seleccionado
    marginRight: 10,
  },
});

export default Select;
