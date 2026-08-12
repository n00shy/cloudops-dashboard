# ☁️ CloudOps Dashboard

> A cloud-native DevOps showcase demonstrating containerization, Kubernetes orchestration, CI/CD automation, security scanning, and production-style deployment practices.

[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue)](../../actions)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-k3s-326CE5)](https://kubernetes.io/)
[![Security](https://img.shields.io/badge/Security-Trivy%20%7C%20Gitleaks-red)](https://github.com/n00shy/cloudops-dashboard)

## 🎯 What this project demonstrates

This project goes beyond building an application: it focuses on how an application is **packaged, secured, automated, deployed, and operated**.

- Containerized frontend, backend, and database
- Docker Compose for local development
- Kubernetes deployment on Civo k3s
- Traefik Ingress for application routing
- GitHub Actions CI/CD automation
- Docker image publishing
- Gitleaks secret detection
- Trivy container vulnerability scanning
- Kubernetes configuration with ConfigMaps and Secrets
- Persistent storage for PostgreSQL
- Rollout and deployment verification

## 🏗️ Architecture

```text
                        GitHub
                           │
                           ▼
                    GitHub Actions
                           │
                 ┌─────────┴─────────┐
                 │                   │
          Build + Test         Security Scans
                 │              Gitleaks / Trivy
                 └─────────┬─────────┘
                           │
                           ▼
                       Docker Hub
                           │
                           ▼
                     Civo k3s Cluster
                           │
                    Traefik Ingress
                           │
              ┌────────────┴────────────┐
              │                         │
       React + Nginx              Spring Boot API
              │                         │
              │                    PostgreSQL
              └─────────────────────────┘
```

## 🧰 Tech Stack

| Area | Technologies |
|---|---|
| Frontend | React, Vite, Tailwind CSS, Nginx |
| Backend | Java, Spring Boot, Spring Data JPA, Maven |
| Database | PostgreSQL |
| Containers | Docker, Docker Compose |
| Orchestration | Kubernetes, k3s |
| Ingress | Traefik |
| CI/CD | GitHub Actions |
| Registry | Docker Hub |
| Security | Gitleaks, Trivy |
| Cloud | Civo Cloud |

## 📂 Repository Structure

```text
cloudops-dashboard/
├── backend/
├── frontend/
├── k8s/
├── .github/
│   └── workflows/
│       └── cicd.yml
├── docker-compose.yml
└── README.md
```

## 🚀 Run locally

```bash
git clone https://github.com/n00shy/cloudops-dashboard.git
cd cloudops-dashboard
docker compose up --build
```

## ☸️ Kubernetes deployment

The Kubernetes manifests are under `k8s/`.

```bash
kubectl apply -f k8s/
kubectl get pods -n cloudops
kubectl get svc -n cloudops
kubectl get ingress -n cloudops
```

The deployment uses Kubernetes Services, ConfigMaps, Secrets, PersistentVolumeClaims, Deployments, and Traefik Ingress routing.

## 🔄 CI/CD flow

A push to `main` is designed to move through the following flow:

```text
Commit
  ↓
Checkout
  ↓
Build & Test
  ↓
Gitleaks
  ↓
Docker Build
  ↓
Trivy Scan
  ↓
Push Images
  ↓
Kubernetes Deployment
  ↓
Rollout Verification
```

## 🔐 Security

Security is treated as part of the delivery pipeline rather than an afterthought:

- **Gitleaks** detects accidentally committed secrets.
- **Trivy** scans container images for known vulnerabilities.
- Kubernetes Secrets are used for sensitive runtime configuration.
- Secrets and local environment files should remain outside source control.

## 📌 DevOps concepts demonstrated

- CI/CD pipeline design
- Container image lifecycle
- Kubernetes workload management
- Service discovery and ingress routing
- Configuration and secret management
- Persistent storage
- Deployment and rollout verification
- Container security scanning
- Cloud-based Kubernetes deployment

## 🔭 Roadmap

Planned improvements include:

- Helm charts
- Argo CD / GitOps
- Prometheus and Grafana observability
- Horizontal Pod Autoscaling
- HTTPS with Let's Encrypt
- Terraform infrastructure as code
- Automated deployment environments

## 👨‍💻 Author

**Abdullah Ahmed — Junior DevOps Engineer**

- GitHub: https://github.com/n00shy
- LinkedIn: https://linkedin.com/in/n00shy
- Portfolio: https://n00shy.github.io/

---

*Built as a hands-on DevOps portfolio project to demonstrate practical cloud-native engineering skills.*
