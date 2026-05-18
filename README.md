# MCP 协议安全层 / MCP Secure

> ⚠️ **引擎开发中 — 预计 2026年Q3 发布第一个版本**
> **⚠️ Engine Under Development — First Release Expected Q3 2026**

<p align="center">
  <strong>MCP 请求审计 · 访问控制 · 加密传输</strong>
  <br />
  <strong>MCP Request Audit · Access Control · Encrypted Transport</strong>
</p>

---

## 产品介绍 / Product Introduction

### 概述 / Overview

**MCP Secure** 是专为 Model Context Protocol (MCP) 生态打造的安全层。它为所有 MCP 请求提供审计日志、细粒度访问控制和端到端加密传输能力，确保 AI 模型与工具、数据源之间的通信安全。本项目对标 [modelcontextprotocol](https://github.com/modelcontextprotocol) (5.5K ⭐) 生态。

**MCP Secure** is a security layer built specifically for the Model Context Protocol (MCP) ecosystem. It provides audit logging, granular access control, and end-to-end encrypted transport for all MCP requests, ensuring secure communication between AI models, tools, and data sources. This project is benchmarked against the [modelcontextprotocol](https://github.com/modelcontextprotocol) (5.5K ⭐) ecosystem.

### 为什么需要 MCP Secure？/ Why MCP Secure?

MCP 协议让 AI 模型能够调用外部工具和访问数据源，但缺乏安全防护 / MCP enables AI models to call external tools and access data sources, but lacks security protections:

1. **无认证机制** — MCP 本身不提供内置认证 / MCP has no built-in authentication
2. **请求不可审计** — 无法追溯谁调用了什么工具 / Cannot trace who called what tool
3. **传输未加密** — 默认传输可能被窃听 / Default transport may be eavesdropped
4. **无访问控制** — 模型可以不受限制地访问所有工具 / Models can access all tools without restriction

### 适用场景 / Use Cases

- **企业 MCP 部署** — 保护企业内 MCP 工具和数据的访问 / Protect enterprise MCP tool and data access
- **多用户 MCP 服务** — 为不同用户提供不同的工具权限 / Provide different tool permissions for different users
- **合规审计** — 满足 SOC2、ISO 27001 等合规要求 / Meet SOC2, ISO 27001 compliance requirements
- **API 网关** — 作为 MCP 服务的统一安全网关 / As a unified security gateway for MCP services

## 核心功能 / Core Features

### 📋 请求审计 / Request Audit

| 功能 / Feature | 说明 / Description |
|------|---------|
| 全量记录 / Full Recording | 记录所有 MCP 请求和响应 / Record all MCP requests and responses |
| 请求溯源 / Request Tracing | 从模型到工具的完整请求链 / Complete request chain from model to tool |
| 异常检测 / Anomaly Detection | 自动检测异常请求模式 / Auto-detect abnormal request patterns |
| 实时告警 / Real-time Alerts | 支持 webhook 和邮件告警 / Webhook and email alert support |

### 🔐 访问控制 / Access Control

| 功能 / Feature | 说明 / Description |
|------|---------|
| 工具级权限 / Tool-level Permissions | 按 MCP 工具单独授权 / Per-tool authorization |
| 参数过滤 / Parameter Filtering | 基于请求参数的访问控制 / Request parameter-based access control |
| 速率限制 / Rate Limiting | 按用户/工具限制请求频率 / Per-user/per-tool rate limiting |
| 临时授权 / Temporary Auth | 支持一次性授权和限时授权 / One-time and time-limited authorization |

### 🔒 加密传输 / Encrypted Transport

| 功能 / Feature | 说明 / Description |
|------|---------|
| TLS 加密 / TLS Encryption | MCP 传输层全面加密 / Full MCP transport layer encryption |
| 令牌绑定 / Token Binding | 请求令牌与 TLS 会话绑定 / Token-to-TLS session binding |
| 负载加密 / Payload Encryption | 敏感请求参数加密 / Encrypt sensitive request parameters |
| 证书管理 / Certificate Mgmt | 自动证书签发和轮换 / Auto certificate issuance and rotation |

## 技术架构 / Architecture

```
Model → MCP Client → MCP Secure Proxy → MCP Server → Tool
                     ↓            ↓
               Audit Logger  Access Control
                     ↓            ↓
              Elasticsearch   OPA/Rego Engine
```

## 快速开始 / Quick Start

### 前提条件 / Prerequisites
- Node.js 18+ / Python 3.9+
- MCP SDK
- 2GB RAM

### 安装 / Installation

```bash
npm install -g mcp-secure
# 或 / or
mcp-secure init my-secure-mcp-server
cd my-secure-mcp-server
mcp-secure start
```

### 配置 MCP 安全 / Configure MCP Security

```javascript
// mcp-secure.config.js
module.exports = {
  audit: {
    enabled: true,
    storage: "elasticsearch",
    index: "mcp-audit-logs"
  },
  access: {
    rules: [
      { path: "/tools/db-query", roles: ["admin"] },
      { path: "/tools/file-read", roles: ["admin", "analyst"] }
    ],
    defaultPolicy: "deny"
  },
  tls: {
    enabled: true,
    cert: "/etc/mcp-secure/cert.pem",
    key: "/etc/mcp-secure/key.pem"
  }
};
```

## API 文档 / API Documentation

```
GET  /api/v1/audit/logs       — 查询审计日志 / Query audit logs
POST /api/v1/policies         — 创建安全策略 / Create policy
GET  /api/v1/policies         — 列出策略 / List policies
GET  /api/v1/certificates     — 证书状态 / Certificate status
POST /api/v1/certificates/renew — 续签证书 / Renew certificate
```

## 定价方案 / Pricing

| 版本 / Plan | 价格 / Price | 请求数 / Requests | 审计保留 / Audit Retention | 策略数量 / Policies | 支持 / Support |
|------|------|---------|---------|------|------|
| 🌱 Sprout Free | **免费 / Free** | 1000/月 | 7天 | 5 | 社区 / Community |
| 🔑 Key | **$9.9/月** | 50000/月 | 30天 | 25 | 邮件 / Email |
| 🛡️ Shield | **$29.9/月** | 500000/月 | 90天 | 100 | 邮件+工单 / Email+Tickets |
| 🏰 Fortress | **$99.9/月** | 无限 / Unlimited | 180天 | 无限 / Unlimited | 优先工单 / Priority |
| 🏛️ Citadel | **$299.9/月** | 无限 / Unlimited | 365天 | 无限 / Unlimited | 专属支持 / Dedicated |

## 联系方式 / Contact

- 📧 **homo-ai@outlook.com**
- 💬 **sevenliuhu** (微信 / WeChat)

## 常见问题 / FAQ

### Q: MCP Secure 需要修改现有 MCP 服务吗？/ Does it require modifying existing MCP services?
A: 不需要。MCP Secure 作为反向代理部署，通过中间人方式工作，不改动现有 MCP 服务代码。No. MCP Secure deploys as a reverse proxy and works via man-in-the-middle, without modifying existing MCP service code.

### Q: 支持哪些 MCP 传输协议？/ Which MCP transport protocols are supported?
A: 支持 stdio、HTTP/SSE、WebSocket 传输协议。使用 MCP 原生 SDK 即可集成。Supports stdio, HTTP/SSE, and WebSocket transport protocols. Integrated using the native MCP SDK.

### Q: 是否支持多集群部署？/ Does it support multi-cluster deployment?
A: 支持 Fortress+ 版本的多集群联邦部署。Fortress+ plans support multi-cluster federated deployment.

## 许可证 / License

本项目采用 **GNU Affero General Public License v3.0**。This project is licensed under **AGPL v3.0**.

<p align="center"><strong>Built with ❤️ by HOMO Labs</strong></p>
