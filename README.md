# aws-cdk-repro-5885

A repository for reproducing [aws/aws-cdk#5885](https://github.com/aws/aws-cdk/issues/5885)

## Steps to reproduce

Before running the below commands make sure you have a valid AWS CLI session.

```bash
git clone git@github.com:nicklaw5/aws-cdk-5885-repro.git
cd aws-cdk-5885-repro
npm install
npm run build
npm run test
./diff.sh # or ./diff-docker.sh
```
