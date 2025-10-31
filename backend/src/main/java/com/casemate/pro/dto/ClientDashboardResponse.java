package com.casemate.pro.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ClientDashboardResponse {
    private Long activeCases;
    private Long totalDocuments;
    private Long upcomingAppointments;
    private Long unreadMessages;
    private List<CaseResponse> recentCases;
}
