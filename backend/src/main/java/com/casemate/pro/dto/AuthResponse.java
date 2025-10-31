package com.casemate.pro.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private UserResponse user;

    @Data
    @AllArgsConstructor
    public static class UserResponse {
        private UUID id;
        private String email;
        private String name;
        private String role;
    }
}