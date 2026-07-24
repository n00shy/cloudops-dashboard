package com.cloudops.dashboard.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "metrics_history")
public class MetricsHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer cpu;

    private Integer memory;

    private Integer pods;

    private LocalDateTime createdAt;

    public MetricsHistory() {
    }

    public MetricsHistory(Integer cpu, Integer memory, Integer pods, LocalDateTime createdAt) {
        this.cpu = cpu;
        this.memory = memory;
        this.pods = pods;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public Integer getCpu() {
        return cpu;
    }

    public void setCpu(Integer cpu) {
        this.cpu = cpu;
    }

    public Integer getMemory() {
        return memory;
    }

    public void setMemory(Integer memory) {
        this.memory = memory;
    }

    public Integer getPods() {
        return pods;
    }

    public void setPods(Integer pods) {
        this.pods = pods;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
