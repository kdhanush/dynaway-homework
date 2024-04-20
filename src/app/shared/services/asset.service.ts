import { Injectable } from '@angular/core'
import { Observable, of, throwError } from 'rxjs'
import { IErrorResponse, IResponseData } from '../models/asset.model'
import { mockAssetHttpResponse } from './asset.test'
import { catchError, delay, tap } from 'rxjs/operators'
import { getRandomInt } from '../functions'
import { ToastService } from 'src/app/services/toast.service'

@Injectable({
  providedIn: 'root',
})
export class AssetService {

  constructor(private toastService : ToastService) {
  }

  getAll(): Observable<IResponseData> {
    return of(mockAssetHttpResponse).pipe(
      delay(getRandomInt(1000) + 500), // fake random http delay,
      tap(() => { // a small chance for the data fetch to error
        if (getRandomInt(10) % 10 === 0) {
          throw {
            message: 'Http error',
            status: 400
          };
        }
      }),
      catchError((error : IErrorResponse) => {
        let errorMsg: string = this.getErrorMessgae(error)
        this.toastService.presentToast(errorMsg,5000)
        throw error
      })
    )
  }

  private getErrorMessgae(error: IErrorResponse) {
    switch (error.status){
      case 400:
        return `Error: ${error.message}`
      case 500: 
        return `Internal Server Error: ${error.message}`
      default: 
        return 'Unknown server error'
    }
  }
}
