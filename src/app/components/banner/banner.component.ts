import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
import { SBannerService } from 'src/app/service/s-banner.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {

  ban: Banner[] = [];

  constructor(private sBanner: SBannerService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.init();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  init(): void {
  }

}