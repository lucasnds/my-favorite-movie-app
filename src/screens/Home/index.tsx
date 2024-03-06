import { useNavigation } from "@react-navigation/native";
import { MagnifyingGlass } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, TextInput, View } from "react-native";
import { CardMovies } from "../../components/CardMovies";
import { api } from "../../services/api";
import { styles } from "./style";

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}


export const Home = () => {
    const [discoveryMovies, setDiscoveryMovies] = useState<Movie[]>([]);
    const [searchResultMovies, setSearchResultMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [noResult, setNoResult] = useState(false);
    const [search, setSearch] = useState("");
    useEffect(() => {
        loadMoreData();
    }, []);

    const loadMoreData = async () => {
        setLoading(true);
        const response = await api.get("/movie/popular", {
            params: { page }
        });
        setDiscoveryMovies([...discoveryMovies, ...response.data.results]);
        setPage(page + 1);
        setLoading(false);
        setNoResult(false);
    };

    const searchMovies = async (query: string) => {
        setLoading(true);
        const response = await api.get("/search/movie", {
            params: {
                query
            }
        })

        if (response.data.results.length === 0) {
            setNoResult(true);
        } else {
            setNoResult(false);
            setSearchResultMovies(response.data.results)
        }
        setLoading(false);
    };

    const handleSearch = (text: string) => {
        setSearch(text)
        if (text.length > 2) {
            searchMovies(text);
        } else {
            setSearchResultMovies([]);
        }
    }

    const navigation = useNavigation();

    const renderMovieItem = ({ item }: { item: Movie }) => (
        <CardMovies
            data={item}
            onPress={() => navigation.navigate("Details", { movieId: item.id })}
        />
    );

    const movieData = search.length > 2 ? searchResultMovies : discoveryMovies;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>What do you want to watch?</Text>
                <View style={styles.containerInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor={'#67686D'}
                        value={search}
                        onChangeText={handleSearch}
                    ></TextInput>
                    <MagnifyingGlass color="#ccc" size={25} />
                </View>
            </View>
            <View style={{ width: '100%' }}>
                {noResult && (
                    <Text style={styles.noResult}>Nenhum filme encontrado para "{search}"</Text>
                )}
                <FlatList
                    data={movieData}
                    numColumns={3}
                    renderItem={renderMovieItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{
                        padding: 35,
                        paddingBottom: 100,
                    }}
                    onEndReached={() => loadMoreData()}
                    onEndReachedThreshold={0.5}
                />
                {loading && <ActivityIndicator size={50} color="#0296e5" />}
            </View>
        </View>
    )
}