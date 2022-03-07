import { Component, OnInit } from '@angular/core';
interface ItemData {
  href: string;
  title: string;
  description: string;
  content: string;
}
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  ngOnInit(): void {}
}
