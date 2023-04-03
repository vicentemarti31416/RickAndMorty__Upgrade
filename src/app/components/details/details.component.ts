import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  message: string | null = '';

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      this.message = params.get('message');
    })
  }
}
