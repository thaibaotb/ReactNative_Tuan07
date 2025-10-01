import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Screen02() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>The world’s Best Bike</Text>

      <ScrollView contentContainerStyle={styles.list}>
        {/* Item 1 */}
        <View style={styles.card}>
          <Image 
            source={{uri:"https://img.freepik.com/free-photo/blue-fat-bike-isolated-white_1232-1866.jpg"}} 
            style={styles.image}
          />
          <Text style={styles.name}>Pinarello</Text>
          <Text style={styles.price}>$1800</Text>
        </View>

        {/* Item 2 */}
        <View style={styles.card}>
          <Image 
            source={{uri:"https://img.freepik.com/free-photo/red-mountain-bike-isolated-white_1232-1872.jpg"}} 
            style={styles.image}
          />
          <Text style={styles.name}>Pina Mountai</Text>
          <Text style={styles.price}>$1700</Text>
        </View>

        {/* ... bạn thêm các item khác tương tự */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:"#fff", padding:16 },
  header: { fontSize:22, fontWeight:"bold", color:"#e63946", marginBottom:16, textAlign:"center" },
  list: { flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between" },
  card: { width:"48%", backgroundColor:"#fdf2f2", borderRadius:12, padding:10, marginBottom:16, alignItems:"center" },
  image: { width:120, height:100, marginBottom:10 },
  name: { fontSize:16, fontWeight:"600" },
  price: { fontSize:16, fontWeight:"bold", color:"#e63946" },
});
