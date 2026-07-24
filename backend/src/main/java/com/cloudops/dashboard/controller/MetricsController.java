package com.cloudops.dashboard.controller;

import com.cloudops.dashboard.entity.MetricsHistory;
import com.cloudops.dashboard.service.MetricsHistoryService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class MetricsController {

    private final MetricsHistoryService metricsHistoryService;

    public MetricsController(MetricsHistoryService metricsHistoryService) {
        this.metricsHistoryService = metricsHistoryService;
    }

    @GetMapping("/metrics")
    public Map<String, Object> getMetrics() {

        MetricsHistory metric = metricsHistoryService.getLatestMetrics();

        Map<String, Object> response = new HashMap<>();

        if (metric == null) {
            response.put("cpu", "0%");
            response.put("memory", "0%");
            response.put("pods", 0);
            return response;
        }

        response.put("cpu", metric.getCpu() + "%");
        response.put("memory", metric.getMemory() + "%");
        response.put("pods", metric.getPods());

        return response;
    }

    @GetMapping("/metrics/history")
    public List<Map<String, Object>> getMetricsHistory() {

        return metricsHistoryService.getHistory()
                .stream()
                .map(metric -> {

                    Map<String, Object> response = new HashMap<>();

                    response.put(
                            "time",
                            metric.getCreatedAt()
                                    .toLocalTime()
                                    .withNano(0)
                                    .toString()
                    );

                    response.put("cpu", metric.getCpu());
                    response.put("memory", metric.getMemory());

                    return response;

                })
                .toList();
    }
}
