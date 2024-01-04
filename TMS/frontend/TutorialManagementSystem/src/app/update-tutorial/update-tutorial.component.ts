import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tutorial } from '../tutorial';
import { TutorialService } from '../tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-tutorial',


  templateUrl: './update-tutorial.component.html',
  styleUrls: ['./update-tutorial.component.css'] // Corrected property name and array notation
})

export class UpdateTutorialComponent implements OnInit {
  id!: number;
  tutorial: Tutorial = new Tutorial();

  constructor(private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.tutorialService.getTutorialById(this.id).subscribe(data => {
      this.tutorial = data;
    } );
  }

  onSubmit() {
    this.tutorialService.updateTutorial(this.id, this.tutorial).subscribe(data => {
      this.goToTutorialList();
    });
  }

  goToTutorialList() {
    this.router.navigate(['/tutorials']);
  }
}
