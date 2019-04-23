'use strict'

module.exports = {
	base: '/docs/',
	title: 'uRepairPC',
	description: '', // TODO
	themeConfig: {
		// Assumes GitHub. Can also be a full GitLab url.
		repo: 'uRepairPC',
		// Customising the header label
		// Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
		repoLabel: 'Contribute!',
		// if your docs are in a different repo from your main project:
		docsRepo: 'uRepairPC/docs',
		// if your docs are not at the root of the repo:
		docsDir: '/',
		// if your docs are in a specific branch (defaults to 'master'):
		docsBranch: 'master',
		// defaults to false, set to true to enable
		editLinks: true,
		// custom text for edit link. Defaults to "Edit this page"
		editLinkText: 'Help us improve this page!',
		nav: [
			{ text: 'Home', link: '/' }
		],
		sidebar: [
			{
				//
			}
		]
	}
}
