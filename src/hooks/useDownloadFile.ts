/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from "react";
import {  Capacitor } from "@capacitor/core";
import  { Directory, Filesystem } from "@capacitor/filesystem"
import { Share } from "@capacitor/share";

interface DownloadFileHook {
  downloadFile: (_url: string, _filename: string) => Promise<void>;
  isDownloading: boolean;
}

const useDownloadFile = (): DownloadFileHook => {
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const downloadFile = async (url: string, filename: string): Promise<void> => {
     try {
      setIsDownloading(true);
        

      // Check if the device is mobile
      if (Capacitor.isNativePlatform()) {
        console.log('started here')
        const savedFile = await Filesystem.downloadFile({
          path: `${filename}.jpeg`,
          url,
          directory: Directory.Documents,
        });
        // Share the file on mobile
        console.log('got here', savedFile);
        await Share.share({
          title: "Downloaded payslip",
          text: "Payslip file",
          url: savedFile?.path,
          dialogTitle: "Share File",
        });
      } else {

        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.setAttribute("download", filename);
        downloadLink.click();
      }
     } catch (error) {
      console.error("Error downloading file:", error);
     } finally {
      setIsDownloading(false);
     }
  };

  return {
    downloadFile,
    isDownloading,
  };
};

export default useDownloadFile;
