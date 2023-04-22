// comp1.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  public name:any=''; // for single data
  send(){
this.router.navigate(['/comp2'],{queryParams:{data:this.name}});
console.log('button cliked ');
}

// for multiple data
public name2:any='';
public mob:any='';
send2(){
  this.router.navigate(['/comp2'],{queryParams:{NAME2:this.name2,MOB:this.mob}});
  console.log('2nd button clicked');
}



}
