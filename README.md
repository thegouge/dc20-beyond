# DC20 Beyond

A digital character sheet for the TTRPG [DC20](https://thedungeoncoach.com/pages/dc20)

This sheet (once it's done) will allow you to:

- Create a character
- Track that character's stats, points and levels in the app
- Save and re-load your created character
- And later much more!

## DISCLAIMER

This project is still a work in progress, you can follow my development in the "TODO" section below!

in the meantime, you can check out [the project in action](https://dc20-beyond.vercel.app)

## Todo

- [x] Make it deploy
- [x] Scaffold basic UI
- [x] Tidy up build process
- [x] actually set up a DB
- [x] Building the actual DB schema
- [x] Adding Auth (with Clerk)
- [x] Linking the DB to the character sheet component
- [ ] "taint" (server-only)
- [x] Build a mock character sheet on the front-end
- [x] Adding some basic interactivity to the character sheet
- [ ] Storing that interactivity to the db
- [ ] Build a basic form scaffold for character creation
  - [x] Attribute Scores
    - [x] Standard Array
    - [ ] Point buy
    - [ ] Roll/manual
    - [x] Choose saves
  - [ ] Background
    - [ ] Skills
      - [ ] providing a list of skills to choose, grouped by governing attribute
        - Make sure to include knowlege skills
      - [ ] pulling intelligence points from previous stage to limit choices
      - [ ] allowing an option to convert skill points into trade points?
    - [ ] Trades
      - [ ] Somehow provide a list of trades
      - [ ] allowing the user to select 3 trades
      - [ ] allowing the user to convert a trade point to 2 language points
    - [ ] Languages
      - [ ] providing a list of languages
      - [ ] allowing a user to select 2 language points
      - [ ] allowing a user to either be stumbling or fluent in each language
    - [ ] registering choices to the in-progress character
  - [ ] Ancestry
    - [ ] choose between a full or half ancestry
    - [ ] if half
      - [ ] - provide a list of each ancestry's traits
      - [ ] limit the user's choice of ancestry traits to 5 ancestry points
    - [ ] register the player's choice of ancestry traits to their in-progress character
  - [ ] Class
    - [ ] the player must now choose a character class
    - [ ] - provide the class features each class offers at level 1
        - Also list out any bonus HP, the kind of class it is, and how many spells they can pick
        - [ ] Also resolve any skills the class gives you
  - [ ] Calculate Everything else
    - [ ] Combat masteries
    - [ ] Health
    - [ ] Stamina and Mana
    - [ ] Defenses
    - [ ] Damage Reduction
    - [ ] Attack / Spell checks
    - [ ] Save DCs
    - [ ] Martial check
    - [ ] Death Threshold
    - [ ] move Speed
    - [ ] Jump Distance
    - [ ] Rest Points
    - [ ] Grit Points
- [ ] implement routing for this form / the character sheet
- [ ] Start populating this form with choices from the core rulebook
  - this will likely require the actual rulebook
- [ ] Error management?
- [ ] Testing?
- [ ] Add Character sheet exports
- [ ] \*Add character sheet imports
- [ ] Analytics (posthog)
- [ ] Ratelimiting (upstash)
