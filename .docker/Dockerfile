FROM node:18-alpine as base
USER root
RUN apk update && apk add --no-cache libc6-compat nano curl
RUN npm i -g pnpm

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --no-frozen-lockfile

FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build

FROM base
ARG NODE_ENV=production
ARG PORT=3000

ENV NODE_ENV=$NODE_ENV
ENV PORT=$PORT
ENV TZ=Asia/Jakarta
ENV NEXT_TELEMETRY_DISABLED=1

USER node

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

EXPOSE ${PORT}
CMD [ "pnpm", "start" ]
