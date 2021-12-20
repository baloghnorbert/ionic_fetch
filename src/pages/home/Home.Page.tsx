import "./Home.Style.css";

import React, { useState, useEffect } from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonListHeader,
    IonInfiniteScroll,
    IonInfiniteScrollContent
} from "@ionic/react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoaderComponent from "../Loader";
import { ICharachterData, ICharachter } from "../../model/charachter";
import CharachterComponent from "./charachter.component";
import { CharacterService } from "../../service/characterService";

const HomePage: React.FC = (): JSX.Element => {

    const [charachters, setCharachters] = useState<ICharachterData[]>([]);
    const [page, setPage] = useState<number>(1);
    const [disableInfinitScroll, setDisableInfinitScroll] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() =>{
        fetchData();
        setIsLoading(false);

    },[]);

    const searchNext = async (e: CustomEvent<void>): Promise<void> => {
        await fetchData();
        (e.target as HTMLIonInfiniteScrollElement).complete();
    }

    const fetchData = async (): Promise<void> => {
        const data: ICharachterData[] = await CharacterService.page(page);
        if (data && data.length > 0) {
            setCharachters([...charachters, ...data]);

            if (data.length < 10) //kiolvastuk az összeset, már nincs több benne
            {
                setDisableInfinitScroll(true);
            } else {
                setPage(page + 1);
            }
        } else {
            setDisableInfinitScroll(true);
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>STAR WARS CHARACHTERS</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    <IonListHeader></IonListHeader>
                    {
                        charachters.map((data,index) => <CharachterComponent charachter={data} key={index} />)
                    }
                </IonList>
                <IonInfiniteScroll
                    onIonInfinite={e => searchNext(e)}
                    threshold="50px"
                    disabled={disableInfinitScroll}
                >
                    <IonInfiniteScrollContent
                        loadingSpinner="bubbles"
                        loadingText="Loading more data..."
                    >

                    </IonInfiniteScrollContent>
                </IonInfiniteScroll>
            </IonContent>
        </IonPage>
    );
}
export default HomePage;