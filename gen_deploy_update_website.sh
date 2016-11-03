#!/bin/bash
cd octopress/
rake gen_deploy
cd .. 

cd belgianbitcoinassociation.github.io.git
git add -A
git commit -m "Octopress deploy"
git push
cd ..
