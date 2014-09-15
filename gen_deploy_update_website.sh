#!/bin/bash

branch=$(git branch | grep "^*" | cut -d ' ' -f 2)

if [ $branch != "staging"]
then
    echo "You're not on staging branch!"
    exit 1
fi

cd octopress/ ; rake gen_deploy ; cd .. ; git add -A ; git commit ; git push
