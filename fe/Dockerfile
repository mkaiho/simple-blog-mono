FROM node:12-buster as build-stage

WORKDIR /work/fe

COPY ["package.json", "yarn.lock", "tsconfig.json", ".babelrc", "nuxt.config.ts", "/work/fe/"]
COPY "./src" "/work/fe/src"

RUN yarn install
RUN yarn build

FROM node:12-buster-slim
ENV HOST=0.0.0.0

WORKDIR /fe
COPY --from=build-stage /work/fe /fe

CMD ["yarn", "start"]
