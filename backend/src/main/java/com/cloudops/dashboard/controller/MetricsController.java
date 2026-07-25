package com.cloudops.dashboard.controller;

import com.cloudops.dashboard.entity.MetricsHistory;
import com.cloudops.dashboard.repository.MetricsHistoryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/metrics")
@CrossOrigin(origins = "*")
public class MetricsController {

    private final MetricsHistoryRepository metricsHistoryRepository;

    public MetricsController(MetricsHistoryRepository metricsHistoryRepository) {
        this.metricsHistoryRepository = metricsHistoryRepository;
    }

    @GetMapping
    public Map<String, Object> getMetrics() {
        return Map.of(
                "cpu", 42,
                "memory", 68,
                "pods", 24,
                "status", "Healthy"
        );
    }

    @GetMapping("/history")
    public List<MetricsHistory> getHistory() {
        return metricsHistoryRepository.findAll();
    }
}
