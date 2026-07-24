package com.cloudops.dashboard.scheduler;

import com.cloudops.dashboard.entity.MetricsHistory;
import com.cloudops.dashboard.service.MetricsHistoryService;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Random;

@Component
public class MetricsScheduler {

    private final MetricsHistoryService service;
    private final Random random = new Random();

    public MetricsScheduler(MetricsHistoryService service) {
        this.service = service;
    }

    @Scheduled(fixedRate = 5000)
    public void saveMetrics() {

        int cpu = 20 + random.nextInt(60);
        int memory = 30 + random.nextInt(50);
        int pods = 20 + random.nextInt(10);

        MetricsHistory metrics = new MetricsHistory(
                cpu,
                memory,
                pods,
                LocalDateTime.now()
        );

        service.save(metrics);

        System.out.println("Saved Metrics -> CPU: "
                + cpu
                + "% Memory: "
                + memory
                + "%");
    }
}
