import React, { useState, useEffect } from "react";
import { IMovie } from "../../model/movie";
import { IonItem, IonAvatar, IonLabel } from "@ionic/react";

interface IProps {
    movie: IMovie;
}

const MovieComponent: React.FC<IProps> = (props: IProps): JSX.Element => {

    return (
        <IonItem>
            <IonAvatar slot="start">
                <img src={props.movie.movie_banner} alt={props.movie.title} />
            </IonAvatar>
            <IonLabel>
                <h2>{props.movie.title}</h2>
                <h3>{props.movie.release_date}</h3>
                <p>{props.movie.description}</p>
            </IonLabel>
        </IonItem>
    );
}

export default MovieComponent;