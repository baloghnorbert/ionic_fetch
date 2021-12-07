import './Detail.Style.css';

import React, { useState, useEffect } from "react";
import { IMovie } from "../../model/movie";
import { MovieService } from "../../service/movieService";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
} from "@ionic/react";

import {
    withRouter, RouteComponentProps
} from "react-router-dom";
import LoaderComponent from '../Loader';
import MovieDetailPageComponent from './Movie.Detail.Page';

interface IProps extends RouteComponentProps<{ id: string }> {

}

const DetailPage: React.FC<IProps> = (props: IProps): JSX.Element => {
    const [movie, setMovie] = useState<IMovie>();
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            fetchData();
            setLoading(false);
        }, 1000)
    }, []);

    const fetchData = async (): Promise<void> => {
        setMovie(await MovieService.getMovieById(props.match.params.id))
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{movie?.title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {
                    isLoading ? <LoaderComponent loading={isLoading} /> : <MovieDetailPageComponent movie={movie} />
                }
            </IonContent>
        </IonPage>
    );
}
export default withRouter(DetailPage);