import { Character } from './../../shared/model/character';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/service/characters.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  character: Character = new Character();

  constructor(
    private activatedRouter: ActivatedRoute,
    private charactersService: CharactersService
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      let id: number = +params['id'];
      if (id) {
        this.charactersService.findById(id).subscribe((response) => {
          this.character = response;
        })
      }
    })
  }
}
