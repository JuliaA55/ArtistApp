import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const artist = {
  paintings: [
    { id: '1', title: 'Зоряна ніч', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/640px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg' },
    { id: '2', title: 'Соняшники', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vincent_Willem_van_Gogh_128.jpg/1200px-Vincent_Willem_van_Gogh_128.jpg' },
    { id: '3', title: 'Автопортрет', image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Vincent_van_Gogh_-_Self-Portrait_-_1954.326_-_Art_Institute_of_Chicago.jpg' },
    { id: '4', title: 'Нічна тераса кафе', image: 'https://art-room.com.ua/66212-large_default/nichna-terasa-kafe.jpg' },
    { id: '5', title: 'Квітучі гілки мигдалю', image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg' },
  ]
};

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={artist.paintings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.paintingContainer}>
            <Image source={{ uri: item.image }} style={styles.painting} />
            <Text style={styles.paintingTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  paintingContainer: { alignItems: 'center', marginBottom: 20 },
  painting: { width: 300, height: 300, borderRadius: 10 },
  paintingTitle: { fontSize: 18, marginTop: 10 }
});
