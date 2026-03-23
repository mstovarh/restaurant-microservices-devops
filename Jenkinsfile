pipeline {

 agent any

 stages {

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