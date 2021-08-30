# WEB Container Template

Template for building a multi-container web application.

## Containers

- k8s

  - Configuration files for Kubernetes
    - NEED to
      - `kubectl create secret generic pgpassword --from-literal PGPASSWORD=<replace_me>`
      - [ingress-nginx setup](https://kubernetes.github.io/ingress-nginx/deploy/#provider-specific-steps)
        - local
          - `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.0.0/deploy/static/provider/cloud/deploy.yaml`
        - GCP (GKE)
          - https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke
        - https://kubernetes.io/docs/concepts/services-networking/ingress/

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
