package com.casemate.pro.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CaseResponse {
    private UUID id;
    private String caseNumber;
    private String title;
    private String description;
    private String status;
    private String clientName;
    private String lawyerName;
    private LocalDateTime nextHearing;
    private LocalDateTime updatedAt;
    private LocalDateTime createdAt;
}
