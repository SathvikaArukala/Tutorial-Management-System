package springboot.Tutorial_ManagmentSystem.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import springboot.Tutorial_ManagmentSystem.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	@Query(value = "SELECT * FROM USER u WHERE u.user_email = ?1",nativeQuery = true  )
	public Optional<User> findByuserEmail(String email);

}