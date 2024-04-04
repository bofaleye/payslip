import { IonCard, IonContent, IonLabel, IonPage, IonRow } from "@ionic/react";
import React, { FC, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import Header from "../components/header";
import barcodeImg from  '../assets/img/barcode.png';
import { Payslip } from "../models/payslip";
import { formatDate } from "../utils";
import { Payslips } from "../mock";
               
interface PayslipDetailsPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const PayslipDetailsPage: FC<PayslipDetailsPageProps> = ({ match }) => {
  const [selectedPayslip, setSelectedPayslip] = useState<Payslip>();
  useEffect(() => {
    const id =  match.params.id;
    const payslip = Payslips?.find( item => item.id === id);
    setSelectedPayslip(payslip)
  }, []);
  return (
    <IonPage>
      <Header title="Payslip details" isBackButton={true} />
      <IonContent className="ion-padding md:flex justify-center">
        <IonCard className="m-0 p-[10px] rounded-[10px] md:max-w-[400px]">
            <IonRow className="justify-between text-black">
                <IonLabel className="font-[500]">payslip ID</IonLabel>
                <IonLabel className="font-[500]">{selectedPayslip?.id}</IonLabel>
            </IonRow>
            <IonRow className="justify-between text-black mt-10">
               <div className="flex flex-col">
                  <IonLabel className="font-normal">From</IonLabel>
                  <IonLabel className="font-bold text-[20px]">{selectedPayslip? formatDate(selectedPayslip?.fromDate || ""): ""}</IonLabel>
               </div>
               <div className="flex flex-col">
                  <div>
                    <IonLabel className="font-normal">To</IonLabel> 
                  </div>
                  <IonLabel className="font-bold text-[20px]">{selectedPayslip? formatDate(selectedPayslip?.toDate || ""): ""}</IonLabel>
               </div>
            </IonRow>
            <div className="border-b-2 h-1 border-black/[0.5] w-[100%] border-dashed mt-[30px]"></div>
            <img src={barcodeImg} alt="barcode" />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default PayslipDetailsPage;
