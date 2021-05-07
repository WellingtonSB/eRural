import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
    this.desce()
  }

  desce(){

    window.addEventListener("scroll", ()=>{ 
      let header = document.querySelector('.header1');
      if (header != null){
        header.classList.toggle("stick", window.scrollY > 0);
      }
      
  })
    
  } 

}
