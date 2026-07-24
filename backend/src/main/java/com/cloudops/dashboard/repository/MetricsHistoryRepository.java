package com.cloudops.dashboard.repository;

import com.cloudops.dashboard.entity.MetricsHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MetricsHistoryRepository extends JpaRepository<MetricsHistory, Long> {

    List<MetricsHistory> findTop20ByOrderByCreatedAtDesc();

    MetricsHistory findTopByOrderByCreatedAtDesc();

}
