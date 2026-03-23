pipeline {

 agent any

 stages {

  stage('Clean Workspace') {
   steps {
    deleteDir()
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