import React from "react";
import { IMovie } from "../../model/movie";
import { IonBackButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";

interface IProps {
    movie?: IMovie;
}

const MovieDetailPageComponent: React.FC<IProps> = (props: IProps): JSX.Element => {

    return (
        <><IonCard>
            <img src={props.movie?.image} alt={props.movie?.title} />
            <IonCardHeader>
                <IonCardSubtitle>
                    <p>Original title: {props.movie?.original_title}</p>
                </IonCardSubtitle>
                <IonCardTitle>Director: {props.movie?.director}</IonCardTitle>
            </IonCardHeader>
            <IonCard>
                <IonCardContent>
                    <table>
                        <tbody>
                            <tr>
                                <th>Release date: {props.movie?.release_date}</th>
                                <th>
                                    Score: {props.movie?.rt_score}
                                </th>
                            </tr>
                            <tr>
                                <th>Running time: {props.movie?.running_time} perc</th>
                                <th></th>
                            </tr>
                        </tbody>
                    </table>
                </IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardContent>
                    <p>Short description: </p>
                    <p>{props.movie?.description}</p>
                </IonCardContent>
            </IonCard>
        </IonCard><IonBackButton defaultHref="/"></IonBackButton></>
    );
}

export default MovieDetailPageComponent;