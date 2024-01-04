package springboot.Tutorial_ManagmentSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import springboot.Tutorial_ManagmentSystem.model.Tutorial;

@Repository

public interface TutorialRepository extends JpaRepository<Tutorial, Integer>{
	List<Tutorial> findByemail(String input);

}
