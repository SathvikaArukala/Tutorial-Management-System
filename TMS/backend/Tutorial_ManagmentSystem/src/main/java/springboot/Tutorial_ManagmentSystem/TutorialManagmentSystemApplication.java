package springboot.Tutorial_ManagmentSystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import jakarta.annotation.PostConstruct;
import springboot.Tutorial_ManagmentSystem.model.TwilioConfig;
import com.twilio.Twilio;

@SpringBootApplication
public class TutorialManagmentSystemApplication {

	@Autowired
	private TwilioConfig twilioConfig;
	
	@PostConstruct
	public void setup() {
		Twilio.init(twilioConfig.getAccountSid(), twilioConfig.getAuthToken());
	}
	public static void main(String[] args) {
		SpringApplication.run(TutorialManagmentSystemApplication.class, args);
	}

}
