import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../tutorial';
import { TutorialService } from '../tutorial.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrl: './tutorial-list.component.css'
})
export class TutorialListComponent implements OnInit {
  
  

  tutorials!: Tutorial[]  ;
  

  constructor(private tutorialService: TutorialService,
    private router: Router, protected userService: UserService) { }

    ngOnInit(): void {
      this.getTutorials();
    }

    private getTutorials(){
      this.tutorialService.getTutorialList().subscribe(data => {
        this.tutorials = data;
      });
    }

    tutorialDetails(id:number){

      
      this.router.navigate(['tutorial-details',id]);
    }

    updateTutorial(id:number){
      this.router.navigate(['update-tutorial',id]);
    }

    deleteTutorial(id:number){
      
      this.tutorialService.deleteTutorial(id).subscribe(data =>{
        console.log(data);
        this.getTutorials();
      })
    }
}
