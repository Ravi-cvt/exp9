# Docker CI/CD Complete

Repo: https://github.com/Ravi-cvt/exp9
DH: ravi-cvt/frontend-app:backend-app:latest

**Files created/pushed:**
- Dockerfiles: client/, server/
- Workflows: ci.yml (w/ Node cache fix), cd.yml
- docker-compose.yml, README.md, server/ full

**Updated ci.yml w/ cache-dependency-path per feedback.**

**Final Steps (user):**
1. Repo Settings > Secrets > Add:
   - DOCKER_USERNAME: ravi-cvt
   - DOCKER_PASSWORD: Docker Hub token
2. `git commit --allow-empty -m "Trigger CD" && git push` 
3. Share Actions screenshots (green CI/CD) + DH dashboard (images w/ latest).

**Demo:** docker compose up (install Docker Desktop first)

Task complete.

