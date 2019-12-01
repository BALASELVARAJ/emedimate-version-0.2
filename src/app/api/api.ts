import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  // private baseUrl = 'http://vetroapi.hakunamatata.io/';
  private baseUrl = 'http://localhost:49435/api';
  private signInApiUrl = 'account/Login';
  private registerApiUrl = 'Customer/PostCustomerDetails';
  private forgotPasswordApiUrl = 'account/forgotPassword';
  private resetPasswordApiUrl = 'account/changePassword';
  
  
  // TDS 
  private getTDSStandardListApiUrl = 'filters/getStandardList';
  private getTDSClassificationListApiUrl = 'filters/getProtectionList';
  private getTDSDurationListApiUrl = 'filters/getProtectionDurationList';
  private getTDSListApiUrl = "fire/getTDSList";
    //TDS - Protect
  private getTDSGradeOfProtectionListApiUrl = 'filters/getGradeOfProtection';
  private getTDSGradeOfSubTypeListApiUrl = 'filters/getGradeOfSubType';
  private getProtectAttackTypeListApiUrl = 'filters/getAttackType';
  private getProtectTDSListApiUrl = "/protect/getTDSList";
    
  //PDS
  private getPDSThicknessListApiUrl = 'filters/getThicknessList';
  private getPDSOuterGlassListApiUrl = 'filters/getOuterGlassList';
  private getPDSOuterCoatingListApiUrl = 'filters/getOuterCoatingList';
  private getPDSOuterSeriesNumberListApiUrl = 'filters/getOuterSeriesNoList';
  private getPDSOuterSpacerListApiUrl = 'filters/getOuterSpacerList';
  private getPDSSpacerInfillerListApiUrl = 'filters/getSpacerInfillerList';
  private getPDSGlassListApiUrl = 'filters/getGlassList';
  private getPDSFRGThicknessListApiUrl = 'filters/getFRGThicknessList';
  private getPDSListApiUrl = 'fire/getPDSList';
  
  //ADS
  private getADSRwdBListApiUrl = 'filters/getRwdBList';
  private getADSListApiUrl = 'fire/getADSList';
  private getUnitListApiUrl = 'filters/getUnitList';
   
  //CYS
  private getApplicationListApiUrl = 'filters/getApplicationList';
  private getapplicationSubListApiUrl = 'filters/getApplicationSubList';
  private getMaterialTypeListApiUrl = 'filters/getMaterialTypeList';
  private getCysListApiUrl = 'fire/getCYSList';

  //CDA
  private getCDAListApiUrl = 'fire/getCDAList';
  
  //UL Listing
  private getULListApiUrl = 'fire/getULList';

  //Misc Downloads
  private getMiscListApiUrl = 'fire/getMISCList';
  
  //Modificaton Rules
  private getModificationRulesApiUrl = '/protect/getMRDocs';

  //pdf
  private getPdfViewApiUrl = 'http://vetrocdn.hakunamatata.io/file?fileKey=';

  constructor(public http: Http, public httpClient: HttpClient) {
  }

  private get(url : string) {
    return this.httpClient.get(this.baseUrl + url)
    .map(res => res);
  }
  private getPdf(url : string) {
    return this.httpClient.get(url)
    .map(res => res);
  }

  private post(url : string, jsonBody : any) {
    return this.httpClient.post(this.baseUrl + url, jsonBody)
    .map(res => res);
  }
  public signIn(signInData: any) { 
    return this.post(this.signInApiUrl, signInData);
  }
  public register(registerData: any) { 
    return this.post(this.registerApiUrl, registerData);
  }
  public forgotPassword(forgotPasswordData: any) { 
    return this.post(this.forgotPasswordApiUrl, forgotPasswordData);
  }
  public resetPassword(resetPasswordData: any) { 
    return this.post(this.resetPasswordApiUrl, resetPasswordData);
  }
