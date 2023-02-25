import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const modules = [MatToolbarModule, MatIconModule, MatButtonModule];

@NgModule({
  exports: [modules],
  imports: [modules],
})
export class MaterialModule {}
