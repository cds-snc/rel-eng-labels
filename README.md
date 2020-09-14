
# Rel eng Labels

GitHub action to sync a repo's issue labels with the standard reliability engineering set.


## Usage

To use this action, create the following file in your GitHub repo:

```
.github/workflows/sync-repo-labels.yml
```

```yml
on: [issues, pull_request]
jobs:
  sync-labels:
    runs-on: ubuntu-latest
    name: Sync repository labels
    steps:
      - uses: Financial-Times/rel-eng-labels@v1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

:warning: Whenever an issue is opened, the workflow will execute. This overrides all labels in the repository and may result in loss of data if it's run on a repo that isn't owned by reliability engineering.

You can do this by running the following command from a repo:

```bash
mkdir -p .github/workflows && curl https://raw.githubusercontent.com/Financial-Times/rel-eng-labels/v1/example.yml --output .github/workflows/sync-repo-labels.yml
```


## Labels

You can find the current labels in [`./labels.js`](labels.js). Edit this file to make changes to reliability engineering's suite of labels.

### Value
- **¢** - Very low value - more tidying/doing something cool than delivering an outcome
- **$** - Low value - would improve something there is not a great need for
- **$$** - Medium value - would definitely solve some problems for us or our users
- **$$$** - High value - would improve outcomes massively, or for lots of users

### Prioritising factors
(Remember to include aliases for these as I have changed the names quite a bit)
- **ENABLER** - Likely to unlock lots of possibilities
- **RISK** - Something that could go badly wrong if left as it is
- **SECURITY** - Has security implications
- **BLOCKED** - Cannot be implmented before something else is

### T-shirt sizing

- **S - hours** - Small effort - less than a day
- **M - days** - Medium effort - a day or two... or three
- **L - weeks** - Large effort - a week or two
- **XL - month or two** - Extra large effort - starting to count in months
- **XXL - many months** - Extra extra large effort - this is a behemoth

### Descriptions
- **UX** - Will make the project easier to use
- **documentation** - Improvements to the project's documentation
- **feature** - Addition of new functionality 
- **tests** - Improvement of the project's testedness
- **tech debt** - Improvement to non-functional aspects of the project
- **bug** - Something that is broken
- **TGG** - Would benefit from a TGG proposal

### Changing a label name

When you want to change a label's name, it's very important to add the _old_ label name to the list of aliases for that label. This will ensure that the label is renamed rather than being removed then created. Failing to do this will result in loss of data.

  1. Copy the value of the `name` property and add a new entry in that label's `aliases` array
  2. Change the `name` property of the label to your new value

### Changing a label description

Change the `description` property for the label you wish to update.

### Changing a label colour

Add the new color value to the `colors` object. Change the `color` property for the label you wish to update.


## Development

Work should be based on the `master` branch, with changes PRed in.

If your changes are not breaking, merge them into the `v1` branch, and they'll be picked up by every repo running `v1` automatically.

If your changes ARE breaking, then you should create a `v2` branch based on master and update your chosen repo to use the new workflow.
