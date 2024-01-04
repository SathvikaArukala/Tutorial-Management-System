package springboot.Tutorial_ManagmentSystem.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springboot.Tutorial_ManagmentSystem.model.Tutorial;
import springboot.Tutorial_ManagmentSystem.serviceimpl.TutorialServiceImpl;

@CrossOrigin(origins="http://localhost:4200")
@RestController //controller + response body , accepts request , returns respon 
@RequestMapping("/tutorial.com")
public class TutorialController {
	@Autowired
	private TutorialServiceImpl tutorialImpl;
	
	@PostMapping("/addTutorial")
	public Tutorial addTutorialToDb(@RequestBody Tutorial tutorial)
	{
		Tutorial tutorialObj=tutorialImpl.addTutorial(tutorial);
		return tutorialObj;
	}
	
	@GetMapping("readById/{id}")
	//@ResponseBody
	public Optional<Tutorial> getByTutorialId(@PathVariable int id) 
	{
		Optional<Tutorial> tutorialObj = tutorialImpl.getTutorialById(id);
		return tutorialObj;
	}
	
	@GetMapping("/readAllTutorials")
	//@ResponseBody
	public List<Tutorial> getAllTutorials()
	{
		List<Tutorial> tutorialObj=tutorialImpl.getAllTutorials();
		return tutorialObj;
	}
	
	@PutMapping("/updateTutorial/{id}")
	public String updateTutorialDetails(@PathVariable("id") int id,@RequestBody Tutorial updatedValue)
	{
		String tutorialObj = tutorialImpl.updateTutorial(id, updatedValue);
        return "value updated";
	}
	
	@DeleteMapping("/deleteTutorial/{id}")
	public   String deleteTutorialById(@PathVariable int id)
	{
		String tutorialObj = tutorialImpl.removeTutorialById(id);
		return "deleted";
	}
	
	@DeleteMapping("/deleteAllTutorial")
	public void deleteAllTutorial(){
		tutorialImpl.removeAll();
		
	}

}
