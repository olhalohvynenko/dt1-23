# Setting up a Bridge via Google Cloud for Bubble.io

In this practical guide, I learned to work with Github, Docker, Bubble.io, and some JavaScript. Below are the commands from the checklist that were used to build this application.

Cloning the Repository and Building the Docker Image Locally:

```bash
git clone <repository_url>
cd <repository_directory>

docker build -t dt1-23:latest
```

Push Docker image to DockerHub:

```bash
docker login
docker push dt1-23:latest
```

Working with the Git Repository:

```bash
git init
git add --all
git commit -m 'init'

git remote add origin <repository_url>
git push -u origin main
```

Google Cloud:

```bash
sudo apt-get update
sudo apt-get install docker

docker pull olhalohvynenko/dt1-23:latest
docker run -d -p 5000:5000 olhalohvynenko/dt1-23:latest
```
