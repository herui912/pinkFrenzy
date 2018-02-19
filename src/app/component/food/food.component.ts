import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foods: Food[];
  name: String;

  constructor() { }

  ngOnInit() {
     this.foods = [
      {title: "Chinese Food", subTitle:"various", description:"Chinese is my nature. It's the way I born. Start from my blood to entire soul. ", imgUrl:"https://ali.xinshipu.cn/20130321/original/1363853741335.jpg", isEven: false },
      {title: "Japanese Food", subTitle:"dedicate", description:"baozi, shuizhuniu,", imgUrl:"http://sf.epochtimes.com/wp-content/uploads/2013/11/0.jpg", isEven: true},
      {title: "Korea Food", subTitle:"spicy", description:"baozi, shuizhuniu,", imgUrl:"https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/14469684_1797051063868914_949259993503040798_n.jpg?oh=6e87e810375ac0dc5de4cf2ad0853bee&oe=5AF30115", isEven: false},
      {title: "America Food", subTitle:"original", description:"baozi, shuizhuniu,", imgUrl:"https://www.recipetineats.com/wp-content/uploads/2016/09/Baked-Pork-Chops_10-landscape.jpg", isEven: true}
    ]
  }


}
interface Food{
  title: String;
  subTitle: String;
  description: String; 
  imgUrl: String;
  isEven: boolean;
}
