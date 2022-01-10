import './Detail.Style.css';

import React, { useState, useEffect } from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent} from "@ionic/react";

import {
    withRouter, RouteComponentProps
} from "react-router-dom";
import { CharacterService, MovieService } from '../../service/httpService';
import {  ICharachterData } from '../../model/charachter';
import { IMovie } from '../../model/movie';
import LoaderComponent from '../Loader';
import MovieComponent from './movie.component';

interface IProps extends RouteComponentProps<{ id: string }> {

}

const DetailPage: React.FC<IProps> = (props: IProps): JSX.Element => {
    const [charachter, setCharachter] = useState<ICharachterData>();
    const [movies, setMovies] = useState<IMovie[]>();
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            fetchData();
            setLoading(false);
        }, 1000)
    }, []);

    const fetchData = async (): Promise<void> => {
        //TODO: SOHA NE inlineoljuk be,mert nem biztos, hogy meg fogja várni
        const data = await CharacterService.byId(props.match.params.id)
        const moviesData : IMovie[] = await MovieService.getAll(data?.films!)

        setCharachter(data);
        setMovies(moviesData);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{charachter?.name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {
                    movies?.map((data,index) => <MovieComponent movie={data} key={index} />)
                  //  isLoading ? <LoaderComponent loading={isLoading} /> : <MovieComponent movie={movies} />
                }
            </IonContent>
        </IonPage>
    );
}
export default withRouter(DetailPage);