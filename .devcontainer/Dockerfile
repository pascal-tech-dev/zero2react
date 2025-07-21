# use the latest Node.js LTS version
FROM node:22.17-alpine3.22

# Switch to root to install git and bash
USER root
RUN apk add --no-cache git bash \
    && rm -rf /var/cache/apk/*

# Working directory
# This is where the source code will be mounted
# and where the commands will be executed
# in the devcontainer
# It is also the default location for the terminal
# when the devcontainer is opened
# and the default location for the terminal in VS Code
# when the devcontainer is opened
WORKDIR /workspace/zero2react

# This will copy the files from the host machine
# to the container's working directory
# The --chown=node:node option sets the ownership of the files
# to the node user and group, which is the default user in the container
COPY --chown=node:node . .

# Switch back to non-root user
USER node


# Default shell
ENV SHELL=/bin/bash

# Note: Dependencies will be installed by the devcontainer postCreateCommand