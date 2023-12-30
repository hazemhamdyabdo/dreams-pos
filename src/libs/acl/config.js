export const initialAbility = [
    {
      action: 'read',
      subject: 'Auth',
    },
  ];
  
  export const domain = process.env.VUE_APP_Domain // 'http://172.107.175.44:5050';
  export const baseURL = process.env.VUE_APP_Base_Url // `${domain}/api`; // 'http://localhost:59403/api/' // 'https://localhost:5001/api';
  export const TOKEN_KEY = '@ACCESS_TOKEN';
  export const PROFILE_KEY = '@USER_PROFILE';
  export const LANG = '@LANG';
  export const BRANCH_ID = '@BRANCH_ID';
  export const CURRENT_YEAR = '@CURRENT_YEAR';
  export const baseReportURL = process.env.VUE_APP_Base_Report_URL // 'http://172.107.175.44:5051/ReportViewer?' // 'http://localhost:51399/ReportViewer?' // 'http://198.12.95.197:5051/ReportViewer?'
  
  export const _ = undefined;
  