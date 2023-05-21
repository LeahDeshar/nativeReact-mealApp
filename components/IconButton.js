import { Pressable, Text,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
function IconButton({icon,color,onPress}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) =>pressed && styles.pressed}>
        <Ionicons name={icon} size={22} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,

    }
})