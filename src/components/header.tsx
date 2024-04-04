import {
  IonBackButton,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { arrowBackSharp, cloudDownloadSharp } from 'ionicons/icons';
import React, { FC } from "react";

export interface HeaderProps {
  title: string;
  isBackButton?: boolean;
  buttonMethod?: ()=> void;
}

const Header: FC<HeaderProps> = ({ title, isBackButton = false, buttonMethod}) => {
  return (
    <IonHeader translucent={true} className="ion-no-border">
      <IonToolbar className="flex bg-main">
        {isBackButton && (
          <IonButtons>
            <IonBackButton icon={arrowBackSharp} text=""></IonBackButton>
          </IonButtons>
        )}
        <IonTitle>{title}</IonTitle>
        <IonButtons onClick={buttonMethod} slot="end">
        <IonButton  fill="outline"> <IonIcon icon={cloudDownloadSharp} /> </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};
export default Header;
