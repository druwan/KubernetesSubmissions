# Exercice 1.1: Getting started - Log output app

Create an application that generates a random string on startup, stores this string into memory, and outputs it every 5 seconds with a timestamp.

Following the [example repository](https://github.com/kubernetes-hy/material-example/tree/master/app1) for `index.js`, `Dockerfile` and `manifests/deployment.yaml`


## Javascript Code
```javascript
const randomString = crypto.randomUUID()

const logRandomString = () => {
  const d = new Date()
  console.log(`${d.toISOString()}: ${randomString}`)
  setTimeout(logRandomString, 5000)
}

logRandomString()
```


## Building and pushing the image to docker-hub
```zsh
$ docker build -t druwan/log-output .
$ docker push druwan/log-output:latest
```

## Creating the deployment & Verifying

```zsh
$ kubectl create deployment log-output-dep --image=druwan/log-output

 kubectl logs -f log-output-dep-77b7874d7f-85bhw                   

> log_output@1.0.0 start
> node index.js

2025-06-26T21:07:41.128Z: cfd615ef-f330-439c-b973-37d75a44a11b
2025-06-26T21:07:46.138Z: cfd615ef-f330-439c-b973-37d75a44a11b
2025-06-26T21:07:51.142Z: cfd615ef-f330-439c-b973-37d75a44a11b
2025-06-26T21:07:56.146Z: cfd615ef-f330-439c-b973-37d75a44a11b
```


