# Legal Pages Specification

## Source pages

- `https://elitehcs.com.au/terms-n-conditions/`
- `https://elitehcs.com.au/privacy-policy/`

## Implementation

- Targets: `src/app/terms-and-conditions/page.tsx`, `src/app/privacy-policy/page.tsx`
- Shared shell: `src/components/LegalPage.tsx`
- Interaction model: static document with sticky table of contents and anchor navigation.
- Content: preserve the source pages' wording, section order, effective date, placeholders and contact details.
- Visual treatment: use the redesigned Elite HCS header, footer, typography, colours and responsive document layout.
- Mobile: table of contents becomes non-sticky and content uses a single column.
