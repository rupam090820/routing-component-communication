import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
public reciveddata:any=''; // for single data
public name:any=''; // for multiple data
public mob:any=''; // for multiple data
public OBJ1:any={};

  constructor(public activatedroute:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe((item:any)=>{
this.reciveddata=item.data;
    });

    //for multiple data
    this.activatedroute.queryParams.subscribe((item2:any)=>{
      this.name=item2.NAME2;
      this.mob=item2.MOB;
    });
  
  }

  reset(){
    this.router.navigate(['/comp1']);
  }
}
