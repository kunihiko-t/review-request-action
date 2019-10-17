# Github-Review-Request-Action
[![Actions Status](https://github.com/kunihiko-t/review-request-action/workflows/Test/badge.svg)](https://github.com/kunihiko-t/review-request-action/actions)

Make Review Requests

## Usage

### Workflow
```yaml
name: "Test"
on:
  pull_request:
    types: [opened]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: kunihiko-t/review-request-action@master
      with:
        repo-token: ${{ secrets.TOKEN }}
        reviewers: "valletta-io"
        team-reviewers: "a,b,c"
``` 
