import { View } from "../components/Themed";
import { StyleSheet } from 'react-native';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View>
        header
      </View>
      <View>
        content
      </View>
      <View>
        footer
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});