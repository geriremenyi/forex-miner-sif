#!/bin/sh

# Parameters to named parameters
version_type=$1

# Parameter checks
if [ "$version_type" = "" ] 
then
    echo "[WARNING] Version type was not given. Setting version type to 'patch'"
    version_type="patch"
else 
    if [ "$version_type" != "patch" ] && [ "$version_type" != "minor" ] && [ "$version_type" != "major" ]
    then
        echo "[ERROR] The first parameter is the version type which should be either 'patch', 'minor' or 'major'."
        exit 1
    fi
fi

# Bumping version in package.json
next_version=$(npm version "$version_type" --no-git-tag-version | sed "s/[^0-9\.]*//g")
echo "[INFO] Node package version was updated to $next_version"

# Bumping version in k8s
root_folder="$(dirname "$0")/.."
sed -i "s/ghcr.io\/geriremenyi\/forex-miner-sif\:.*/ghcr.io\/geriremenyi\/forex-miner-sif\:$next_version/g" "$root_folder/k8s/app.yaml"
echo "[INFO] Kubernetes 'app.yaml' file was updated to $next_version"