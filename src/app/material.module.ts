import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    MatRadioModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [MatRadioModule, MatExpansionModule, MatButtonModule, MatIconModule]
})
export class MaterialModule {}
