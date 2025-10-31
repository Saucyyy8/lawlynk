package com.casemate.pro.controller;

import com.casemate.pro.entity.Case;
import com.casemate.pro.entity.User;
import com.casemate.pro.service.AuthService;
import com.casemate.pro.service.CaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/cases")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CaseController {

    private final CaseService caseService;
    private final AuthService authService;

    @GetMapping
    public ResponseEntity<Map<String, Object>> getCases(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String status,
            @RequestParam(defaultValue = "recent") String sort) {
        try {
            User currentUser = authService.getCurrentUser();
            Page<Case> casePage;
            
            if (currentUser.getRole() == User.Role.LAWYER) {
                casePage = caseService.getCasesByLawyer(currentUser, page, size, status, sort);
            } else {
                casePage = caseService.getCasesByClient(currentUser, page, size);
            }
            
            Map<String, Object> response = new HashMap<>();
            response.put("cases", casePage.getContent());
            response.put("total", casePage.getTotalElements());
            response.put("limit", size);
            response.put("offset", page * size);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Case> getCaseById(@PathVariable UUID id) {
        try {
            User currentUser = authService.getCurrentUser();
            Case caseEntity = caseService.getCaseById(id, currentUser);
            return ResponseEntity.ok(caseEntity);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build(); 
        }
    }

    @PostMapping
    @PreAuthorize("hasRole('CLIENT')")
    public ResponseEntity<Case> createCase(@RequestBody Case caseData) {
        try {
            User currentUser = authService.getCurrentUser();
            Case createdCase = caseService.createCase(caseData, currentUser, caseData.getLawyer());
            return ResponseEntity.status(201).body(createdCase);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build(); 
        }
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('LAWYER')")
    public ResponseEntity<Case> updateCase(@PathVariable UUID id, @RequestBody Case updateData) {
        try {
            User currentUser = authService.getCurrentUser();
            Case updatedCase = caseService.updateCase(id, updateData, currentUser);
            return ResponseEntity.ok(updatedCase);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build(); 
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('LAWYER')")
    public ResponseEntity<Void> deleteCase(@PathVariable UUID id) {
        try {
            User currentUser = authService.getCurrentUser();
            caseService.deleteCase(id, currentUser);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/recent")
    public ResponseEntity<List<Case>> getRecentCases(@RequestParam(defaultValue = "5") int limit) {
        try {
            User currentUser = authService.getCurrentUser();
            List<Case> recentCases;
            
            if (currentUser.getRole() == User.Role.LAWYER) {
                recentCases = caseService.getRecentCasesByLawyer(currentUser, limit);
            } else {
                recentCases = caseService.getRecentCasesByClient(currentUser, limit);
            }
            
            return ResponseEntity.ok(recentCases);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build(); 
        }
    }

    @PostMapping("/{id}/accept")
    @PreAuthorize("hasRole('LAWYER')")
    public ResponseEntity<Case> acceptCase(@PathVariable UUID id) {
        try {
            User currentUser = authService.getCurrentUser();
            Case acceptedCase = caseService.updateCaseStatus(id, Case.Status.ACTIVE, currentUser);
            return ResponseEntity.ok(acceptedCase);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build(); 
        }
    }

    @PostMapping("/{id}/reject")
    @PreAuthorize("hasRole('LAWYER')")
    public ResponseEntity<Case> rejectCase(@PathVariable UUID id) {
        try {
            User currentUser = authService.getCurrentUser();
            Case rejectedCase = caseService.updateCaseStatus(id, Case.Status.CLOSED, currentUser);
            // TODO: Notify client of rejection
            return ResponseEntity.ok(rejectedCase);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build(); 
        }
    }
}