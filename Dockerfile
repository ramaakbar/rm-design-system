FROM imbios/bun-node:20-slim  AS builder
WORKDIR /usr/app

COPY . .

RUN bun install --frozen-lockfile
RUN bun run build
RUN bun run export

FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

COPY --from=builder /usr/app/out .
COPY --from=builder /usr/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
