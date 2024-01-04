package springboot.Tutorial_ManagmentSystem.services;

import java.util.List;
import java.util.Optional;

import springboot.Tutorial_ManagmentSystem.model.Tutorial;

public interface TutorialService {
public Tutorial addTutorial(Tutorial tutorial);
	
	public String updateTutorial(int id,Tutorial updatedValue);
	
	public Optional<Tutorial> getTutorialById(int id);
	
	public List<Tutorial> getAllTutorials();	

    public String removeTutorialById(int id);
	
	public Tutorial removeAll();
}
