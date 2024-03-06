import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback, useEffect, useState } from "react";

type Movie = {
    id: number;
    title: string;
    poster_path: string;
    runtime: string;
    release_date: string;
    vote_average: number;
};

type MovieContextData = {
    favoritesMovies: number[];
    allFavoritesMovies: Movie[];
    addFavoritesMovies: (movieId: number) => void
    removeFavoritesMovies: (movieId: number) => void
}

export const MoviesContext = createContext<MovieContextData>({} as MovieContextData);

type MovieProviderProps = {
    children: React.ReactNode;
};



export function MovieProvider({ children }: MovieProviderProps) {
    const [favoritesMovies, setFavoritesMovies] = useState<number[]>([])
    const [allFavoritesMovies, setAllFavoriteMovies] = useState<Movie[]>([])


    useEffect(() => {
        async function loadFavoritesMovies() {
            const favoritesMovies = await AsyncStorage.getItem("@FavoriteMovies");

            if (favoritesMovies) {
                setFavoritesMovies(JSON.parse(favoritesMovies));
            }
        }
        loadFavoritesMovies()
    }, [])

    const addFavoritesMovies = useCallback(async (movieId: number) => {
        if (!favoritesMovies.includes(movieId)) {
            const newFavoritesMovies = [...favoritesMovies, movieId];
            setFavoritesMovies(newFavoritesMovies);
            await AsyncStorage.setItem("@FavoriteMovies", JSON.stringify(newFavoritesMovies))
        }
    }, [favoritesMovies]);

    const removeFavoritesMovies = useCallback(async (movieId: number) => {
        const newFavoritesMovies = favoritesMovies.filter(item => item !== movieId);
        setFavoritesMovies(newFavoritesMovies);
        await AsyncStorage.setItem("@FavoriteMovies", JSON.stringify(newFavoritesMovies))
    }, [favoritesMovies]);

    const contextData: MovieContextData = {
        favoritesMovies,
        allFavoritesMovies,
        addFavoritesMovies,
        removeFavoritesMovies
    }

    return (
        <MoviesContext.Provider value={contextData}>
            {children}
        </MoviesContext.Provider>
    )
}
