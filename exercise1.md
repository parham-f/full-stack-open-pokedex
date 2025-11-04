I’ll use Python. For linting/formatting, I like Ruff because it’s fast and can replace a stack of tools (Flake8, isort, parts of Black) in one go; I’d pair it with mypy for static type checks. 

For testing, pytest is the default, and I’d record coverage with coverage.py (HTML reports + CI-friendly summaries). 

For building and packaging, I’d standardize on PEP 517 with the PyPA build frontend; teams that want an all-in-one workflow could use Poetry or Hatch/Hatchling via pyproject.toml. 

Beyond Jenkins/GitHub Actions, solid CI choices include GitLab CI/CD, CircleCI, Azure Pipelines, Bitbucket Pipelines, Buildkite, and TeamCity—all with mature YAML pipelines and good Python examples. 

Self-hosted vs cloud?
For a 6-person team shipping soon, I’d default to cloud to reduce ops toil: managed runners, elastic concurrency, built-in secrets, and less patching. Self-hosted can be better if you need: (1) network locality to private databases/VPN-only services; (2) specialized hardware (e.g., GPUs) or custom Docker runtimes; (3) data residency/compliance constraints; (4) predictable cost models when you run heavy pipelines continuously; or (5) very strict secrets isolation policies. To decide, I’d ask for: repo host (GitHub/GitLab/Bitbucket), expected build minutes per day and peak concurrency, artifact sizes/retention, required OS images (Linux/Windows/macOS), need for GPU or nested virtualization, dependency on internal services, compliance requirements (PII/PHI, ISO/SOC2), and budget ceilings.