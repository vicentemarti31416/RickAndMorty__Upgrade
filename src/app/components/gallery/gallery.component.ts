import { Character } from 'src/app/shared/model/character';
import { CharactersService } from './../../shared/service/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  characters: Character[] = [];
  page: number = 1;
  name: string = '';

  constructor(
    private charactersService: CharactersService
    ) { }

  ngOnInit(): void {
    this.findPageableByName(this.page, this.name);
  }

  public findPageable(page: number): void {
    this.charactersService.findPageable(page).subscribe((response) => {
      this.characters = response.results;
    })
  }

  public findPageableByName(page: number, name: string): void {
    console.log(page);
    console.log(name);
    this.charactersService.findPageableByName(page, name).subscribe((response) => {
      this.characters = response.results;
    })
  }
}

