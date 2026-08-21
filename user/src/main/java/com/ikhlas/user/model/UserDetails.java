package com.ikhlas.user.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDetails {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String fatherName;
    @Email
    private String email;
    private String phoneNo;
    private String qualification;
    private List<String> skills;
    @Enumerated(EnumType.STRING)
    private Nationality nationality;
    private LocalDate dob;
    private String gender;
    private String address;
    private String city;
    private String state;
    private String pincode;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

}
