# ☁️ CloudOps Dashboard

A production-ready cloud-native application demonstrating modern DevOps practices using Docker, Kubernetes, CI/CD, and security scanning.

---

## 📌 Overview

CloudOps Dashboard is a full-stack application built to simulate a real-world production deployment.

The project focuses on implementing DevOps best practices, including containerization, Kubernetes orchestration, automated CI/CD, and security scanning.

---

## 🏗️ Architecture

```text
                GitHub
                   │
             GitHub Actions
                   │
        ┌──────────┴──────────┐
        │                     │
 Build Backend          Build Frontend
        │                     │
        └──────────┬──────────┘
                   │
              Docker Hub
                   │
            Kubernetes (Civo)
                   │
             Traefik Ingress
                   │
        ┌──────────┴──────────┐
        │                     │
   React Frontend      Spring Boot Backend
                              │
                              │
                         PostgreSQL
```

---

## 🚀 Features

* Full-stack cloud-native application
* Spring Boot REST API
* React + Vite frontend
* PostgreSQL database
* Docker multi-container deployment
* Docker Compose for local development
* Kubernetes deployments and services
* Traefik Ingress Controller
* GitHub Actions CI/CD pipeline
* Docker Hub image publishing
* Trivy container security scanning
* Gitleaks secret scanning

---

## 🛠️ Tech Stack

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Maven

### Frontend

* React
* Vite
* Tailwind CSS

### Database

* PostgreSQL

### DevOps

* Docker
* Docker Compose
* Kubernetes (k3s)
* Civo Cloud
* Traefik
* GitHub Actions
* Docker Hub
* Trivy
* Gitleaks

---

## 📂 Project Structure

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

---

## 🐳 Run Locally

Clone the repository

```bash
git clone https://github.com/n00shy/cloudops-dashboard.git
```

Go to the project

```bash
cd cloudops-dashboard
```

Start the application

```bash
docker compose up --build
```

---

## ☸️ Kubernetes Deployment

Deploy resources

```bash
kubectl apply -f k8s/
```

Verify

```bash
kubectl get pods -n cloudops
```

---

## ⚙️ CI/CD Pipeline

Every push to the **main** branch automatically triggers:

1. Checkout source code
2. Build backend
3. Build frontend
4. Run backend tests
5. Build Docker images
6. Scan repository using Gitleaks
7. Scan Docker images using Trivy
8. Push images to Docker Hub
9. Deploy updated images to Kubernetes
10. Verify rollout status

---

## 🔐 Security

Security checks include:

* Gitleaks for secret detection
* Trivy image vulnerability scanning
* Kubernetes Secrets for sensitive configuration

---

## 📦 Docker Images

Backend

```text
abdullahahmed1101076/cloudops-backend
```

Frontend

```text
abdullahahmed1101076/cloudops-frontend
```

---

## 📈 Future Improvements

* Helm Charts
* ArgoCD GitOps
* Prometheus Monitoring
* Grafana Dashboards
* Horizontal Pod Autoscaler (HPA)
* HTTPS with Let's Encrypt
* Terraform Infrastructure as Code

---

## 👨‍💻 Author

**Abdullah Ahmed**

GitHub

https://github.com/n00shy

LinkedIn

https://linkedin.com/in/n00shy

Portfolio

https://n00shy.github.io/

---
