import "./Home.Style.css";

import React, { useState, useEffect } from "react";
import { IMovie } from "../../model/movie";
import { MovieService } from "../../service/http";
import { baseURL } from "../../service/baseURL";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonListHeader
} from "@ionic/react";
import MovieComponent from "./Movie.Home.Page";

const HomePage: React.FC = (): JSX.Element => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [isLoading, setLoading] = useState<Boolean>(true);

    //ez nem async fv
    useEffect(() => {
        fetchData();
        setLoading(false);
    }, []);//[] miatt az oldal betöltésekor fut le

    const fetchData = async (): Promise<void> => {
        const data: IMovie[] | undefined = await MovieService.getMovies<IMovie[]>(baseURL);
        setMovies(data ?? [])
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Ionic Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonListHeader>

                    </IonListHeader>
                    {
                        movies.map((movie) => <MovieComponent movie={movie} />)
                    }
                </IonList>
            </IonContent>
        </IonPage>
    );
}
export default HomePage;