import * as core from '@actions/core';
import * as github from '@actions/github';

export async function run() {
  try {
    const welcomeMessage = core.getInput('welcome-message', { required: true }),
      repoToken = core.getInput('repo-token', { required: true }),
      issue: { owner: string; repo: string; number: number } = github.context.issue

    if (github.context.payload.action !== 'opened') {
      console.log('No issue or pull request was opened, skipping');
      return;
    }

    const client: github.GitHub = new github.GitHub(repoToken);
    await client.issues.createComment({
      owner: issue.owner,
      repo: issue.repo,
      issue_number: issue.number,
      body: welcomeMessage
    });

  }
  catch (error) {
    core.setFailed(error.message);
    throw error;
  }
}

run();