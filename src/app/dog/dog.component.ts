import { DogService } from './../dog.service';
import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  dog: Dog = {} as Dog;

  constructor(private service: DogService){}

  ngOnInit(): void {
    this.loadDog();
  }

  loadDog(){
    this.service.getDog().subscribe(
      {
        next : data => this.dog = data
      }
    );
  }

  getBreed() : string [] {
    return this.dog.message.split("/")[4].split("-");
  }

}




