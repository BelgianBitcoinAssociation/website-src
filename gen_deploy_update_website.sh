#!/bin/bash

cd octopress/ ; rake gen_deploy ; cd .. ; git add -A ; git commit ; git push
