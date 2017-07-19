package com.arahansa.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Created by jarvis on 2017. 7. 19..
 */

@Entity
public class Member {

    @Id
    @GeneratedValue
    Long id;


    String name;


    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
