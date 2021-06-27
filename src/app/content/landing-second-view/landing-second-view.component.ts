import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-second-view',
  templateUrl: './landing-second-view.component.html',
  styleUrls: ['./landing-second-view.component.scss']
})
export class LandingSecondViewComponent implements OnInit {
  products=[{imgUrl:'../../../assets/images/Get Paid Instantly.png',title:"Quick cash disbursement",content:"Get terms loans that your business needs within 72 hrs"},
  {imgUrl:'../../../assets/images/Low interest rate.png',title:"Low-interest rate",content:"Achieve your financial goals with an amazing interest rate starting at 13% per annum"},
  {imgUrl:'../../../assets/images/Secure Payments.png',title:"Zero Paperwork",content:"Get started instantly by submitting only your basic details & bank statements"},
  {imgUrl:'../../../assets/images/freelancer_feature_icon_6@1.5x.png',title:"Ace your business finances",content:"Manage banking, accounting & everything in between, on one platform"},
  {imgUrl:'../../../assets/images/Covid.png',title:"Loans to fight COVID-19",content:"Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
