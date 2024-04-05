import React, { FC } from "react";
import { IonCard, IonIcon, IonLabel } from "@ionic/react";
import { arrowForwardOutline, arrowRedo } from "ionicons/icons";
import { Payslip } from "../models/payslip";
import { formatDate } from "../utils";

export interface PayslipItemProps extends Payslip {}

const PayslipItem: FC<PayslipItemProps> = ({ id, fromDate, toDate }: Payslip) => {

  return (
    <IonCard
      aria-label={`payslip ${id}`}
      button={true}
      routerLink={`/details/${id}`}
      className="card rounded-md p-[15px] m-0 h-[100px] w-[100%]"
    >
      <div className="flex justify-between h-[100%]">
        <div className="flex flex-col justify-between h-[100%]">
          <IonLabel className="text-sm font-bold text-black">From</IonLabel>
          <IonLabel className="font-normal text-[16px]">
            {formatDate(fromDate)}
          </IonLabel>
        </div>
        <IonIcon className="" size="large" icon={arrowForwardOutline} />
        <div className="flex flex-col justify-between h-[100%]">
          <IonLabel className="text-sm font-bold text-black">To</IonLabel>
          <IonLabel className="font-normal text-[16px]">
            {formatDate(toDate)}
          </IonLabel>
        </div>
      </div>
      <div className="flex justify-end">
        <IonIcon
          className="mt-2"
          color="primary"
          size="small"
          icon={arrowRedo}
        />
      </div>
    </IonCard>
  );
};
export default PayslipItem;
