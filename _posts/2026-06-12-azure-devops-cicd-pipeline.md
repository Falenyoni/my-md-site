---
title: "Setting Up CI/CD with Azure DevOps for .NET"
date: 2026-06-12 15:00:00 +0200
categories: [Azure, DevOps]
tags: [azure, azure-devops, cicd, dotnet, pipelines, docker]
---

*Content coming soon.*

A step-by-step walkthrough of a production-ready CI/CD pipeline for a .NET API on Azure DevOps — build, test, publish, and deploy.

## Outline

- Pipeline structure: stages, jobs, steps
- Build stage: restore, build, run tests, publish artifact
- Test reporting: integrating test results and code coverage
- Docker: building and pushing images to Azure Container Registry
- Release stage: deploying to Azure App Service or AKS
- Environment gates and approvals
- Variable groups and secrets — never hardcode credentials
- Branch policies: protecting main and requiring passing builds
