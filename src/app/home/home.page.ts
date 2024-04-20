import { Component } from '@angular/core'
import { Asset } from '../shared/models/asset.model'
import { AssetService } from '../shared/services/asset.service'
import { getRandomWidth } from '../shared/functions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  assets: Asset[] = []
  list: number[] = [1,2,3,4,5,6]
  isLoading: boolean = false; 
  skeletonWidths = [0, 1, 2].map(() => getRandomWidth(20, 70))

  constructor(private assetService: AssetService) {}

  ionViewWillEnter(): void {
    this.assets = []
    this.isLoading = true;
    this.assetService.getAll().subscribe(response => {
      if (response.ok) {
        this.assets = response?.data;
        this.isLoading = false; 
      } else {
        console.log('error')
      }
    });
  }
}
