'use strict';

const core = require('@actions/core');
const githubLabelSync = require('github-label-sync');
const labels = require('./labels');

void async function () {
	try {
		await githubLabelSync({
			accessToken: core.getInput('github-token'),
			repo: process.env.GITHUB_REPOSITORY,
			allowAddedLabels: true,
			dryRun: false,
			labels,
			log: {
				info: core.info,
				warn: core.warning
			}
		});
	} catch (error) {
		core.setFailed(error.message);
	}
}();
