package com.cloudops.dashboard.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/metrics")
@CrossOrigin(origins = "*")
public class MetricsController {

    @GetMapping
    public Map<String, Object> getMetrics() {

        return Map.of(
                "cpu", 42,
                "memory", 68,
                "pods", 24,
                "status", "Healthy"
        );
    }
}
