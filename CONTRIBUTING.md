# Contributing

## Table of Contents

1. [General Workflow](#general-workflow)
1. [Detailed General](#detailed-general)
1. [Guidelines](#guidelines)
1. [References](#references)

## General Workflow

1. Fork the dev branch of the rockridge repository.
1. From your personal fork, create a new branch for the specific issue that you are working on. The name of the branch should be preceded by the GitHub issue number, for example:
  - "#88 Fixes flux capacitor time warp directive."
1. Make commits to your issue branch. Commit frequently and with meaningful comments.
1. When you're ready to make a pull request with your new feature or fix, please ensure the following before submitting:
  - If you are adding a new feature, make sure to have meaningful tests in the feature.spec.js file.
  - Run 'grunt test' from the command line and make sure all tests are passing.
  - Follow the style guide, located here: [STYLE-GUIDE.md](STYLE-GUIDE.md).
  - Include a relevant and meaningful description of your changes, include screen shots if appropriate.
  - Submit a [pull request][] to the dev branch of rockridge.
1. Your pull request will be reviewed to determine if the request can be merged in. If your code reviewer requests you make a change you don't understand, please ask clarifying questions.
1. Fix any issues raised by your code reviewer and push your fixes/changes to the appropriate branch on your personal fork.

## Detailed Workflow

#### Fork the repo

Use github’s interface to make a fork of the repo. Then clone the fork to your machine. Finally, add the original repo as an upstream remote:

```
$ git remote add upstream https://github.com/Immortal-Thunder/rockridge.git
```

#### Checkout the dev branch, if not there already

These commands will help you do this:

``` bash

# Creates your branch and brings you there
$ git checkout -b `dev`
```

#### Create a new feature branch and make commits to this feature branch. 

``` bash

# Creates a feature branch
$ git checkout -b `#<ISSUE_NUMBER>-MSA-view`
```

Do not push your commits (yet).

#### Add upstream commits to feature branch

- Make sure you are on your issue branch.

```
$ git pull --rebase upstream dev
```

  - If there are conflicting changes, git will start yelling at you part way
through the merging process. Git will pause merging to allow you to sort
out the conflicts. You do this the same way you solve merge conflicts,
by checking all of the files git says have been changed in both histories
and picking the versions you want. Be aware that these changes will show
up in your pull request, so try and incorporate upstream changes as much
as possible.

  - Once you are done fixing conflicts for a specific commit, run:

```
$ git commit -m '<YOUR_MESSAGE>'
```

  - Once you have entered your message in quotes, the merging process will continue.
Once you are done fixing all conflicts you should run the existing tests to make sure
you didn’t break anything, then run your new tests (there are new tests, right?) and
make sure they work also.

  - If merging broke anything, fix it, then repeat the above process until
you get here again and nothing is broken and all the tests pass.

```
$ git rebase --continue
```

```
$ git add .
```

  - After merge conflicts resolves/no conflicts originally.

```
$ git push origin branch
```

Update your local master.

```
$ git pull upstream development
```

  - If pull requests have been accepted to development while yours was pending, 
please repeat this step to sync your fork with the Immortal-Thunder developent branch.

#### Make a pull request

Make a clear pull request from your fork and branch to the upstream dev
branch, detailing exactly what changes you made and what feature this
should add. The clearer your pull request is the faster you can get
your changes incorporated into this repo.

At least one other person MUST give your changes a code review, and once
they are satisfied they will merge your changes into upstream. Alternatively,
they may have some requested changes. You should make more commits to your
branch to fix these, then follow this process again from merging onwards.

Once you get back here, make a comment requesting further review and
someone will look at your code again. If they like it, it will get merged,
else, just repeat again.

Thanks for contributing!

## Guidelines

#### Commit Messages

- Commit messages should be written in the present tense; e.g. "Fixes continuous
  integration script".
- The first line of your commit message should be a brief summary of what the
  commit changes. Aim for about 70 characters max. Remember: This is a summary,
  not a detailed description of everything that changed.
- If you want to explain the commit in more depth, following the first line should
  be a blank line and then a more detailed description of the commit. This can be
  as detailed as you want, so dig into details here and keep the first line short.

#### Writing Code

1. Uphold the current code standard:
    - Keep your code [DRY][].
    - Apply the [boy scout rule][].
    - Follow [STYLE-GUIDE.md](STYLE-GUIDE.md)
1. Run the [tests][] before submitting a pull request.
1. Tests are very, very important. Submit tests if your pull request contains
   new, testable behavior.
1. Your pull request is comprised of a single ([squashed][]) commit.

#### Checklist:

This is just to help you organize your process

- [ ] Did I cut my work branch off of dev (don't cut new branches from existing feature brances)?
- [ ] Did I follow the correct naming convention for my branch?
- [ ] Is my branch focused on a single main change?
 - [ ] Do all of my changes directly relate to this change?
- [ ] Did I merge the upstream dev branch after I finished all my
  work?
- [ ] Did I write a clear pull request message detailing what changes I made?
- [ ] Did I get a code review?
 - [ ] Did I make any requested changes from that code review?

If you follow all of these guidelines and make good changes, you should have
no problem getting your changes merged in.


## References

http://www.thumbtack.com/engineering/linear-git-history/
