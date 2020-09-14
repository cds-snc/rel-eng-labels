'use strict';

// Shared colour values
const colors = {
	black20: 'ccc1b7',
	candy: 'ff7faa',
	claret: '990f3d',
	claretWhite80: 'ad3f64',
	claretWhite60: 'c26f8b',
	claretWhite40: 'd69fb1',
	claretWhite20: 'ebcfd8',
	crimson: 'cc0000',
	jade: '00994d',
	lemon: 'ffec1a',
	oxford: '0f5499',
	oxfordWhite80: '3f76ad',
	oxfordWhite60: '6f98c2',
	oxfordWhite40: '9fbbd6',
	oxfordWhite20: 'cfddeb',
	mandarinWhite40: 'ffcfad',
	mandarinWhite60: 'ffb885',
	sky: 'cce6ff',
	slate: '262a33',
	teal: '0d7680',
	velvet: '593380',
	velvetWhite70: '8b70a6',
	velvetWhite50: 'ac99c0',
	velvetWhite30: 'cdc2d9',
	wasabi: '96cc28'
};

// Create and export the labels
module.exports = [

{
	name: "¢",
	description: "Very low value: more tidying/doing something cool than delivering an outcome",
	color: colors.velvetWhite30,
	aliases: []
},
{
	name: "$",
	description: "Low value: would improve something there is not a great need for",
	color: colors.velvetWhite50,
	aliases: []
},
{
	name: "$$",
	description: "Medium value: would definitely solve some problems for us or our users",
	color: colors.velvetWhite70,
	aliases: []
},
{
	name: "$$$",
	description: "High value: would improve outcomes massively, or for lots of users",
	color: colors.velvet,
	aliases: []
},
{
	name: "S - hours",
	description: "Small effort - less than a day",
	color: colors.claretWhite20,
	aliases: ['good first issue', '🕑 S - hours']
},
{
	name: "M - days",
	description: "Medium effort - a day or two... or three",
	color: colors.claretWhite40,
	aliases: ['🕑 M - days']
},
{
	name: "L - weeks",
	description: "Large effort - a week or two",
	color: colors.claretWhite60,
	aliases: ['L- weeks', '🕑 L - weeks']
},
{
	name: "XL - month or two",
	description: "Extra large effort - starting to count in months",
	color: colors.claretWhite80,
	aliases: ['🕑 XL - month or two']
},
{
	name: "XXL - many months",
	description: "Extra extra large effort - this is a behemoth",
	color: colors.claret,
	aliases: ['🕑 XXL - many months']
},
{
	name: "ENABLER",
	description: "Likely to unlock lots of possibilities",
	color: colors.wasabi,
	aliases: [
	"!enabler!"
	]
},
{
	name: "RISK",
	description: "Something that could go badly wrong if left as it is",
	color: colors.mandarin,
	aliases: ['risk']
},
{
	name: "SECURITY",
	description: "Has security implications",
	color: colors.mandarin,
	aliases: ['security']
},
{
	name: "BLOCKED",
	description: "Cannot be implmented before something else is",
	color: colors.slate,
	aliases: ['blocked']
},

{
	name: "UX",
	description: "Will make the project easier to use",
	color: colors.oxford,
	aliases: ["ux"]
},
{
	name: "documentation",
	description: "Improvements to the project's documentation",
	color: colors.oxfordWhite80,
	aliases: []
},
{
	name: "feature",
	description: "Addition of new functionality ",
	color: colors.oxfordWhite40,
	aliases: ["enhancement"]
},
{
	name: "tests",
	description: "Improvement of the project's testedness",
	color: colors.oxfordWhite60,
	aliases: []
},
{
	name: "tech debt",
	description: "Improvement to non-functional aspects of the project",
	color: colors.oxfordWhite80,
	aliases: []
},
{
	name: "bug",
	description: "Something that is broken",
	color: colors.crimson,
	aliases: []
},
{
	name: "TGG",
	description: "Would benefit from a TGG proposal",
	color: colors.candy,
	aliases: []
},


];
