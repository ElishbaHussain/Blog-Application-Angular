import { Component, OnInit, Input} from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit{

  constructor(private postservice:PostService){}
 
  @Input() postData:Array<object>;
 ngOnInit(): void{
  this.postservice.loadFeatured().subscribe(val=>{
    console.log(val);
    this.postData=val;

 })
}}
