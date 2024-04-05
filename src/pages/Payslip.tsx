import { IonContent, IonList, IonPage, IonText } from "@ionic/react";
import React, { FC, useState } from "react";
import { Payslips } from "../mock";
import { Payslip } from "../models/payslip";
import PayslipItem from "../components/payslipItem";

const ListPayslipPage: FC = () => {
    const [payslipList] = useState<Payslip[]>(Payslips);
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="flex flex-col mt-[50px] mb-[35px] md:items-center">
          <IonText aria-description="All payslips below" className="font-bold text-[35px]">Payslips.</IonText>
        </div>
        <IonList className="bg-transparent grid gap-y-5 grid-cols-1 md:grid-cols-3 md:justify-center md:px-[50px] md:gap-x-5">
          {payslipList?.map((payslip, index) => 
            <PayslipItem {...payslip} key={index} />
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default ListPayslipPage;
