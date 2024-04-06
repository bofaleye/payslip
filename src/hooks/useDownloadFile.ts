import { useState } from "react";
import { Capacitor } from "@capacitor/core";
import { Directory, Filesystem } from "@capacitor/filesystem";
import { Share } from "@capacitor/share";

interface DownloadFileHook {
  downloadFile: (_url: string, _filename: string) => Promise<void>;
  isDownloading: boolean;
}

const useDownloadFile = (): DownloadFileHook => {
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const getFilesystemAccess = async (): Promise<boolean> => {
    try {
      const status = await Filesystem.checkPermissions();
      const state = status.publicStorage;

      if (state === "granted") {
        return true;
      } else if (state === "denied") {
        // You may want to redirect to the main app settings.
        return false;
      } else {
        Filesystem.requestPermissions();
        return false;
      }
    } catch (error) {
      console.error("Error while checking filesystem permissions:", error);
      return false;
    }
  };

  const downloadFile = async (url: string, filename: string): Promise<void> => {
    try {
      setIsDownloading(true);

      if (Capacitor.isNativePlatform()) {
        const access = await getFilesystemAccess();
        if (access) {
          const savedFile = await Filesystem.downloadFile({
            path: `${filename}.jpeg`,
            url,
            directory: Directory.External
          });
          await Share.share({
            title: "Downloaded payslip",
            text: "Payslip file",
            url: `file://${savedFile?.path}`,
            dialogTitle: "Share File",
          });
        } else {
          console.log("go to settings");
        }
      } else {
        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.setAttribute("download", filename);
        downloadLink.setAttribute("target", "_blank");
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
