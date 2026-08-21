package com.ikhlas.user.repository;

import com.ikhlas.user.model.UserDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserDetails,Integer> {

}
