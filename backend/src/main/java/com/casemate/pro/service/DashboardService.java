package com.casemate.pro.service;

import com.casemate.pro.dto.CaseResponse;
import com.casemate.pro.dto.ClientDashboardResponse;
import com.casemate.pro.dto.DashboardStatsResponse;
import com.casemate.pro.dto.LawyerDashboardResponse;
import com.casemate.pro.entity.Case;
import com.casemate.pro.entity.User;
import com.casemate.pro.repository.CaseRepository;
import com.casemate.pro.repository.DocumentRepository;
import com.casemate.pro.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

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

    public LawyerDashboardResponse getLawyerFullDashboard(User lawyer) {
        Long activeCases = caseRepository.countActiveCasesByLawyer(lawyer);
        Long pendingCases = caseRepository.countPendingCasesByLawyer(lawyer);
        Long closedCases = caseRepository.countClosedCasesByLawyer(lawyer);
        Long totalClients = userRepository.countClients();
        Double monthlyRevenue = calculateMonthlyRevenue(lawyer);
        Long pendingTasks = calculatePendingTasks(lawyer);
        
        // Get recent 4 cases
        List<Case> recentCases = caseRepository.findRecentCasesByLawyer(lawyer, PageRequest.of(0, 4));
        List<CaseResponse> caseResponses = recentCases.stream()
            .map(this::convertToCaseResponse)
            .collect(Collectors.toList());

        return new LawyerDashboardResponse(activeCases, pendingCases, closedCases, totalClients, monthlyRevenue, pendingTasks, caseResponses);
    }

    public ClientDashboardResponse getClientFullDashboard(User client) {
        Long activeCases = caseRepository.countActiveCasesByClient(client);
        Long pendingCases = caseRepository.countPendingCasesByClient(client);
        Long closedCases = caseRepository.countClosedCasesByClient(client);
        Long totalDocuments = documentRepository.countDocumentsByClient(client);
        Long upcomingAppointments = countUpcomingAppointments(client);
        Long unreadMessages = 0L; // Placeholder - implement when message system is ready
        
        // Get recent cases
        List<Case> recentCases = caseRepository.findRecentCasesByClient(client, PageRequest.of(0, 6));
        List<CaseResponse> caseResponses = recentCases.stream()
            .map(this::convertToCaseResponse)
            .collect(Collectors.toList());

        return new ClientDashboardResponse(activeCases, pendingCases, closedCases, totalDocuments, upcomingAppointments, unreadMessages, caseResponses);
    }

    private CaseResponse convertToCaseResponse(Case caseEntity) {
        CaseResponse response = new CaseResponse();
        response.setId(caseEntity.getId());
        response.setCaseNumber(caseEntity.getCaseNumber());
        response.setTitle(caseEntity.getTitle());
        response.setDescription(caseEntity.getDescription());
        response.setStatus(caseEntity.getStatus().name());
        response.setClientName(caseEntity.getClient().getName());
        response.setLawyerName(caseEntity.getLawyer().getName());
        response.setNextHearing(caseEntity.getNextHearing());
        response.setUpdatedAt(caseEntity.getUpdatedAt());
        response.setCreatedAt(caseEntity.getCreatedAt());
        return response;
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

    private Long countUpcomingAppointments(User client) {
        // Count cases with upcoming hearings
        List<Case> cases = caseRepository.findRecentCasesByClient(client, PageRequest.of(0, 100));
        return cases.stream()
            .filter(c -> c.getNextHearing() != null && c.getNextHearing().isAfter(LocalDateTime.now()))
            .count();
    }
}