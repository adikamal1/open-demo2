import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './components/background/background.component';
import { CustomRangeComponent } from './components/custom-range/custom-range.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';
import { CustomToggleComponent } from './components/custom-toggle/custom-toggle.component';



@NgModule({
  declarations: [BackgroundComponent,CustomRangeComponent,ProductCardComponent, CustomDropdownComponent, CustomToggleComponent],
  imports: [
    CommonModule
  ],
  exports:[
    BackgroundComponent,CustomRangeComponent,ProductCardComponent,CustomToggleComponent,CustomDropdownComponent
  ]
})
export class SharedModule { }
