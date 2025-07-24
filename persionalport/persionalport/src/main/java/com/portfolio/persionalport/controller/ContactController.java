package com.portfolio.persionalport.controller;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.portfolio.persionalport.DTO.ContactForm;
import com.portfolio.persionalport.entity.Contact;
import com.portfolio.persionalport.repository.ContactRepository;
@RestController
@RequestMapping("/api/contact")
public class ContactController {
    @Autowired
    private ContactRepository contactRepository;

    @PostMapping
    public String submitContactForm(@RequestBody ContactForm form) {
        Contact contact = new Contact();
        contact.setFullName(form.getFullName());
        contact.setEmail(form.getEmail());
        contact.setMobileNumber(form.getMobileNumber());
        contact.setSubject(form.getSubject());
        contact.setMessage(form.getMessage());
        contact.setCreatedAt(LocalDateTime.now());
        contactRepository.save(contact);

        return "Message sent successfully!";
    }
}