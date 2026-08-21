package com.ikhlas.user.model;


import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;
import java.util.Collections;


public class UserPrincipal implements org.springframework.security.core.userdetails.UserDetails {


     private UserDetails user;

     public UserPrincipal(UserDetails user){
         this.user=user;
     }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public @Nullable String getPassword() {
        return user.getPassword();
    }

    @Override
    public @Nullable String getUsername(){ return user.getName();}

}
