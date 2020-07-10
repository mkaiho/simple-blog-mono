FROM node:12-buster as build-stage

WORKDIR /work/bffapi

COPY ./package.json /work/bffapi
COPY ./yarn.lock /work/bffapi
COPY ./tsconfig.json /work/bffapi
COPY ./src /work/bffapi/src

RUN yarn install
RUN yarn build

FROM node:12-buster-slim

WORKDIR /bffapi

COPY --from=build-stage /work/bffapi/dist ./dist
COPY --from=build-stage /work/bffapi/node_modules ./node_modules

CMD [ "node", "./dist/server.js" ]