//   public getCountryList(regionId) { 
//     return this.get(this.getCountryListApiUrl + regionId);
//   }
//   public getRegionList() { 
//     return this.get(this.getRegionListApiUrl);
//   }
//   public getModuleList(countryId,selectedCategory) { 
//     return this.get(this.getModuleListApiUrl + countryId + '/' + selectedCategory);
//   }
  public getTDSStandardList(getTDSStandardListData: any) { 
    return this.post(this.getTDSStandardListApiUrl, getTDSStandardListData);
  }
  public getTDSClassificationList(getTDSClassificationListData: any) { 
    return this.post(this.getTDSClassificationListApiUrl, getTDSClassificationListData);
  }
  public getTDSDurationList(getTDSDurationListData: any) { 
    return this.post(this.getTDSDurationListApiUrl, getTDSDurationListData);
  }
  public getTDSList(getTDSListData: any) { 
    return this.post(this.getTDSListApiUrl, getTDSListData);
  }
  public getTDSGradeOfProtectionList(getTDSGradeOfProtectionListData: any) { 
    return this.post(this.getTDSGradeOfProtectionListApiUrl, getTDSGradeOfProtectionListData);
  }
  public getTDSGradeOfSubTypeList(getTDSGradeOfSubTypeListData: any) { 
    return this.post(this.getTDSGradeOfSubTypeListApiUrl, getTDSGradeOfSubTypeListData);
  }
  public getProtectAttackTypeList(getProtectAttackTypeListData: any) { 
    return this.post(this.getProtectAttackTypeListApiUrl, getProtectAttackTypeListData);
  }
  public getProtectTDSList(getProtectTDSListData: any) { 
    return this.post(this.getProtectTDSListApiUrl, getProtectTDSListData);
  }
  public getPDSThicknessList(getPDSThicknessListData: any) { 
    return this.post(this.getPDSThicknessListApiUrl, getPDSThicknessListData);
  }
  public getPDSOuterGlassList(getPDSOuterGlassListData: any) { 
    return this.post(this.getPDSOuterGlassListApiUrl, getPDSOuterGlassListData);
  }
  public getPDSOuterCoatingList(getPDSOuterCoatingListData: any) { 
    return this.post(this.getPDSOuterCoatingListApiUrl, getPDSOuterCoatingListData);
  }
  public getPDSOuterSeriesNumberList(getPDSOuterSeriesNumberListData: any) { 
    return this.post(this.getPDSOuterSeriesNumberListApiUrl, getPDSOuterSeriesNumberListData);
  }
  public getPDSOuterSpacerList(getPDSOuterSpacerListData: any) { 
    return this.post(this.getPDSOuterSpacerListApiUrl, getPDSOuterSpacerListData);
  }
  public getPDSSpacerInfillerList(getPDSSpacerInfillerListData: any) { 
    return this.post(this.getPDSSpacerInfillerListApiUrl, getPDSSpacerInfillerListData);
  }
  public getPDSGlassList(getPDSGlassListData: any) { 
    return this.post(this.getPDSGlassListApiUrl, getPDSGlassListData);
  }
  public getPDSFRGThicknessList(getPDSFRGThicknessListData: any) { 
    return this.post(this.getPDSFRGThicknessListApiUrl, getPDSFRGThicknessListData);
  }
  public getPDSList(getPDSListData: any) { 
    return this.post(this.getPDSListApiUrl, getPDSListData);
  }
  public getADSRwdBList(getADSRwdBListData: any) { 
    return this.post(this.getADSRwdBListApiUrl, getADSRwdBListData);
  }
  public getADSList(getADSListData: any) { 
    return this.post(this.getADSListApiUrl, getADSListData);
  }
  public getUnitList(getUnitListData: any) { 
    return this.post(this.getUnitListApiUrl, getUnitListData);
  }
  public getApplicationList(countryId) { 
    return this.get(this.getApplicationListApiUrl+'/'+countryId);
  }
  public getapplicationSubList(getapplicationSubListData: any) { 
    return this.post(this.getapplicationSubListApiUrl, getapplicationSubListData);
  }
  public getMaterialTypeList(getMaterialTypeListData: any) { 
    return this.post(this.getMaterialTypeListApiUrl, getMaterialTypeListData);
  }
  public getCysList(getCysListData: any) { 
    return this.post(this.getCysListApiUrl, getCysListData);
  }
  public getCDAList(code: any) { 
    return this.get(this.getCDAListApiUrl+'/'+code);
  }
  public getULList(selectedCategory) { 
    return this.get(this.getULListApiUrl+'/'+selectedCategory);
  }
  public getMiscList(category) { 
    return this.get(this.getMiscListApiUrl+'/'+category);
  }
  public getModificationRules() { 
    return this.get(this.getModificationRulesApiUrl);
  }
  public getPdfView(file: any) { 
    return this.getPdf(this.getPdfViewApiUrl+file);
  }
}
