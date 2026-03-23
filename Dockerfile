FROM jenkins/jenkins:lts

USER root

# Instalar dependencias
RUN apt-get update && apt-get install -y \
    docker.io \
    docker-compose \
    git \
    curl