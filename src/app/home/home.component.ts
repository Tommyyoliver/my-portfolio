import { Component } from '@angular/core';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WelcomeComponent, ProjectsComponent, TechnologiesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
