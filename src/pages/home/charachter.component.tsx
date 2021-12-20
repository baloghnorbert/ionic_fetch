import React from "react";

import { IonItem, IonAvatar, IonLabel } from "@ionic/react";
import { ICharachterData } from "../../model/charachter";

interface IProps {
    charachter: ICharachterData;
}

const CharachterComponent: React.FC<IProps> = (props: IProps): JSX.Element => {

    const getId = (): string => props.charachter.url.split("/")[5];

    return (
        <IonItem routerLink={`/detail/${getId()}`}>
            <IonAvatar slot="start">
                <img src={props.charachter.url} alt={props.charachter.name} />
            </IonAvatar>
            <IonLabel>
                <h2>{props.charachter.name}</h2>
                <h3>{props.charachter.gender}</h3>
                <p>{props.charachter.species}</p>
                <p>{props.charachter.birth_year}</p>
            </IonLabel>
        </IonItem>
    );
}

export default CharachterComponent;