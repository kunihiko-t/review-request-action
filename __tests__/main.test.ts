const nock = require('nock')
const path = require('path')

describe('action test suite', () => {
  it('It requests a review to some users', async () => {
    const reviewers = 'hello'
    const teamReviewers = 'hello,team'
    const repoToken = 'token'
    process.env['INPUT_REVIEWERS'] = reviewers
    process.env['INPUT_TEAM-REVIEWERS'] = teamReviewers
    process.env['INPUT_REPO-TOKEN'] = repoToken

    process.env['GITHUB_REPOSITORY'] = 'foo/bar'
    process.env['GITHUB_EVENT_PATH'] = path.join(__dirname, 'payload.json')

    nock('https://api.github.com')
      .persist()
      .post('/repos/foo/bar/pulls/10/requested_reviewers')
      .reply(200)
    const main = require('../src/main')

    await main.run()
  })
})