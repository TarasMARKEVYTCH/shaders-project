import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-shaders',
  templateUrl: './custom-shaders.component.html',
  styleUrls: ['./custom-shaders.component.scss']
})
export class CustomShadersComponent implements OnInit {
  @ViewChild('canvas') main!: ElementRef;
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.http.get('/assets/shaders.html',{responseType: 'text'}).subscribe({
      next:(res)=>{
        this.main.nativeElement.src = "data:text/html;charset=utf-8," + res;
      }
    })
  }

}
