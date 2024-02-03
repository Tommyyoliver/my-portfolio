import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MainServiceService } from '../../../services/main-service.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit, OnDestroy {

  myService = inject(MainServiceService);

  language: any = {};

  ES = {
    title: "Tommy Oliver",
    subtitle: "Desarrollador Web",
    about: {
      title: "¿Quién soy?",
      description: "Soy Tommy, comencé con un simple curso a los 16 años. Actualmente me encuentro con un amplio conocimiento en diferentes tecnologias y estudiando Licenciatura en Sistemas.",
      description2: "Ningun diseño lo es todo sin una lógica detras."
    },
    experience: "años dentro de la programación",
    location: "De Buenos Aires, AR",
  }
  EN = {
    title: "Tommy Oliver",
    subtitle: "Web Developer",
    about: {
      title: "Who I am?",
      description: "I'm Tommy, I started with a simple course at 16 years old. Currently I find myself with extensive knowledge in different technologies and studying a Bachelor's Degree in Systems.",
      description2: "No design is everything without logic behind it."
    },
    experience: "years inside in the programming",
    location: "From Buenos Aires, AR",
  }


  ngOnInit(): void {
    this.myService.getLanguage().subscribe(data => {
      this.language = data == "en" ? this.EN : this.ES;
    })
  }

  handleTheme() {
    this.myService.changeLanguage();
  }

  ngOnDestroy(): void {
    this.myService.languageSubject.unsubscribe();
  }
}
