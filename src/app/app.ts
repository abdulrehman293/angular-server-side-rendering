// src/app/app.ts
import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Post {
  id: number;
  title: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main style="font-family: sans-serif; padding: 2rem;">
      <h1>Angular SSR Data Fetching</h1>
      <p>If you View Page Source, this list is baked into the raw HTML:</p>
      <ul>
        <li *ngFor="let post of posts">
          <strong>{{ post.id }}</strong> - {{ post.title }}
        </li>
      </ul>
    </main>
  `
})
export class App implements OnInit {
  private http = inject(HttpClient);
  posts: Post[] = [];

  ngOnInit() {
    // The server waits for this request to finish before rendering the HTML
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .subscribe(data => {
        this.posts = data;
      });
  }
}