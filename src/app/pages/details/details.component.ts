import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IResult } from 'src/app/models/response';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  data: IResult | null = null;
  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const hero_id = params.get('id');
      const response = this.heroesService.getDetails(hero_id);

      this.data = response?.data.results[0];
    });
  }
}
