import './Detail.Style.css';

import React, { useState, useEffect } from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard
} from "@ionic/react";

import {
    withRouter, RouteComponentProps
} from "react-router-dom";
import LoaderComponent from '../Loader';
import MovieDetailPageComponent from './Movie.Detail.Page';
import { CharacterService } from '../../service/characterService';
import {  ICharachterData } from '../../model/charachter';

interface IProps extends RouteComponentProps<{ id: string }> {

}

const DetailPage: React.FC<IProps> = (props: IProps): JSX.Element => {
    const [charachter, setCharachter] = useState<ICharachterData>();
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
        setCharachter(data);
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
                    //isLoading ? <LoaderComponent loading={isLoading} /> : <MovieDetailPageComponent movie={charachter} />
                }
            </IonContent>
        </IonPage>
    );
}
export default withRouter(DetailPage);