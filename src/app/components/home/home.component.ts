import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsFormComponent } from '../news-form/news-form.component';
import { BenefitCardComponent } from '../benefit-card/benefit-card.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, 
    NgOptimizedImage, 
    BtnPrimaryComponent, 
    NewsFormComponent, 
    BenefitCardComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
