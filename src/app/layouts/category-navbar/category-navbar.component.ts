import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/service/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {
  categoryArray:Array<object>;
  constructor(private categorService:CategoriesService){

  }
  ngOnInit() :void{
    this.categorService.loadData().subscribe(val=>{
      this.categoryArray= val;
      
    })

  }


}
