import { Injectable } from '@angular/core';
import { Observable, catchError, map, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { foodVendor } from '../models/food-vendors.model';
import { retailVendor } from '../models/retail-vendors.model';
import { podcastDetail } from '../models/podcasts.model';
import { featureDetail } from '../models/features.model';
import { eventDetail } from '../models/events.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': environment.RAPID_API_KEY,
      'X-RapidAPI-Host': environment.RAPID_API_BASE_HOST
    })
  }
  constructor(private http: HttpClient) { }

  loadFoodVendors(): Observable<foodVendor[]> {

    return this.http.get<any>(`${environment.RAPID_API_BASE_URL}/food`, this.httpOptions)
      .pipe(
        map(res =>
          res
        ),
        shareReplay(),
        catchError((err) => {
          throw err + 'Request failed:';
        })
      )
  }

  loadFoodVendorById(foodVendorId: number): Observable<foodVendor> {

    return this.http.get<any>(`${environment.RAPID_API_BASE_URL}/food/${foodVendorId}`, this.httpOptions)
      .pipe(
        map(res => res[0]),
        shareReplay(),
        catchError((err) => {
          throw err + 'Request failed:';
        })
      )
  }

  loadRetailVendors(): Observable<retailVendor[]> {

    return this.http.get<any>(`${environment.RAPID_API_BASE_URL}/retail`, this.httpOptions)
      .pipe(
        map(res =>
          res
        ),
        shareReplay(),
        catchError((err) => {
          throw err + 'Request failed:';
        })
      )
  }

  loadRetailVendorById(retailVendorId: number): Observable<retailVendor> {
    return this.http.get<any>(`${environment.RAPID_API_BASE_URL}/retail/${retailVendorId}`, this.httpOptions)
      .pipe(
        map(res => res[0]),
        shareReplay(),
        catchError((err) => {
          throw err + 'Request failed:';
        })
      )
  }

  loadCommunityInfo(): Observable<any> {
    return this.http.get<any>(`${environment.RAPID_API_BASE_URL}/community`, this.httpOptions)
      .pipe(
        map(res =>
          res
        ),
        tap(val => console.log(val)),
        shareReplay(),
        catchError((err) => {
          throw err + 'Request failed:';
        })
      )
  }

  loadAllEvents(): Observable<eventDetail[]> {

    return this.http.get<any>(`${environment.RAPID_API_BASE_URL}/events`, this.httpOptions)
      .pipe(
        map(res =>
          res
        ),
        shareReplay(),
        catchError((err) => {
          throw err + 'Request failed:';
        })
      )
  }

  loadAllFeatures(): Observable<featureDetail[]> {

    return this.http.get<any>(`${environment.RAPID_API_BASE_URL}/features`, this.httpOptions)
      .pipe(
        map(res =>
          res
        ),
        shareReplay(),
        catchError((err) => {
          throw err + 'Request failed:';
        })
      )
  }


  loadAllPodcasts(): Observable<podcastDetail[]> {

    return this.http.get<any>(`${environment.RAPID_API_BASE_URL}/podcasts`, this.httpOptions)
      .pipe(
        map(res =>
          res
        ),
        shareReplay(),
        catchError((err) => {
          throw err + 'Request failed:';
        })
      )
  }
}
