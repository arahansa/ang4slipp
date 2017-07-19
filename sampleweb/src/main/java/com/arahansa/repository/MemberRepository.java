package com.arahansa.repository;

import com.arahansa.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by jarvis on 2017. 7. 19..
 */
@RepositoryRestResource
public interface MemberRepository extends JpaRepository<Member, Long>{
}
