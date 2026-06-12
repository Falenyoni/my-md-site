---
title: "Logging, Monitoring, and Observability in .NET"
date: 2026-06-12 19:00:00 +0200
categories: [DevOps, Observability]
tags: [dotnet, logging, serilog, observability, monitoring, azure-application-insights]
---

*Content coming soon.*

You can't fix what you can't see. This post covers the observability stack I use for .NET APIs — structured logging, metrics, distributed tracing, and alerting.

## Outline

- Structured logging vs plain text logs — why structure wins
- Serilog setup: sinks, enrichers, minimum levels
- Correlation IDs: tracking a request across services
- Application Insights: out-of-the-box telemetry for .NET on Azure
- Custom metrics and events — what to instrument
- Distributed tracing with OpenTelemetry
- Log levels and when to use each (Debug, Info, Warning, Error, Fatal)
- Setting up alerts: error rate spikes, latency thresholds, dependency failures
- The difference between logging for debugging and logging for operations
