import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.scss']
})
export class EligibilityCalculatorComponent implements OnInit {
 repaymentOptions=[ '6 Months','9 Months','12 Months','15 Months'];
 loanAmount='1,00,000';
 EMI='15,000';
  constructor() { }

  ngOnInit() {
  }
  onToggleClick(e){

  }

}
