#!/bin/bash
set -x
babel --optional runtime,"es7.classProperties" --blacklist useStrict --stage 2 src -d .
