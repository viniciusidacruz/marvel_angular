import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IResult } from 'src/app/models/response';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  data: IResult[] = [];

  constructor(
    private heroesService: HeroesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  redirectToDetails(id: number): void {
    this.router.navigate(['/details'], {
      queryParams: { id },
    });
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const hero_name = params.get('value');
      const response = this.heroesService.getHero(hero_name);

      this.data = response?.data.results;
    });
  }
}
