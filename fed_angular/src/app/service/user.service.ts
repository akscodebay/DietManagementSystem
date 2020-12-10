import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Admin } from '../model/admin';
import { Observable } from 'rxjs';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Challenger } from '../model/challenger';
import { Response } from '../model/response';
import { dailyLog } from '../model/dailylog';
import { Monthly } from '../model/monthly';
import { MessageData } from '../model/messages';
import { FinalData } from '../model/finaldata';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient, @Inject(SESSION_STORAGE) private storage: WebStorageService) {
    this.usersUrl = 'http://localhost:8080/Capstone-DietManagementSystem';
  }


  resolveAfter1Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 500*x);
    });
  }

  saveInLocal(key, val): void {
    //console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
  }

  getFromLocal(key): string {
    //console.log('recieved= key:' + key);
    return this.storage.get(key);
  }

  removeFromLocal(key): void{
    sessionStorage.removeItem(key);
  }

  public findAll(): Observable<Challenger[]> {
    return this.http.get<Challenger[]>(this.usersUrl+"/getRequests");
  }

  public loginInfo(admin: Admin) {
    return this.http.post<Admin>(this.usersUrl+"/login/do", admin);
  }

  public register(challenger: Challenger) {
    return this.http.post<Response>(this.usersUrl+"/register/do", challenger);
  }

  public getCount(): Observable<Response> {
    return this.http.get<Response>(this.usersUrl+"/getCountRequests");
  }

  public approve(message: any){
    return this.http.post<Response>(this.usersUrl+"/approve", message);
  }

  public decline(message: any){
    return this.http.post<Response>(this.usersUrl+"/decline", message);
  }

  public getNonAssignedUser(): Observable<Challenger[]> {
    return this.http.get<Challenger[]>(this.usersUrl+"/getNonAssignedUser");
  }

  public changeBatchorGroup(challenger: Challenger){
    return this.http.post<Response>(this.usersUrl+"/changeBatchorGroup", challenger);
  }

  public deleteChallenger(challenger: Challenger){
    return this.http.post<Response>(this.usersUrl+"/deleteChallenger", challenger);
  }

  public getdetails(userId: string){
    return this.http.post<Challenger>(this.usersUrl+"/getdetails", userId);
  }

  public modifyChallenger(challenger: Challenger){
    return this.http.post<Response>(this.usersUrl+"/modifyChallenger", challenger);
  }

  public getMotivatorDetails(): Observable<Challenger[]> {
    return this.http.get<Challenger[]>(this.usersUrl+"/getMotivatorDetails");
  }

  public getdetailsMotivator(userId: string){
    return this.http.post<Challenger>(this.usersUrl+"/getdetailsMotivator", userId);
  }

  public modifyMotivator(challenger: Challenger){
    return this.http.post<Response>(this.usersUrl+"/modifyMotivator", challenger);
  }

  public deleteMotivator(challenger: Challenger){
    return this.http.post<Response>(this.usersUrl+"/deleteMotivator", challenger);
  }

  public changeBatch(challenger: Challenger){
    return this.http.post<Response>(this.usersUrl+"/changeBatch", challenger);
  }

  public changeChallenger(challenger: Challenger){
    return this.http.post<Response>(this.usersUrl+"/changeChallenger", challenger);
  }

  public changeMotivator(challenger: Challenger){
    return this.http.post<Response>(this.usersUrl+"/changeMotivator", challenger);
  }

  public uploadFile(data: FormData){
    return this.http.post<Response>(this.usersUrl+"/upload", data);
  }

  public downloadFile(): Observable<any>{
    return this.http.get(this.usersUrl+"/download/"+this.getFromLocal("username"), {responseType: 'blob'});
  }

  public getLogs(dailylog: dailyLog){
    return this.http.post<dailyLog[]>(this.usersUrl+"/dailyLogs/", dailylog);
  }

  public getCharts(month: Monthly){
    return this.http.post<Monthly[]>(this.usersUrl+"/monthlyCharts/", month);
  }

  public getAdminMessages(message: MessageData){
    return this.http.post<MessageData[]>(this.usersUrl+"/getAdminMessages", message);
  }

  public deleteAdminMessage(message: MessageData){
    return this.http.post<Response>(this.usersUrl+"/deleteAdminMessage", message);
  }

  public sendMessageMotivator(message: MessageData){
    return this.http.post<Response>(this.usersUrl+"/sendMessageMotivator", message);
  }

  public sendMessageChallenger(message: MessageData){
    return this.http.post<Response>(this.usersUrl+"/sendMessageChallenger", message);
  }
  
  public sendMessageIndividual(message: MessageData){
    return this.http.post<Response>(this.usersUrl+"/sendMessageIndividual", message);
  }

  public getAboveReport(report: FinalData){
    return this.http.post<FinalData>(this.usersUrl+"/getAboveReport", report);
  }

  public getBelowReport(report: FinalData){
    return this.http.post<FinalData>(this.usersUrl+"/getBelowReport", report);
  }

  public sendMessageGroup(message: MessageData){
    return this.http.post<Response>(this.usersUrl+"/sendMessageGroup", message);
  }

  public sendMessageBatch(message: MessageData){
    return this.http.post<Response>(this.usersUrl+"/sendMessageBatch", message);
  }

  public sendMessageAdmin(message: MessageData){
    return this.http.post<Response>(this.usersUrl+"/sendMessageAdmin", message);
  }

  public changePassword(admin: Admin){
    return this.http.post<Response>(this.usersUrl+"/changePassword", admin);
  }

  public saveDailyLog(dailylog: dailyLog){
    return this.http.post<Response>(this.usersUrl+"/saveDailyLog", dailylog);
  }

  public saveMonthlyLog(monthlylog: Monthly){
    return this.http.post<Response>(this.usersUrl+"/saveMonthlyLog", monthlylog);
  }
}