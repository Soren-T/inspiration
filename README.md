# Airtable CMS Gatsby BLlog

Live site is available at: https://friendly-blackwell-c2f315.netlify.app/

## About

My brother is a content writer for a large ad agency and has forever wanted to start a blog to write about a passion of his: DnD. I created this blog with Gatsby and Airtable as the CMS to help him achieve this goal. This gatsby site pulls data from two tables in Airtable, 'CMS' and 'Tags'. The CMS table holds all data for the articles themselves and the Tags table holds additional info for tagging and categorising the articles.

### CMS Table

| title                                 | summary                                                                                                                                | slug                      | author | image                                                                                                              | PostMarkdown                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Tags             | tag (from Tags)  | date      | status    |
|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------|--------|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|------------------|-----------|-----------|
| How to Create a Character             | Need to make a character? Read this article for tips and tricks                                                                        | how-to-create-a-character | John   | dnd-dice.jpeg (https://dl.airtable.com/.attachments/951cedfd117af0bfbb127b5785512d74/590edb86/dnd-dice.jpeg)       | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. | Player Character | Player Character | 12/9/2020 | published |
| Cool NPC Ideas                        | An inspiration article for cool NPCs to add to your adventure                                                                          | cool-npc-charactrers      | John   | dnd-players.jpeg (https://dl.airtable.com/.attachments/3bf86eec4e4581c7ae2e800bad43f8b2/cedb5aeb/dnd-players.jpeg) | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. | NPC Character    | NPC Character    | 12/9/2020 | published |
| Scary Dungeons                        | Examples of how to make give you next dungeon a spooky aura.                                                                           | scary-dungeons            | John   | dnd-dragon.jpeg (https://dl.airtable.com/.attachments/d5404691cf37cf6557d76ba9b4995d11/274645ee/dnd-dragon.jpeg)   | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. | Dungeons         | Dungeons         | 12/9/2020 | published |
| 10 Pre-made Encounters                | Struggling to come up with encounter ideas for you party? Here are some pre-made encounters you can use.                               | pre-made-encounters       | John   | dnd-sword.jpeg (https://dl.airtable.com/.attachments/6ab99603e737c5481d76801d6c8d4b37/50d2a346/dnd-sword.jpeg)     | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. | Encounters       | Encounters       | 12/9/2020 | published |
| Easy DnD Puzzles for Beginner Players | Puzzle ideas that won't frustrate your group of players that are new to DnD.                                                           | easy-beginner-puzzles     | John   | dnd-players.jpeg (https://dl.airtable.com/.attachments/9a46382b70e63283afaa5434407228c6/1856e34e/dnd-players.jpeg) | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. | Puzzles          | Puzzles          | 12/9/2020 | published |
| Monsters for large player groups      | If your large group of players keep destroying everything you throw at them, here are some tips to make the next battle a bit tougher. | monsters-for-large-groups | John   | dnd-dragon.jpeg (https://dl.airtable.com/.attachments/6d396c4d1165d756b2487d2d7721fe6d/8da19a47/dnd-dragon.jpeg)   | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. | Monsters         | Monsters         | 12/9/2020 | published |


### Tags Table

| tag              | ID | description | CMS                                   |
|------------------|----|-------------|---------------------------------------|
| Player Character | 1  |             | How to Create a Character             |
| NPC Character    | 2  |             | Cool NPC Ideas                        |
| Encounters       | 3  |             | 10 Pre-made Encounters                |
| Monsters         | 4  |             | Monsters for large player groups      |
| Dungeons         | 5  |             | Scary Dungeons                        |
| Puzzles          | 6  |             | Easy DnD Puzzles for Beginner Players |

### Running Locally

To run locally you need Gatsby and Gatsby CLI installed locally. You can get started on that here: https://www.gatsbyjs.com/docs/quick-start/

Once you have to repo cloned and Gatsby installed run the below commands to get started

Note: you will not be able to fetch data with the .env file containing the Airtable API keys.

#### `gatsby develop`

Run in the project locally.

#### `gatsby build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.
