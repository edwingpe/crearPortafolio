/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.createPortfolio.backend.repository;

import com.createPortfolio.backend.models.ERole;
import com.createPortfolio.backend.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 *
 * @author edwin
 */
@Repository
public interface RolRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
    
}
