import { Component } from '@angular/core';
import { ethers } from 'ethers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // number that starts at 0
  blockNumber: number | string | undefined;
  provider: ethers.providers.BaseProvider;
  // constructor function
  constructor() {
    this.blockNumber = "Loading...";
    this.provider = ethers.getDefaultProvider('goerli');
    // here we are listenting to the promise and when it is completed then receiving the block object
    this.provider.getBlock('latest').then((block) => {
      this.blockNumber = block.number;
    });
  }

  syncBlock() {

  }
}
