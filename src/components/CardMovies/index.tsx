import { Image, Pressable } from "react-native";
import { styles } from "./style";

interface Movie {
    id: Number,
    poster_path: string;
}

interface Props {
    data: Movie;
    onPress?: () => void;
}

export const CardMovies = ({data, ...rest}: Props) =>{
    return(
        <Pressable {...rest} style={styles.cardMovies}>
            <Image source={{
                uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`
            }}
            style={styles.cardImage}
            />
        </Pressable>
    )
}