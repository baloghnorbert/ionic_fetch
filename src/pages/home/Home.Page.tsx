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
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const HomePage: React.FC = (): JSX.Element => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    //ez nem async fv
    useEffect(() => {
        fetchData();
        setLoading(false);
    }, []);//[] miatt az oldal betöltésekor fut le

    const fetchData = async (): Promise<void> => {
        const data: IMovie[] | undefined = await MovieService.getMovies<IMovie[]>(baseURL);
        setMovies(data ?? [])
    }

    const loader = (): JSX.Element =>
    <div className="loader">
      <Loader type="BallTriangle"
        color="red"
        height={100}
        width={100}
        visible={isLoading}
      />
    </div>

    const listMovies = (): JSX.Element =>
        <IonList>
            <IonListHeader>Filmek</IonListHeader>
            {
                movies.map((movie, index) => <MovieComponent movie={movie} key={index} />)
            }
        </IonList>

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Ionic Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {
                    isLoading ? loader() : listMovies()
                }
            </IonContent>
        </IonPage>
    );
}
export default HomePage;