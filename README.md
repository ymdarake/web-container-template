# WEB Container Template

Template for building a multi-container web application.

## Containers

- k8s
  - Configuration files for Kubernetes
- nginx
  - Minimum routing configuration
- server
  - Express server template with Redis and PostgreSQL
  - Hot reloading available
  - NOT in TypeScript (but it's just a tiny piece of code so we can live with that)
- worker
  - Redis worker for the server
  - in Node.js (same as the above)
- client
  - React app in TypeScript
  - Hot reloading available
  - NGINX attached for content distribution in production build
