package com.portfolio.persionalport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.portfolio.persionalport.entity.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
}