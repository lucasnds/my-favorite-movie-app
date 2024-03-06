import { MagnifyingGlass } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
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

    useEffect(() => {
        loadMoreData();
    }, []);

    const loadMoreData = async () => {
        const response = await api.get("/movie/popular");
        setDiscoveryMovies(response.data.results)
    };

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headerText}>What do you want to watch?</Text>
            <View style={styles.containerInput}>
                <TextInput style={styles.input} placeholder="Search" placeholderTextColor={'#67686D'}></TextInput>
                <MagnifyingGlass color="#ccc" size={25}/>
            </View>
            </View>
            <View style={{width: '100%'}}>
                <FlatList
                data={discoveryMovies}
                numColumns={3}
                renderItem={(item)=>(
                    <CardMovies data={item.item}/>
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    padding: 35,
                    paddingBottom: 100
                }}
                />
            </View>
        </View>
    )
}