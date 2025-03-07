import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const artist = {
  name: 'Вінсент ван Гог',
  bio: 'Геніальний нідерландський художник-постімпресіоніст, один з найвідоміших представників західного мистецтва. У нього не вийшло стати знаменитим та багатим за життя, але вдалося увійти в історію, незважаючи на душевну хворобу і відсутність фундаментальної художньої освіти. ',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/John_Peter_Russell%2C_Vincent_van_Gogh%2C_1886.jpg/220px-John_Peter_Russell%2C_Vincent_van_Gogh%2C_1886.jpg',
};

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={{ uri: artist.image }} style={styles.image} />
      <Text style={styles.title}>{artist.name}</Text>
      <Text style={styles.bio}>{artist.bio}</Text>
      <Button title="Галерея" onPress={() => router.push('/gallery')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 200, height: 200, borderRadius: 100, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  bio: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});
