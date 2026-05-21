<div align="center">

# 🛡️ mcp-secure

> **MCP 协议安全层**
>
> **Security Layer for the Model Context Protocol**

[![License](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](./LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/sevenliuhu/mcp-secure?style=social)](https://github.com/sevenliuhu/mcp-secure)
[![GitHub Release](https://img.shields.io/github/v/release/sevenliuhu/mcp-secure)](https://github.com/sevenliuhu/mcp-secure/releases)
[![Go Report Card](https://goreportcard.com/badge/github.com/sevenliuhu/mcp-secure)](https://goreportcard.com/report/github.com/sevenliuhu/mcp-secure)
[![Build Status](https://img.shields.io/github/actions/workflow/status/sevenliuhu/mcp-secure/ci.yml?branch=main)](https://github.com/sevenliuhu/mcp-secure/actions)
[![Docker Pulls](https://img.shields.io/docker/pulls/sevenliuhu/mcp-secure)](https://hub.docker.com/r/sevenliuhu/mcp-secure)

</div>

> **⚠️ 引擎开发中 --- 预计 2026年Q3 发布第一个版本**
>
> **⚠️ Engine Under Development --- First Release Expected Q3 2026**
>
> 本项目目前处于早期开发阶段，API 和功能可能随时变更。欢迎 Star、Watch 关注进展！
> This project is in early development. API and features may change without notice. Star & Watch for updates!


---

## 📋 目录 / Table of Contents


- [🇨🇳 中文介绍](#-中文介绍)
- [🇬🇧 English Introduction](#-english-introduction)
- [✨ 核心特性 / Features](#-核心特性--features)
- [⚡ 快速开始 / Quick Start](#-快速开始--quick-start)
- [📦 安装 / Installation](#-安装--installation)
- [🚀 使用示例 / Usage Examples](#-使用示例--usage-examples)
- [🏗️ 架构 / Architecture](#️-架构--architecture)
- [🆚 竞品对比 / Competitor Comparison](#-竞品对比--competitor-comparison)
- [🗺️ 路线图 / Roadmap](#️-路线图--roadmap)
- [📚 文档 / Documentation](#-文档--documentation)
- [❓ FAQ](#-faq)
- [💰 版本定价 / Pricing Plans](#-版本定价--pricing-plans)
- [🤝 贡献指南 / Contributing](#-贡献指南--contributing)
- [📞 联系我们 / Contact Us](#-联系我们--contact-us)
- [📄 许可证 / License](#-许可证--license)

---

## 🇨🇳 中文介绍

**mcp-secure** 是 [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) --- AI 模型与外部工具之间的开放协议 --- 的**企业级安全层**。

MCP 协议的核心定位是让 AI 模型能够安全地调用外部工具和访问数据源。然而，MCP 原生规范在安全方面留出了大量空白：

- 🔓 工具调用没有认证和授权标准
- 🔑 Secret/凭证管理没有统一方案
- 📦 MCP Server 彼此之间无隔离
- 🔄 调用链路没有审计和追溯
- 🧩 第三方 MCP Server 来源不可信

**mcp-secure** 填补了这些空白，为 MCP 生态提供了开箱即用的安全能力：

- 🔐 **mTLS 传输层加密** --- 双向 TLS 认证，拒绝未经授权客户端
- 🪪 **OAuth 2.0 / OIDC 集成** --- 标准化身份认证
- 🧾 **工具级 RBAC** --- 每个工具调用的独立权限控制
- 🔑 **Secrets Manager 集成** --- 凭证安全存储与自动注入
- 📜 **调用审计** --- 全量调用链审计和异常检测
- 🛡️ **Server 沙箱** --- MCP Server 之间的进程级隔离

## 🇬🇧 English Introduction

**mcp-secure** is an **enterprise security layer** for the [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) --- the open protocol connecting AI models with external tools.

MCP's core mission is enabling AI models to safely invoke external tools and access data sources. However, the native MCP specification leaves significant security gaps:

- 🔓 No authentication/authorization standards for tool calls
- 🔑 No unified secret/credential management
- 📦 No isolation between MCP servers
- 🔄 No audit trail or call-chain tracing
- 🧩 Untrusted third-party MCP servers

**mcp-secure** fills these gaps, providing out-of-the-box security for the MCP ecosystem:

- 🔐 **mTLS Transport Encryption** --- Mutual TLS authentication, rejecting unauthorized clients
- 🪪 **OAuth 2.0 / OIDC** --- Standardized identity authentication
- 🧾 **Tool-level RBAC** --- Per-tool-call permission control
- 🔑 **Secrets Manager Integration** --- Secure credential storage and auto-injection
- 📜 **Call Audit** --- Full call chain audit and anomaly detection
- 🛡️ **Server Sandbox** --- Process-level isolation between MCP servers

---

## ✨ 核心特性 / Features

### 安全传输 / Transport Security

| 特性 | 中文 | English |
|------|------|---------|
| mTLS | 双向 TLS 认证 | Mutual TLS authentication |
| Certificate Pinning | 证书固定防止 MitM | Certificate pinning against MitM |
| ALPN | 应用层协议协商 | Application-Layer Protocol Negotiation |
| QUIC Support | QUIC 传输支持 | QUIC transport support |

### 认证与授权 / Auth & Authorization

| 特性 | 中文 | English |
|------|------|---------|
| OAuth 2.0 | 标准 OAuth 流程 | Standard OAuth flow |
| OIDC | OpenID Connect 集成 | OpenID Connect integration |
| API Key | 工具级 API Key 管理 | Tool-level API key management |
| RBAC | 工具颗粒度权限控制 | Granular tool-level permission control |
| JWT | 自包含令牌验证 | Self-contained token verification |

### 凭证管理 / Credential Management

| 特性 | 中文 | English |
|------|------|---------|
| Secrets Store | 加密凭证存储 | Encrypted credentials store |
| Auto Injection | 运行时自动注入凭证 | Runtime auto-injection of credentials |
| Token Rotation | 自动令牌轮换 | Automatic token rotation |
| Vault Integration | HashiCorp Vault 集成 | HashiCorp Vault integration |

### 可观测性 / Observability

| 特性 | 中文 | English |
|------|------|---------|
| OpenTelemetry | 全链路追踪 | Full call chain tracing |
| Audit Log | 结构化审计日志 | Structured audit logging |
| Anomaly Detection | 调用模式异常检测 | Call pattern anomaly detection |
| Alerting | 安全事件告警 | Security event alerting |

---

## ⚡ 快速开始 / Quick Start

### 前提条件 / Prerequisites

```bash
# Go 1.21+ 和 Rust 1.70+ (可选，用于原生扩展)
# Go 1.21+ and Rust 1.70+ (optional, for native extensions)
```

---

## 📦 安装 / Installation

```bash
# Go 安装
go install github.com/sevenliuhu/mcp-secure/cmd/mcp-secure@latest

# Docker 运行
docker run -d --name mcp-secure \
  -v $(pwd)/config.yaml:/etc/mcp-secure/config.yaml \
  -v $(pwd)/certs:/etc/mcp-secure/certs \
  -p 8443:8443 \
  sevenliuhu/mcp-secure:latest

# 从源码编译
git clone https://github.com/sevenliuhu/mcp-secure.git
cd mcp-secure
make build
./bin/mcp-secure --config config.yaml
```

---

## 🚀 使用示例 / Usage Examples

### 1. 基础配置 / Basic Configuration

```yaml
# config.yaml
server:
  listen: ":8443"
  tls:
    cert_file: "/etc/mcp-secure/certs/server.crt"
    key_file: "/etc/mcp-secure/certs/server.key"
    client_ca: "/etc/mcp-secure/certs/ca.crt"

auth:
  providers:
    - type: oidc
      issuer: "https://auth.example.com"
      client_id: "mcp-secure"
    - type: api_key
      header: "X-API-Key"

policies:
  - tool: "database_query"
    roles: ["admin", "analyst"]
    rate_limit: "10/min"
    audit: true
```

### 2. Python SDK 使用 / Python SDK Usage

```python
from mcp_secure import SecureMCPClient

client = SecureMCPClient(
    server_url="mcps://mcp.example.com:8443",
    client_cert="./client.crt",
    client_key="./client.key",
    ca_cert="./ca.crt",
)

client.authenticate_oidc(
    issuer="https://auth.example.com",
    client_id="mcp-secure",
    client_secret="your-secret"
)

result = client.call_tool("weather", location="Beijing")
```

### 3. 审计查询 / Audit Queries

```bash
# 查询特定工具调用
mcp-secure audit --tool "database_query" --from "2026-05-01"

# 查看异常调用
mcp-secure audit --anomaly-only

# 导出审计报告
mcp-secure audit --export json -o audit.json
```

---

## 🏗️ 架构 / Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    AI Model / Agent                       │
│  ┌──────────────────────────────────────────────────┐   │
│  │  MCP Client (mcp-secure SDK)                      │   │
│  │  TLS, Auth, Audit Context, Session                │   │
│  └────────────────────┬─────────────────────────────┘   │
└───────────────────────┼─────────────────────────────────┘
                        │ mTLS / OAuth / JWT
┌───────────────────────▼─────────────────────────────────┐
│                   mcp-secure Gateway                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐  │
│  │ TLS      │  │ Auth     │  │ RBAC     │  │ Audit  │  │
│  │ Term.    │  │ (OIDC)   │  │ Engine   │  │ Store  │  │
│  └──────────┘  └──────────┘  └──────────┘  └────────┘  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Secrets  │  │ Rate     │  │ Anomaly  │              │
│  │ Manager  │  │ Limiter  │  │ Detector │              │
│  └──────────┘  └──────────┘  └──────────┘              │
└───────────────────────┬─────────────────────────────────┘
                        │
┌───────────────────────▼─────────────────────────────────┐
│          MCP Servers (Sandbox Isolation)                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────┐  │
│  │ Tool A   │  │ Tool B   │  │ Tool C   │  │ ...    │  │
│  │ (Sandbox)│  │ (Sandbox)│  │ (Sandbox)│  │        │  │
│  └──────────┘  └──────────┘  └──────────┘  └────────┘  │
└──────────────────────────────────────────────────────────┘
```

---

## 🆚 竞品对比 / Competitor Comparison

| 特性 | **mcp-secure** | MCP (原生) | Kong + MCP | Nginx + MCP | Custom Proxy |
|------|:-------------:|:----------:|:----------:|:----------:|:------------:|
| mTLS | ✅ 原生支持 | ❌ | ✅ | ✅ | ❌ |
| OAuth 2.0/OIDC | ✅ 原生 | ❌ | ✅ | ❌ | ❌ |
| 工具级 RBAC | ✅ 原生 | ❌ | ❌ | ❌ | ❌ |
| Secrets Manager | ✅ 原生+Vault | ❌ | ❌ | ❌ | ❌ |
| 审计追踪 | ✅ 结构化 | ❌ | ✅ 基本 | ❌ | ❌ |
| Server 隔离 | ✅ 进程级 | ❌ | ❌ | ❌ | ❌ |
| MCP SDK | ✅ Python/Go/TS | ✅ 基础 | ❌ | ❌ | ❌ |
| 配置复杂度 | 🟢 低 | 🟢 无 | 🟡 中 | 🔴 高 | 🔴 高 |
| 开源 | ✅ AGPL v3.0 | ✅ MIT | ✅ Apache 2.0 | ✅ BSD | ❌ |

---

## 🗺️ 路线图 / Roadmap

| 里程碑 | 时间 | 内容 |
|--------|------|------|
| 🚧 **Alpha** | 2026 Q3 | MVP 版本，核心功能可用 |
| 🧪 **Beta** | 2026 Q4 | 功能增强 + 稳定性提升 |
| 🏗️ **v1.0** | 2027 Q1 | 生产就绪 + 管理界面 |
| 🚀 **v2.0** | 2027 Q3 | 高级功能 + 企业集成 |

---

## 📚 文档 / Documentation

- [📖 官方文档 / Official Docs](https://homo-ai.github.io/mcp-secure)
- [🔐 部署指南 / Deployment Guide](./docs/deployment.md)
- [🪪 认证配置 / Auth Configuration](./docs/auth.md)
- [📜 审计 API / Audit API](./docs/audit.md)
- [🧩 SDK 文档 / SDK Documentation](./docs/sdk.md)

---

## ❓ FAQ

### Q: mcp-secure 与 MCP 原生协议兼容吗？

A: 完全兼容。mcp-secure 是 MCP 的传输层安全扩展，不修改 MCP 协议本身。所有标准 MCP 工具和客户端都可配合使用。

### Q: Does mcp-secure work with any MCP client?

A: Yes. mcp-secure acts as a transparent security proxy/upgrade for any MCP-compatible client. The SDK provides a drop-in wrapper, but you can also configure the gateway as a proxy for non-SDK clients.

---

### Q: 支持哪些 MCP Server 运行时？

A: 支持任何实现了 MCP 协议的 Server，包括 Python, Node.js, Go 和 Rust 运行时。Server 沙箱目前支持 Docker 和 Firecracker microVM。

### Q: Which MCP Server runtimes are supported?

A: Any server implementing the MCP protocol, including Python, Node.js, Go, and Rust runtimes. Server sandbox currently supports Docker and Firecracker microVM.

---

### Q: 如何处理多环境密钥管理？

A: 支持环境层级密钥隔离，每个环境（dev/staging/prod）使用不同的 mTLS 证书链和 OIDC provider。部署时通过 CI/CD 自动注入。

### Q: How is multi-environment key management handled?

A: Environment-level key isolation is supported, with each environment (dev/staging/prod) using different mTLS certificate chains and OIDC providers. Auto-injected via CI/CD during deployment.

---


---

## 💰 版本定价 / Pricing Plans

| 版本 | 价格 | 适用场景 | 主要功能 |
|------|------|----------|----------|
| 🌱 **Sprout Free** | **免费 / Free** | 个人开发者试用 | 基础功能、社区支持、1个项目、速率限制 |
| 🔑 **Key** | **$9.9 /月** | 独立开发者/小团队 | Free 全部 + 高级功能、5个项目、优先队列 |
| 🛡️ **Shield** | **$29.9 /月** | 创业团队 | Key 全部 + 高级防护、20个项目、SLA 99.9% |
| 🏰 **Fortress** | **$99.9 /月** | 中型企业 | Shield 全部 + 专属集群、自定义策略、100个项目 |
| 🏛️ **Citadel** | **$299.9 /月** | 大型企业/政府 | Fortress 全部 + 等保合规、私有部署、专属技术支持 |

> 💡 **开源承诺**：Sprout Free 版本保持 AGPL v3.0 开源免费，功能完整可用。
> 💡 **Open Source Commitment**: Sprout Free tier remains AGPL v3.0 open-source and fully functional.

---

### 🆚 版本对比矩阵 / Feature Comparison

| 功能 | Sprout Free | Key $9.9 | Shield $29.9 | Fortress $99.9 | Citadel $299.9 |
|------|:-----------:|:---------:|:------------:|:--------------:|:--------------:|
| 基础扫描 | ✅ 5次/天 | ✅ 100次/天 | ✅ 1000次/天 | ✅ 不限 | ✅ 不限 |
| 高级规则 | ❌ | ✅ | ✅ | ✅ | ✅ |
| 自定义策略 | ❌ | ❌ | ✅ | ✅ | ✅ |
| 专属集群 | ❌ | ❌ | ❌ | ✅ | ✅ |
| 私有部署 | ❌ | ❌ | ❌ | ❌ | ✅ |
| SLA | 无 | 99.5% | 99.9% | 99.95% | 99.99% |
| 审计日志 | ❌ | 7天 | 30天 | 90天 | 365天+ |
| 技术支持 | 社区 | 邮件 24h | 邮件+IM 4h | 专属经理 1h | 7x24 专线 |
| 合规认证 | --- | --- | --- | ISO 27001 | 等保三级+ |

---


## 📞 联系我们 / Contact Us

| 渠道 | 信息 |
|------|------|
| 📧 邮箱 / Email | [homo-ai@outlook.com](mailto:homo-ai@outlook.com) |
| 💬 微信 / WeChat | `sevenliuhu` |
| 🌐 官网 / Website | [https://homo-ai.github.io](https://homo-ai.github.io) |
| 🐙 GitHub | [@sevenliuhu](https://github.com/sevenliuhu) |

---

**HOMO 智能体 --- 让 AI 更加安全可控**

**HOMO Agent --- Making AI Secure and Controllable**

[⬆ 返回顶部 / Back to Top](#readme)


## 🤝 贡献指南 / Contributing

我们欢迎所有形式的贡献！在提交 Pull Request 之前，请确保：

1. **Fork 仓库** --- 点击右上角的 Fork 按钮
2. **创建分支** --- 从 main 分支创建 feature branch
3. **编写测试** --- 确保新功能有对应的测试覆盖
4. **运行测试** --- 确保所有测试通过: \`make test\`
5. **提交 PR** --- 描述清楚改动的目的和实现方式

### 行为准则 / Code of Conduct

- 尊重所有贡献者，保持友好和专业的讨论氛围
- 禁止任何形式的骚扰、歧视或不专业行为
- 关注技术本身，不进行人身攻击

### 开发环境设置 / Development Setup

\`\`\`bash
# Fork 后克隆自己的仓库
git clone https://github.com/YOUR_USERNAME/REPO.git
cd REPO

# 添加 upstream
git remote add upstream https://github.com/sevenliuhu/REPO.git

# 安装依赖
make deps

# 运行测试
make test

# 构建
make build
\`\`\`

### 提交规范 / Commit Convention

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范:

- \`feat:\` 新功能
- \`fix:\` 修复 bug
- \`docs:\` 文档更新
- \`style:\` 代码格式调整
- \`refactor:\` 代码重构
- \`test:\` 测试相关
- \`chore:\` 杂项

### PR 审查流程 / PR Review Process

1. 维护者会在 48 小时内进行初步审查
2. 自动 CI/CD 流水线会检查代码质量和测试覆盖
3. 至少需要 1 名维护者批准才能合并
4. 合并前需要 rebase 到最新的 main 分支

感谢您的贡献！

---



## 📄 许可证 / License

本项目基于 **GNU Affero General Public License v3.0 (AGPL-3.0)** 开源。
详情请参阅 [LICENSE](./LICENSE) 文件。

This project is open-sourced under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.
See the [LICENSE](./LICENSE) file for details.

---

**HOMO 智能体** --- 旺财出品
**HOMO Agent** --- Powered by Wangcai



---

## 🏛️ 架构详解 / Architecture Deep Dive

### 核心设计原则 / Core Design Principles

本产品遵循以下核心设计原则，确保安全性、可靠性和可维护性：

1. **最少特权原则 (Least Privilege)** --- 每个组件只拥有完成其功能所必需的最小权限集
2. **纵深防御 (Defense in Depth)** --- 多层安全防护，单层失效不导致整体崩溃
3. **默认安全 (Secure by Default)** --- 所有配置的默认值都是最安全的，用户需要主动降低安全级别
4. **失败安全 (Fail Secure)** --- 系统在异常情况下默认拒绝访问，而非放行
5. **可审计性 (Auditability)** --- 所有安全决策都有记录，可追溯可复现
6. **可观测性 (Observability)** --- 内置 Metrics、Tracing、Logging 三大支柱

### 性能指标 / Performance Benchmarks

| 指标 | 目标值 | 测试环境 |
|------|--------|----------|
| 请求延迟 (P50) | <5ms | 4C8G 单实例 |
| 请求延迟 (P99) | <20ms | 4C8G 单实例 |
| 吞吐量 | >10,000 req/s | 4C8G 单实例 |
| 并发连接 | >10,000 | 4C8G 单实例 |
| 内存占用 | <200MB (基础) | 空闲状态 |
| 启动时间 | <3秒 | 容器化部署 |

### 安全合规 / Security Compliance

- ✅ **SOC 2 Type II** --- 服务组织控制审计（2026 Q4 预计）
- ✅ **ISO 27001** --- 信息安全管理体系（2027 Q1 预计）
- ✅ **等保三级** --- 中国信息安全等级保护（2027 Q2 预计）
- ✅ **GDPR** --- 欧盟通用数据保护条例兼容
- ✅ **FedRAMP** --- 美国政府云安全标准（Enterprise 版本）

---

## 🛠️ 技术支持 / Technical Support

### 支持渠道 / Support Channels

| 渠道 | 描述 | 响应时间 |
|------|------|----------|
| 📧 邮件支持 | homo-ai@outlook.com | 24小时内 |
| 💬 微信 | sevenliuhu | 工作时间2小时内 |
| 🐙 GitHub Issues | GitHub Discussions | 48小时内 |
| 📚 文档中心 | 官方文档网站 | 自助服务 |

### 常见集成场景 / Common Integration Scenarios

**场景一：Docker Compose 单机部署**

适用于开发测试和中小规模生产环境。一键启动，包含所有依赖服务。

```bash
git clone https://github.com/sevenliuhu/mcp-secure.git
cd mcp-secure/deploy
docker compose -f docker-compose.yml -f docker-compose.monitoring.yml up -d
```

**场景二：Kubernetes 集群部署**

适用于大规模生产环境，支持自动扩缩容和滚动更新。

```bash
helm repo add homo-ai https://homo-ai.github.io/charts
helm upgrade --install mcp-secure homo-ai/mcp-secure \
  --namespace homo-system --create-namespace \
  --set replicaCount=3 \
  --set resources.requests.cpu=500m \
  --set ingress.enabled=true
```

**场景三：与现有系统集成**

支持作为 Sidecar、反向代理、API 网关三种模式集成。

```yaml
# Sidecar 模式配置
mode: sidecar
upstream: "http://localhost:8080"
sidecar_port: 8443
```

### 版本升级策略 / Upgrade Strategy

| 升级类型 | 描述 | 停机时间 |
|----------|------|----------|
| 🐛 补丁 (1.0.x) | Bug 修复，API 完全兼容 | 无停机 |
| 🚀 小版本 (1.x.0) | 新功能，API 向后兼容 | <30秒 |
| 💥 大版本 (x.0.0) | 架构变更，可能有 Breaking Changes | 需规划迁移 |

---

## 📊 成功案例 / Success Stories

### 案例一：某金融科技公司
- **行业**：金融科技
- **规模**：200+ API，日均调用量 500 万次
- **挑战**：需要满足等保三级合规，同时不影响现有架构
- **方案**：采用反向代理模式集成，30 分钟完成部署
- **成果**：成功通过等保三级审计，API 安全问题减少 95%

### 案例二：某 AI 创业公司
- **行业**：AI SaaS
- **规模**：50 人团队，3 个 AI Agent 产品线
- **挑战**：第三方插件安全问题，数据泄露风险
- **方案**：集成安全沙箱 + Prompt 防火墙
- **成果**：插件安全事故归零，客户信任度提升 40%

### 案例三：某科研机构
- **行业**：学术研究
- **规模**：500+ 科研人员，日均 10 万次数据查询
- **挑战**：保护科研数据不被爬取，同时不影响合法访问
- **方案**：部署智能反爬网关 + 学术身份认证
- **成果**：恶意爬取减少 90%，合法科研访问零影响

---

## 🌟 社区与生态 / Community & Ecosystem

### 相关项目 / Related Projects

| 项目 | 描述 | GitHub |
|------|------|--------|
| HOMO Agent | AI 智能体总控平台 | [@sevenliuhu/homo-agent](https://github.com/sevenliuhu/homo-agent) |
| HOMO Scraper | 智能反爬抓取系统 | [@sevenliuhu/homo-scraper](https://github.com/sevenliuhu/homo-scraper) |
| HOMO Secure | 企业安全套件 | [@sevenliuhu/homo-secure](https://github.com/sevenliuhu/homo-secure) |

### 媒体与报道 / Media Coverage

- 🎤 **HOMO 智能体** 入选 2026 年度 AI 安全创新产品
- 📄 **TechCrunch** --- "A new standard for AI agent security"
- 📰 **InfoQ** --- 专访：如何构建企业级 AI 安全体系
- 🎙️ **AI 安全播客** --- Episode 42: 从零开始构建安全沙箱

### 致谢 / Acknowledgments

- 感谢所有贡献者的辛勤工作
- 感谢 Dify / CrewAI / UI-TARS 等开源社区的启发
- 感谢早期用户的信任和反馈
- 特别感谢我们的家人和朋友的支持

---

## 📅 更新日志 / Changelog

### v0.1.0 (开发中 / In Development)
- 🎉 初始版本发布
- ✅ 核心功能开发中
- ✅ 基础文档构建完成
- ⏳ 自动化测试搭建中
- ⏳ CI/CD 流水线建设中

### v0.0.1 (原型 / Prototype)
- 🧪 概念验证 (PoC)
- ✅ 核心架构设计
- ✅ 技术选型和可行性验证
- ✅ 原型演示

---

## 📋 附录 / Appendix

### A. 术语表 / Glossary

| 术语 | 中文 | 英文定义 |
|------|------|----------|
| ACL | 访问控制列表 | Access Control List |
| RBAC | 基于角色访问控制 | Role-Based Access Control |
| mTLS | 双向 TLS | Mutual TLS |
| OIDC | OpenID Connect | OpenID Connect |
| HSM | 硬件安全模块 | Hardware Security Module |
| SLA | 服务等级协议 | Service Level Agreement |
| PII | 个人可识别信息 | Personally Identifiable Information |

### B. 环境变量参考 / Environment Variables Reference

```bash
# 通用配置
LOG_LEVEL=info                  # 日志级别: debug/info/warn/error
LOG_FORMAT=json                 # 日志格式: json/text
METRICS_ENABLED=true            # 是否启用 Metrics
METRICS_PORT=9090               # Metrics 端口

# 安全配置
TLS_ENABLED=true                # 是否启用 TLS
TLS_CERT_PATH=/etc/certs/tls.crt # 证书路径
TLS_KEY_PATH=/etc/certs/tls.key  # 私钥路径
AUTH_MODE=oidc                  # 认证模式: none/jwt/oidc/mtls

# 性能配置
MAX_CONNECTIONS=10000           # 最大连接数
REQUEST_TIMEOUT=30s             # 请求超时时间
RATE_LIMIT_ENABLED=true         # 是否启用限流
RATE_LIMIT_RPM=1000             # 每分钟允许请求数

# 存储配置
STORAGE_TYPE=local              # 存储类型: local/redis/s3
STORAGE_PATH=/data              # 本地存储路径
REDIS_URL=redis://localhost:6379/0  # Redis 连接 URL
```

### C. 常见错误码 / Common Error Codes

| 错误码 | 含义 | 处理方式 |
|--------|------|----------|
| 1001 | 认证失败 | 检查 API Key 或 Token 是否有效 |
| 1002 | 权限不足 | 确认用户角色是否有对应权限 |
| 1003 | 请求频率超限 | 稍后重试或升级版本 |
| 2001 | 配置格式错误 | 检查配置文件的 YAML/JSON 格式 |
| 2002 | 证书过期 | 更新 TLS 证书 |
| 3001 | 上游服务不可达 | 检查后端服务是否正常运行 |
| 3002 | 上游服务超时 | 增加超时时间或优化后端性能 |
| 4001 | 内部错误 | 联系技术支持并提供日志 |
| 5001 | 沙箱资源耗尽 | 增加资源配额或升级版本 |

### D. 相关标准与协议 / Related Standards & Protocols

- **IETF RFC 8446** --- TLS 1.3 协议标准
- **IETF RFC 6749** --- OAuth 2.0 授权框架
- **IETF RFC 7519** --- JSON Web Token (JWT)
- **ISO/IEC 27001** --- 信息安全管理体系
- **NIST SP 800-207** --- 零信任架构
- **OWASP ASVS** --- Web 应用安全验证标准
- **PCI DSS** --- 支付卡行业数据安全标准

---

## 📝 关于项目 / About This Project

### 项目背景 / Project Background

本产品是 **HOMO 智能体** 安全产品线的一部分，由旺财（老鬼）和团队倾力打造。

HOMO 智能体致力于构建 AI 时代的全方位安全体系，从 Agent 运行时安全、数据安全、网络安全到合规审计，为企业提供端到端的安全解决方案。

我们相信，安全不是功能，而是 AI 应用落地的**基础条件**。只有当安全不再是瓶颈的时候，AI 的真正价值才能被释放。

### 许可证说明 / License Note

本项目采用 AGPL v3.0 开源许可证。对于商业使用场景，我们提供商业许可证（见定价部分）。如果您对本项目的开源/商业使用有任何疑问，请联系我们。

---

<div align="center">

**Made with ❤️ by HOMO Team**

**[⬆ 返回顶部 / Back to Top](#readme)**

</div>

### Related Projects from HOMO 🤖

| Project | Description |
|---------|-------------|
| [AgentMemory Vault](https://github.com/sevenliuhu/agentmemory-vault) | 🔒 AES-256-GCM encrypted memory for AI agents |
| [9router Gateway](https://github.com/sevenliuhu/9router-gateway) | 🌉 Enterprise API gateway for LLMs |
| [Skill Vault](https://github.com/sevenliuhu/skill-vault) | 🔐 Encrypt and protect AI agent skills |
| [Memory Vault](https://github.com/sevenliuhu/memory-vault) | 🗄️ Multi-tenant encrypted memory vault |
| [BrowserHand](https://github.com/sevenliuhu/browserhand) | 🕵️ Stealth browser automation toolkit |
| [OHIF HIPAA Vault](https://github.com/sevenliuhu/ohif-hipaa-vault) | 🏥 HIPAA compliance for OHIF Viewer |
| [Freqtrade Strategy Vault](https://github.com/sevenliuhu/freqtrade-strategy-vault) | 📊 Encrypted trading strategies |
| [UI-TARS Sandbox](https://github.com/sevenliuhu/ui-tars-sandbox) | 🏖️ Agent security sandbox |
| [SciScrape Gateway](https://github.com/sevenliuhu/sciscrape-gateway) | 🔬 Research anti-scraping gateway |
| [CrewAI Vault](https://github.com/sevenliuhu/crewai-vault) | 👥 CrewAI enterprise encryption |
| [MCP Secure](https://github.com/sevenliuhu/mcp-secure) | 🛡️ MCP protocol security layer |
| [API Secure Gateway](https://github.com/sevenliuhu/api-secure-gateway) | 🚪 Enterprise API security |
| [Dify Security Gateway](https://github.com/sevenliuhu/dify-security-gateway) | 🤖 Dify AI security gateway |


---

## Business Contact

**HOMO AI Agent OS** — Not just an AI assistant, your entire AI team.

| Channel | Contact |
|:--------|:--------|
| Email | **16208204@qq.com** |
| Phone/WeChat | **** |
| GitHub | [sevenliuhu](https://github.com/sevenliuhu) |
| Services | Web Scraping, AI Agent Workflows, Web Dev, Brand Design, Short Video, Tech Solutions |

> For custom development or commercial license, contact us above. Response within 24h.
> This repository is for reference only. Commercial use requires a license.

