# Contributing

## Getting Started

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Commit Messages

Please see [this guide](https://cbea.ms/git-commit/) on how to write good commit messages. :heart:

## Adding New Data

### New Teams or Team Members

Update the exported array in [teamStructure.ts](../src/utils/teamStructure.ts) following the defined types.

Team member photos will be resized to have a 1:1 aspect ratio, so you should pre-crop any photos to prevent them from
being squished.

### New Sponsors

Update the exported array in [sponsorStructure.ts](../src/utils/sponsorStructure.ts) following the defined types.

## Styling

### Colours

| Element                       | Color                   | Palette Component     |
| :---------------------------- | :---------------------- | :-------------------- |
| Titles, Headers, Text Primary | `#FFFFFF`               | `white`               |
| Sub-titles, Text Secondary    | `#FFFFFF` (80% opacity) | `white` (80% opacity) |
| Purple Primary                | `#B429F9`               | `primary`             |
| Purple Secondary              | `#5A189A`               | `secondary`           |
| BG Primary                    | `#000000`               | `black.main`          |
| BG Secondary                  | `#111111`               | `black.light`         |

### Page Structure

There is no proper template as of now, so please try not to deviate from the formats of other pages too much.

### Code

#### Spelling

Run `npm run check:spelling` to check spelling with cspell.

If a word is tagged as an error even though it is not, you can add the word to the appropriate dictionary in the
[.cspell](../.cspell) directory.

#### Format

Run `npm run check:format` to check code formatting with prettier. Run `npm run fix:format` to let prettier fix all
improperly formatted files.

#### Linting

Run `npm run check:lint` to check for bad coding practices with eslint. Run `npm run fix:lint` to let eslint fix what it
can (manual fixes may still be required).

If you encounter an obstructing rule and believe you have a valid exception, you can disable eslint for one line using
[configuration comments](https://eslint.org/docs/user-guide/configuring/rules#disabling-rules). Please do not edit
[.eslintrc.json](../.eslintrc.json) unless you have a very good reason to do so.

#### Types

Run `npm run check:types` to see if compiling with TypeScript will succeed.

## Testing

Run `npm run validate` to run all tests. Your code **must** pass all tests to be merged.

To test the contact page API in a dev environment, you must complete the following:

1. Create a gmail account.
2. Set "less secure app access" to ON in the account's security settings.
3. Create a file named `.env.local` (**DO NOT COMMIT**) and add the following fields to it:

```dotenv
EMAIL_PASSWORD=yourPassword
DEV_EMAIL=yourDevGmail
```

The API will then use your gmail account to send the emails back to itself.
