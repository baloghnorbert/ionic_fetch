import React from "react";
import { IMovie } from "../../model/movie";
import {
    IonBackButton, IonCard, IonCardContent,
    IonCardHeader, IonCardSubtitle, IonCardTitle
} from "@ionic/react";

interface IProps {
    movie: IMovie;
}

const MovieComponent: React.FC<IProps> = (props: IProps): JSX.Element => {

    return (
        <div className="movieComponent">
            <h2> {props.movie.title}</h2>
            <h4> {props.movie.release_date}</h4>
            <h3> {props.movie.producer}</h3>
            <h3> {props.movie.director}</h3>
            <h4> {props.movie.opening_crawl}</h4>
        </div>
    );
}

export default MovieComponent;