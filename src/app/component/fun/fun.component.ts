import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css']
})
export class FunComponent implements OnInit {
  funs: Fun [];

  constructor() { }

  ngOnInit() {
    this.funs = [
      {imgIcon: "https://nebula.wsimg.com/obj/MUNCQzk4REQ5RkY2RjdDREZFQkY6NzcyNTY5NzFkOGE1ZWQ5ZDkyOWM4YjJiNGI0ZTk3NDQ6Ojo6OjA=", header: "Toys", description: "They are angels, give mepower and support", detailUrl:""},
      {imgIcon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPvTiJqYfGp2VqSrPrgNFUwXouUR8UcsqUu8wnVpYZ4QekR6O", header: "Games", description: "I experience totally differnt worlds from them. It told me so many wisdoms. Who knows which is real which is game.", detailUrl:""},
      {imgIcon: '../../.././img/MrMrs.jpg', header: "Projects", description: "Little braklets, photoes, arts. It's just for my specific fortune life", detailUrl:""}
    ]
  }


}

interface Fun{
  imgIcon: String;
  header: String;
  description: String;
  detailUrl: String;
}
