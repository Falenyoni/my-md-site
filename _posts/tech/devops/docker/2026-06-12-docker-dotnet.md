---
title: "Containerising .NET Applications with Docker"
date: 2026-06-12 18:00:00 +0200
categories: [DevOps, Docker]
tags: [docker, dotnet, containers, devops, deployment]
---

*Content coming soon.*

Getting a .NET API into a container correctly — not just a working Dockerfile, but one that's lean, secure, and production-appropriate.

## Outline

- Why containerise: consistency across environments
- Multi-stage Dockerfile for .NET — build stage vs runtime stage
- Choosing the right base image: `sdk` vs `aspnet` vs `runtime`
- Image size optimisation: what gets left behind in the build stage
- Running as non-root: a security baseline every container should meet
- docker-compose for local development with SQL Server and dependencies
- Environment variables and secrets in containers
- Health checks in Docker and how they interact with orchestrators
- Publishing to Azure Container Registry and pulling in Azure App Service
