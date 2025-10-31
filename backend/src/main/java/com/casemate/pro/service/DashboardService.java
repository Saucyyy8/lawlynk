package com.casemate.pro.service;

import com.casemate.pro.dto.DashboardStatsResponse;
import com.casemate.pro.entity.User;
import com.casemate.pro.repository.CaseRepository;
import com.casemate.pro.repository.DocumentRepository;
import com.casemate.pro.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final CaseRepository caseRepository;
    private final UserRepository userRepository;
    private final DocumentRepository documentRepository;

    public DashboardStatsResponse getLawyerDashboardStats(User lawyer) {
        Long activeCases = caseRepository.countActiveCasesByLawyer(lawyer);
        Long totalClients = userRepository.countClients(); // All clients for this lawyer
        Double monthlyRevenue = calculateMonthlyRevenue(lawyer); // Placeholder calculation
        Long pendingTasks = calculatePendingTasks(lawyer); // Placeholder calculation

        return new DashboardStatsResponse(activeCases, totalClients, monthlyRevenue, pendingTasks);
    }

    public DashboardStatsResponse getClientDashboardStats(User client) {
        Long activeCases = caseRepository.countCasesByClient(client);
        Long totalDocuments = documentRepository.countDocumentsByClient(client);

        // For clients, we'll use different metrics
        return new DashboardStatsResponse(
            activeCases,
            totalDocuments, // Using document count instead of client count
            0.0, // Clients don't need revenue data
            0L // Clients don't need pending tasks
        );
    }

    private Double calculateMonthlyRevenue(User lawyer) {
        // Placeholder implementation - you can implement based on your business logic
        // This could involve billing records, case values, etc.
        return 45230.50;
    }

    private Long calculatePendingTasks(User lawyer) {
        // Placeholder implementation - you can implement based on your business logic
        // This could involve upcoming hearings, document reviews, etc.
        return 8L;
    }
}
