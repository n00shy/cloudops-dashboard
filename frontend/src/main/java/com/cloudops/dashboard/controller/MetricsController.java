package com.cloudops.dashboard.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class MetricsController {

    @GetMapping("/metrics")
    public Map<String, Object> getMetrics() {

        return Map.of(
                "cpu", "42%",
                "memory", "68%",
                "pods", 24
        );
    }
}
