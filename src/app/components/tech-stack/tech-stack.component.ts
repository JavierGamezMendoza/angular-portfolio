import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import hljs from 'highlight.js';
import 'highlight.js/styles/portfolio-theme.css';
import TypeIt from "typeit";

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [],
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.scss'
})
export class TechStackComponent implements AfterViewChecked, OnInit {
  @ViewChild('codeBlock') codeBlock!: ElementRef;

  constructor() { }

  code: Object =
    {
      "dev": {
        "name": "Javier",
        "lastName": "Gámez",
        "studies": {
          "IES Heliche": {
            "completed": "Sistemas MicroInformáticos y Redes",
            "FCT": "Tecnicom Gines"
          },
          "IES Alixar": {
            "completed": "Desarrollo de aplicaciones Web",
            "fct": "Eviden Atos"
          }
        },
        "skills": [
          "Angular/Springboot/Bootstrap/Git/REST_API/JPA/JWT_security"
        ]
      }
    }


  ngAfterViewChecked(): void {
    if (this.codeBlock) {
      hljs.highlightBlock(this.codeBlock.nativeElement);
    }
  }
  ngOnInit(): void {
    this.write();
  }

  write() {
    // new TypeIt("#hero", {
    //   speed: 30,
    //   startDelay: 100,
    //   waitUntilVisible: true
    // })
    //   .type(JSON.stringify(this.code, null, 2), {
    //     delay: 10
    //   })
    //   .go();

    new TypeIt('#hero', {
      strings: [
        `<pre><code class="language-json">
<span class="hljs-keyword">{
</span>  <span class="hljs-property">"dev"</span>: {
    <span class="hljs-property">"name"</span>: <span class="hljs-string">"Javier"</span>,
    <span class="hljs-property">"lastName"</span>: <span class="hljs-string">"Gámez"</span>,
    <span class="hljs-property">"studies"</span>: {
      <span class="hljs-property">"IES Heliche"</span>: {
        <span class="hljs-property">"completed"</span>: <span class="hljs-string">"Sistemas MicroInformáticos y Redes"</span>,
        <span class="hljs-property">"FCT"</span>: <span class="hljs-string">"Tecnicom Gines"</span>
      },
      <span class="hljs-property">"IES Alixar"</span>: {
        <span class="hljs-property">"completed"</span>: <span class="hljs-string">"Desarrollo de aplicaciones Web"</span>,
        <span class="hljs-property">"fct"</span>: <span class="hljs-string">"Eviden Atos"</span>
      }
    },
    <span class="hljs-property">"skills"</span>: [
      <span class="hljs-string">"Angular/Springboot/Bootstrap/Git/REST_API/JPA"</span>
    ]
  }
<span class="hljs-keyword">}</span>
</code></pre>`
      ],
      speed: 4,
      lifeLike: true,
      cursor: true
    }).go();
  }
}

