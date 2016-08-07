#!/bin/bash
set -x
babel --version
babel --optional runtime,"es7.classProperties" --blacklist useStrict --stage 2 src -d .
