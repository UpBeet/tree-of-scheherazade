# tree-of-scheherazade

Cut a story within a story computationally, a la Tree of Codes and One Thousand and One Nights

> **Only a few people noticed** the peculiar characteristics of that district: **the** fatal **lack of color**, as if that shoddy, quickly-growing area could not afford the luxury of it. Everything was gray there, **as in black-and-white photographs** or in cheap catalogues**. This** similarity **was real rather than metaphorical** because at times, when wandering in those parts, one in fact gained the impression that one was turning the pages of a prospectus, looking at columns of boring commercial advertisement, amongwhich suspect announcements nestled like parasites, together with dubious notices and illustrations with a double meaning.

*The Street of Crocodiles* by Bruno Schulz >>

Polish to English by Celina Wieniewska >>

*Tree of Codes* by Jonathan Safran Foer

> Only a few people noticed the lack of color, as in black-and-white photographs. This was real rather than mataphorical&mdash; colorless sky, an enormous geometry of emptiness, a watery anonymous gray which did not throw shadows and did not stress anything, a screen placed to hide the true meaning of things, a facae behind which there was an overintense coloring, exhausted by passitivity.

*Tree of Codes* by Jonathan Safran Foer

Within the tradition of story within a story, Foer takes this one step further by literally constructing a new story by cutting out words from another. While it could be debated whether the result is a work of prose, poetry, or even sculpture, it could also be thought of as one of computation, a special functor designed for a text that itself was created as an act of translation.

A bit naively we can think of this process in functional code as the composition of a map (translation) and a filter (cutting):
```
polish_to_english_wieniewska = map(text)
tree_of_codes = filter(cut_indices)
result = compose(tree_of_codes, polish_to_english_wieniewska)(the_street_of_crocodiles)
```

We are creating a web tool that would allow authors to easily craft their own `tree_of_codes` function and visualize it in a similar, but digital form.

## The application

A Redux/React app that takes a source text and enables, helps, prods the user to cut out their own story.

```
> npm install
> npm build // or `npm watch`
> npm start
Server running on localhost:1001
```

## Application state

```
// Mori data structures? Or immutable.js

#{
  // A vector of the source text tokenized by word and punctuation
  "src" #[String],
  // A vector of the same length of the src text
  // Defaults to true for all indicies
  // True means include token and vice versa
  // The main application state can be determined by zipping the `src` and `gen`
  "gen" #[Bool],
  // Create a char Trie of the src text for efficient autocomplete
  // Each word will be a set of indicies it's contained at
  "srcTrie" Char -> Set(Int) // need to choose an implementation 
}
```
