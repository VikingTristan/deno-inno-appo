# deno-inno-appo

A small Deno app collecting innovation-day projects. It serves the page and project data from the same process.

## Run locally

Requires Deno 2.9.8. Install the locked dependencies, check the code, and start the server:

```sh
deno install --entrypoint --frozen-lockfile src/server/main.ts
deno task check
deno task start
```

Open `http://localhost:3000`. The data endpoint is `/api/innovation-days` and `/api` provides a simple health check. The app does not require a database or runtime secrets.

## Container and deployment

```sh
docker build -t deno-inno-appo .
docker run --rm -p 3000:3000 deno-inno-appo
```

GitHub Actions builds and smoke-tests the image. A successful push to `main` publishes an image tagged with the commit SHA to GitHub Container Registry; the hosting server checks for successful releases and deploys the resulting image by digest. The public app is available at https://innovation.applications.vikingtom.com/.
