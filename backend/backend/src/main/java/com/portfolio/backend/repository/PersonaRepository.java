
package com.portfolio.backend.repository;

import com.portfolio.backend.models.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author edwin
 */
@Repository
public interface PersonaRepository  extends JpaRepository <Persona, Long>{
    
}
