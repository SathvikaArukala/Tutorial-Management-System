import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../tutorial.service';
import { Tutorial } from '../tutorial';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrl: './tutorial-details.component.css'
})
export class TutorialDetailsComponent implements OnInit{

  id!: number
  tutorial!: Tutorial ;
  constructor(private route: ActivatedRoute, private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.tutorial = new Tutorial();
    this.tutorialService.getTutorialById(this.id).subscribe( data => {
      this.tutorial = data;
    });
  }
}
