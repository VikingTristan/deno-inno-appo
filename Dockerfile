# Deno 2.9.8, pinned to the official multi-platform image digest.
FROM denoland/deno:2.9.8@sha256:a0d88a7fcbd44f062cba2748e19df67d30290ad12aa203c7c1e0b12462c483f0
LABEL org.opencontainers.image.source="https://github.com/VikingTristan/deno-inno-appo"
WORKDIR /app
COPY --chown=deno:deno deno.json deno.lock ./
COPY --chown=deno:deno src ./src
USER deno
RUN deno install --entrypoint --frozen-lockfile src/server/main.ts
EXPOSE 3000
CMD ["task", "start"]
