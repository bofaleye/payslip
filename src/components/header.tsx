import React, { FC } from "react";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { arrowBackSharp, cloudDownloadSharp } from "ionicons/icons";
import { Link } from "react-router-dom";

export interface HeaderProps {
  title: string;
  isBackButton?: boolean;
  buttonMethod?: () => void;
}

const Header: FC<HeaderProps> = ({
  title,
  isBackButton = false,
  buttonMethod,
}) => {
  return (
    <IonHeader translucent={false} className="ion-no-border">
      <IonToolbar className="flex justify-between items-center bg-main">
        {isBackButton && (
          <IonButtons slot="start">
            <Link aria-label="Go back" className="mt-2" to="/">
              <IonIcon color="primary" size="large" icon={arrowBackSharp} />
            </Link>
          </IonButtons>
        )}
        <IonTitle
          aria-label="Title"
          className="text-center"
          data-testid="header-title"
        >
          {title}
        </IonTitle>
        <IonButtons onClick={buttonMethod} slot="end">
          <IonButton
            aria-label="Download payslip"
            data-testid="download-button"
            color="primary"
            fill="outline"
          >
            {" "}
            <IonIcon color="primary" icon={cloudDownloadSharp} />{" "}
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};
export default Header;
