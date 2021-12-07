import "./Home.Style.css";

import React, { useState, useEffect } from "react";
import { IMovie } from "../../model/movie";
import { MovieService } from "../../service/movieService";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList
} from "@ionic/react";
import MovieComponent from "./Movie.Home.Page";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoaderComponent from "../Loader";

const HomePage: React.FC = (): JSX.Element => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            fetchData();
            setLoading(false);
        }, 1000)
    }, []);

    const fetchData = async (): Promise<void> => {
        const data: IMovie[] | undefined = await MovieService.getMovies();
        setMovies(data ?? [])
    }

    const listMovies = (): JSX.Element =>
        <IonList>
            {
                movies.map((movie, index) => <MovieComponent movie={movie} key={index} />)
            }
        </IonList>

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Filmek</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {
                    isLoading ? <LoaderComponent loading={isLoading} /> : listMovies()
                }
            </IonContent>
        </IonPage>
    );
}
export default HomePage;