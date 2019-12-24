const simpleGit = require('simple-git/promise');

module.exports = {
	click:async()=>{
		const git = simpleGit(graviton.getCurrentDirectory());

		const status = await git.status();

		let dialog = new Dialog({
			id: "git-plus-plus-status-dialog",
			title: "Git Add Remote",
			content: `
<input class="input4" id="remote-name" placeHolder="Name"></input>
<input class="input4" id="remote-url" placeHolder="URL"></input>
`,
			buttons: {
				"Add": {click:async()=>{
					let name = document.getElementById("remote-name").value;
					let url = document.getElementById("remote-url").value;
					console.log(await git.addRemote(name,url))
				}},
				"Close": "closeDialog(this);"
			}
		})
		}
}
