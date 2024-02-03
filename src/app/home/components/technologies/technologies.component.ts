import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MainServiceService } from '../../../services/main-service.service';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent implements OnInit, OnDestroy {

  myService = inject(MainServiceService);

  language: any = {};

  EN = {
    title: "Technologies",
    description: "These are the technologies I have worked with.",
  }
  ES = {
    title: "Tecnologias",
    description: "Estas son las tecnologías con las que he trabajado.",
  }

  ngOnInit(): void {
    this.myService.getLanguage().subscribe(data => {
      this.language = data == "en" ? this.EN : this.ES;
    })
  }

  ngOnDestroy(): void {
    this.myService.languageSubject.unsubscribe();
  }
}
