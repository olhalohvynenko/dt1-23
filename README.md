# Setting up a Bridge via Google Cloud for Bubble.io

In this practical guide, I learned to work with Github, Docker, Bubble.io, and some JavaScript. Below are the commands from the checklist that were used to build this application.

Cloning the Repository and Building the Docker Image Locally:

```bash
git clone https://github.com/sid027/dt1-23
cd dt1-23

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

Problems encountered during work:

1. Google Cloud did not want to give out its ip address for requests
Solution: After clicking buttons I found the domain.

2. Google Cloud does not accept API requests due to subscription restrictions.
Solution: Send requests directly to Hugging Face.

3. Bubble doesn't provide the usual HTML and CSS code that can be improved in any way. They have developed their own file format that only Bubble understands.

4. It is not possible to deploy an app in Bubble without a subscription.
Solution: Subscription and deployment
