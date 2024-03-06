import { useNavigation, useRoute } from "@react-navigation/native";
import { BookmarkSimple, CalendarBlank, CaretLeft, Clock, Star } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Text, TouchableOpacity, View } from "react-native";
import { api } from "../../services/api";
import { styles } from "./style";

type MovieDetails = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    runtime: string;
    release_date: string;
    vote_average: number;
};

type RouterProps = {
    movieId: string;
}


export const Details = () => {
    const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null)
    const route = useRoute();
    const [loading, setLoading] = useState(false);
    const { movieId } = route.params as RouterProps;

    const navigation = useNavigation();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setLoading(true)
            try {
                const response = await api.get(`/movie/${movieId}`);
                setMovieDetails(response.data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchMovieDetails();
    }, [movieId]);

    function getYear(dateValue) {
        const date = new Date(dateValue);
        return date.getFullYear();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <CaretLeft color="#fff" size={32} weight="thin" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Detalhes</Text>
                <TouchableOpacity>
                    <BookmarkSimple color="#fff" size={32} weight="thin" />
                </TouchableOpacity>
            </View>
            {loading && <ActivityIndicator size="large" color="#fff" />}
            {!loading && <>
                <View>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}` }}
                        style={styles.bannerImage}
                    />
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}` }}
                        style={styles.posterImage}
                    />
                    <Text style={styles.titleMovie}>{movieDetails?.title}</Text>
                    <View style={styles.description}>
                        <View style={styles.descriptionGroup}>
                            <CalendarBlank color="#92929D" size={25} weight="thin" />
                            <Text style={styles.descriptionText}>
                                {getYear(movieDetails?.release_date)}
                            </Text>
                        </View>
                        <View style={styles.descriptionGroup}>
                            <Clock color="#92929D" size={25} weight="thin" />
                            <Text style={styles.descriptionText}>
                                {`${movieDetails?.runtime} Minutes`}
                            </Text>
                        </View>
                        <View style={styles.descriptionGroup}>
                            <Star color={movieDetails?.vote_average.toFixed(2) >= '7' ? '#FF8700' : '#92929D'} size={25} weight={movieDetails?.vote_average.toFixed(2) >= '7' ? 'duotone' : 'thin'} />
                            <Text style={styles.descriptionText}>
                                {movieDetails?.vote_average.toFixed(2)}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.about}>
                        <Text style={[styles.aboutText, styles.sinopse]}>Sinopse</Text>
                        <Text style={styles.aboutText}>{movieDetails?.overview ? "Ops! This movie don't have overview" : movieDetails?.overview}</Text>
                    </View>
                </View>
            </>}
        </View>
    )
}