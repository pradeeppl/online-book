import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { timer, Subscription } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: 'app-write-essay',
  templateUrl: './write-essay.component.html',
  styleUrls: ['./write-essay.component.css']
})
export class WriteEssayComponent implements OnInit {

  wordCount: any;
  words: any;
  countDown: Subscription;
  seconds = 1200;
  tick = 1000;

  @ViewChild("answer") answer: ElementRef;

  wordCounter() {
    this.wordCount = this.answer ? this.answer.nativeElement.value.split(/\s+/) : 0;
    this.words = this.wordCount ? this.wordCount.length : 0;
  }

  constructor() { }

  ngOnInit() {
      this.countDown = timer(0, this.tick).subscribe(() => --this.seconds);
      setTimeout(() => { this.countDown.unsubscribe(); }, this.seconds * 1000);
  }

}

@Pipe({
  name: "formatTime"
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
