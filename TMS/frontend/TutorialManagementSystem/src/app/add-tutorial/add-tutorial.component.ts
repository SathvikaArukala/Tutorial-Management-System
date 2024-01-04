import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../tutorial';
import { TutorialService } from '../tutorial.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrl: './add-tutorial.component.css'
})
export class AddTutorialComponent implements OnInit{

  tutorial: Tutorial=new Tutorial();

  constructor(private tutorialService: TutorialService,
    private router: Router) { }

    ngOnInit(): void {
    }
saveTutorial(){
  this.tutorialService.addTutorial(this.tutorial).subscribe(data=>{
    console.log(data);
    this.goToTutorialList();
  });
  }
  goToTutorialList() {
    this.router.navigate(['/tutorials']);
  }
onSubmit() {
  console.log(this.tutorial);
  this.saveTutorial();
}
}
