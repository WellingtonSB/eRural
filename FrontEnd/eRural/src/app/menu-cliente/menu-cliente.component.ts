import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public router: Router
    
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.desce()
  }

  /* <script type='text/javascript'>
window.addEventListener("scroll", function(){
    var header = document.querySelector('header');
    header.classList.toggle("stick," window.scrollY >0);
})
</script> */

/*FUNCIONAL*/
desce(){

  window.addEventListener("scroll", ()=>{ 
    let header = document.querySelector('.header1');
    if (header != null){
      header.classList.toggle("stick", window.scrollY > 0);
    }
    
})
  
} 

}
