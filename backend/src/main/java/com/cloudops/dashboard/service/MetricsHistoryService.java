package com.cloudops.dashboard.service;

import com.cloudops.dashboard.entity.MetricsHistory;
import com.cloudops.dashboard.repository.MetricsHistoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MetricsHistoryService {

    private final MetricsHistoryRepository repository;

    public MetricsHistoryService(MetricsHistoryRepository repository) {
        this.repository = repository;
    }

    public MetricsHistory save(MetricsHistory metrics) {
        return repository.save(metrics);
    }

    public List<MetricsHistory> getHistory() {
        return repository.findTop20ByOrderByCreatedAtDesc();
    }

    public MetricsHistory getLatestMetrics() {
        return repository.findTopByOrderByCreatedAtDesc();
    }

}
