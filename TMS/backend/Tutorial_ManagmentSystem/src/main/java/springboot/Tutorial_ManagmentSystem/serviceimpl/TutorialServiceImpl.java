package springboot.Tutorial_ManagmentSystem.serviceimpl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import springboot.Tutorial_ManagmentSystem.model.Tutorial;
import springboot.Tutorial_ManagmentSystem.repository.TutorialRepository;
import springboot.Tutorial_ManagmentSystem.services.TutorialService;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.mail.javamail.JavaMailSender;

@Service
public class TutorialServiceImpl  implements TutorialService {

	@Autowired
	private JavaMailServiceImpl mailImplObj;
	
	@Autowired
	private TutorialRepository tutorialRepo;
	@Override
	public Tutorial addTutorial(Tutorial tutorial) {
		
		Tutorial tutorialObj = tutorialRepo.save(tutorial);

		return tutorialObj;
	}
	@Override
	public String updateTutorial(int id, Tutorial updatedValue) {
		Optional<Tutorial> tutorialObj = tutorialRepo.findById(id);
		if (tutorialObj.isPresent()) {
	        Tutorial existingTutorial = tutorialObj.get();

	        // Update properties of the existingTutorial with values from updatedTutorial
	        existingTutorial.setName(updatedValue.getName());
	        // Add similar lines for other properties you want to update

	        tutorialRepo.save(existingTutorial);
	        
	        mailImplObj.sendEmail("diviyadayyalaa@gmail.com", "check", "New details are updated...!!!!" + updatedValue.getName());
	        
	        return "Tutorial updated successfully";
	    } else {
	        return "Tutorial not found";
	    
		//implobj.sendEmail("updatedValue.getEmailId()", "check", "New details are updated...!!!!"+updatedValue.getName());
		//mailImplObj.sendEmail("diviyadayyalaa@gmail.com", "check", "New details are updated...!!!!" + updatedValue.getName());
	}
	}

	@Override
	public Optional<Tutorial> getTutorialById(int id) {
		Optional<Tutorial> tutorialObj = tutorialRepo.findById(id);
		if (tutorialObj.isPresent()) {
			return tutorialObj;
		} else {
			return null;
		}
	}

	@Override
		public List<Tutorial> getAllTutorials() {
			List<Tutorial> tutorialObj = tutorialRepo.findAll();
			return tutorialObj;
		}

	@Override
	public String removeTutorialById(int id) {
		tutorialRepo.deleteById(id);
		String str=OTPGeneratorImpl.generateOtp();
		PhoneNumber to=new PhoneNumber("+916300133146");// receiver mobile number 
		PhoneNumber from=new PhoneNumber("+12054795173"); //  sender's Twill number 
		String otpMessage=" it is working" + str + " this tutorial project";
		Message message=Message.creator(to, from,otpMessage).create();
		return "Delete data successfully";
	}

	@Override
	public Tutorial removeAll() {
		tutorialRepo.deleteAll();
		return null;
	   }

}
