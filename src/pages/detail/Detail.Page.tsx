import './Detail.Style.css';

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
    IonListHeader,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle
} from "@ionic/react";

import {
    withRouter, RouteComponentProps
} from "react-router-dom";
import { setupMaster } from "cluster";


interface IProps extends RouteComponentProps<{ id: string }> {

}

const DetailPage: React.FC<IProps> = (props: IProps): JSX.Element => {
    const [movie, setMovie] = useState<IMovie>();
    const [isLoading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        fetchData();
        setLoading(false);
    }, []);

    const filmURL = baseURL + `/${props.match.params.id}`;
    const fetchData = async (): Promise<void> => {
        const data: IMovie | undefined = await MovieService.getMovies<IMovie>(filmURL);
        setMovie(data)
    }

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{movie?.title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <img src={movie?.image} alt={movie?.title} />
                    <IonCardHeader>
                        <IonCardSubtitle >
                            <p>Original title: {movie?.original_title}</p>
                        </IonCardSubtitle>
                        <IonCardTitle>Director: {movie?.director}</IonCardTitle>
                    </IonCardHeader>
                    <IonCard>
                        <IonCardContent>
                            <table>
                                <tr>
                                    <th>Release date: {movie?.release_date}</th>
                                    <th>
                                        Score: {movie?.rt_score}
                                    </th>
                                </tr>
                                <tr>
                                    <th>Running time: {movie?.running_time} perc</th>
                                    <th></th>
                                </tr>
                            </table>
                        </IonCardContent>
                    </IonCard>
                    <IonCard>
                        <IonCardContent>
                            <p>Short description: </p>
                            <p>{movie?.description}</p>
                        </IonCardContent>
                    </IonCard>
                </IonCard>
                <IonBackButton defaultHref="/"></IonBackButton>
            </IonContent>
        </IonPage>
    );
}
export default withRouter(DetailPage);