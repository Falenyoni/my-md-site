---
title: "Securing ASP.NET Core APIs — Auth, Claims, and Best Practices"
date: 2026-06-12 16:00:00 +0200
categories: [Security, API Security]
tags: [security, aspnetcore, jwt, authentication, authorization, oauth2]
---

*Content coming soon.*

Security isn't a feature you add at the end — it's a set of decisions you make throughout development. This post covers the full auth stack for a .NET API in production.

## Outline

- Authentication vs authorisation — the distinction matters
- JWT tokens: structure, signing, validation, and expiry
- Refresh token patterns — when and how
- Role-based vs policy-based authorisation in ASP.NET Core
- Securing sensitive endpoints with `[Authorize]` policies
- HTTPS enforcement, HSTS, and CORS configuration
- Input validation as a security control, not just a UX nicety
- OWASP API Security Top 10 — what applies to .NET APIs
- Secrets management: Azure Key Vault, environment variables, never appsettings
