pipeline {

 agent any

 stages {

  stage('Checkout') {
   steps {
    git 'https://github.com/mstovarh/restaurant-microservices-devops.git'
   }
  }

  stage('Build Docker Images') {
   steps {
    sh 'docker compose build'
   }
  }

  stage('Start Services') {
   steps {
    sh 'docker compose up -d'
   }
  }

 }

}