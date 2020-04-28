import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: object[] = [];
  posts: any;

  constructor(private crud: CrudService, private router: Router) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.crud.getArticles().subscribe(
      res => {
        // for (let i = 0; i < 4; i++) {
          res.forEach(doc => {
            this.articles.push({
              title: doc.data().title,
              content: doc.data().content,
              path: doc.data().path,
              ID: doc.id
            });
          });
          this.posts = this.articles;
        // }
      }
    );
  }

  readMore(ID: string) {
    this.crud.getArticles().subscribe(
      res => {
        res.forEach(doc => {
          if (ID === doc.id) {
            sessionStorage.setItem('articleID', doc.id);
            this.router.navigate(['articles/article']);
          }
        });
      }
    );
  }
}
