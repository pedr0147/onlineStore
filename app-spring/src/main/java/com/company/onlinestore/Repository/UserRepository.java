package com.company.onlinestore.Repository;

import com.company.onlinestore.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
   public User save(User user);

   public Optional<User> findById(Long userId);

}
