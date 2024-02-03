import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MainServiceService } from '../../../services/main-service.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, OnDestroy {

  myService = inject(MainServiceService);

  language: any = {};

  ES = {
    title: "Proyectos",
    description: "Aquí hay algunos proyectos en los que he trabajado durante este tiempo.",
    projects: [
      {
        name: "Ecommerce",
        work: "Trabajo Personal",
        description: "Modelo de ecommerce simple y funcional construido en Angular utilizable para cualquier tipo de productos.",
        web: "https://tommyyoliver-angular-ecommerce.netlify.app/",
        technologies: ["Angular"],
        img: "../../assets/ecommerce.png",
      },
      {
        name: "TaskList",
        work: "Trabajo Personal",
        description: "Aplicación Tasklist funcional almacenando sus valores en localstorage, destacada por su apariencia atractiva.",
        web: "https://tommyyoliver-tasklist.netlify.app/",
        technologies: ["React"],
        img: "../../assets/tasklist.png",
      },
      {
        name: "Generador de Contraseñas",
        work: "Trabajo Personal",
        description: "Generador de contraseñas facil de usar y util para la seguridad de tus cuentas.",
        web: "#",
        technologies: ["React"],
        img: "../../assets/generate-password.png",
      },
    ],
  }
  EN = {
    title: "Projects",
    description: "Here are some projects I have worked on during this time.",
    projects: [
      {
        name: "Ecommerce",
        work: "Personal Work",
        description: "Simple and functional ecommerce model built in Angular usable for any type of products.",
        web: "https://tommyyoliver-angular-ecommerce.netlify.app/",
        technologies: ["Angular"],
        img: "../../assets/ecommerce.png",
      },
      {
        name: "TaskList",
        work: "Personal Work",
        description: "Functional Tasklist application storing its values in localstorage, notable for its attractive appearance.",
        web: "https://tommyyoliver-tasklist.netlify.app/",
        technologies: ["React"],
        img: "../../assets/tasklist.png",
      },
      {
        name: "Generate Password",
        work: "Personal Work",
        description: "Easy-to-use and useful password generator for the security of your accounts.",
        web: "https://tommyyoliver.github.io/generate-password/",
        technologies: ["React"],
        img: "../../assets/generate-password.png",
      },
    ],
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
