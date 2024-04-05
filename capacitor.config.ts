import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.payslip.com',
  appName: 'payslip',
  webDir: 'build',
  server: {
     androidScheme: 'https',
  //   "url": "http://192.168.1.4:8100",
  // "cleartext": true
  }
};

export default config;


