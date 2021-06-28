import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FooterComponent, HeaderComponent } from './components';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  exports: [
    FooterComponent,
    HeaderComponent,
    MatBottomSheetModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSnackBarModule
  ],
  imports: [MatToolbarModule]
})
export class SharedModule {}
