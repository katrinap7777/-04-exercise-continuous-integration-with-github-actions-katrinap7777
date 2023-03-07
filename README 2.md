# 04 Exercise - CI with GitHub Actions

## Rationale

Your goal is to understand continuous integration pipelines by implementing one yourself.

## Brief

1. Implement the function inside `src/wordcounter.js`
1. Write tests for it inside `src/wordcounter.test.js`
1. Add a GitHub workflow to run the tests on push.
1. Prove that the `wordcounter` works in node 14.x and 16.x as you implement the features below.
1. Implement and test each feature in turn. Make sure you push your code regularly.
1. If you break the build (GitHub actions show your tests failing) then fix it.

### Tasks

#### Setup a Pipeline

- Add a Github actions pipeline called `ci.yaml`
- Review the __CI material__ from your course to help guide you creating a pipeline

#### Word Count

##### Acceptance Criteria

Write tests and implementation for the following. **Remember to commit regularly as you get each scenario working**

| Scenario                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Given a sentence using latin characters and Maori macrons, when running the word counter then we should get back the number of words in the sentence. |

Examples you should test for:

| INPUT                                             | OUTPUT |
| ------------------------------------------------- | ------ |
| **Empty string**                                  | 0      |
| A number or anything which isn't a defined string | 0      |
| The quick brown fox jumps over the lazy dog.      | 9      |
| Kia ora rā kōrua!                                 | 4      |
| Yo!                                               | 1      |

#### Additional Test Cases

Now add unit tests to prove the following. Commit and push each new tests in turn. See it passes and fix it.

| INPUT                                | OUTPUT |
| ------------------------------------ | ------ |
| A string with just fullstops. Eg ... | 0      |
| A string with just commas. Eg ,,,    | 0      |
| A string with just quotes. Eg. ""    | 0      |

---

# Submit your Exercise

- [ ] Commits are pushed to GitHub
- [ ] Your tests pass in GitHub actions
