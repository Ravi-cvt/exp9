# Docker CI/CD GitHub Actions Plan - Todo App

Repo: https://github.com/Ravi-cvt/exp9
DH User: ravi-cvt (images: ravi-cvt/frontend-app, ravi-cvt/backend-app)

## Progress:
1. [x] Server files: package.json (express/cors), server.js (Express /todos), Dockerfile (multi-stage).
2. [x] ci.yml: Node deps/test/build/lint/Docker build.
3. [x] cd.yml: Docker login/build/push frontend/backend.
4. [ ] docker-compose.yml (minor update if needed)
5. [x] README.md
6. [x] Git push origin main (done)
7. [ ] Add GH repo secrets: DOCKER_USERNAME=ravi-cvt, DOCKER_PASSWORD=(DH token), commit/push to trigger CD.
8. [ ] Local test: docker compose up

Next: GH secrets + trigger, provide Actions screenshots + DH dashboard.

