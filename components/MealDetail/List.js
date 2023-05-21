import { Text ,View,StyleSheet} from 'react-native'

function List({data}) {
  return data.map((dataPoint) =>
        (
            <View key={dataPoint} style={styles.listItem}>
                <Text style={styles.itemText}>{dataPoint}</Text>
            </View>
         ))
}

export default List

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        backgroundColor: '#160d0d',
        marginHorizontal: 12
    },
    itemText: {
        color: '#c0e7f6e8',
        textAlign: 'center',
        paddingVertical: 5
    }
})