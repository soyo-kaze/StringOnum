# StringOnum ![npm](https://img.shields.io/npm/dt/stringonum) ![npm](https://img.shields.io/npm/v/stringonum)

Get unique number code equivalent to the string you provide. Length of this code will be 3X of the string's length.

# Installation

`npm i stringonum --save`

Then...

```javascript
import { enc } from 'stringonum';

const theCode = enc("your_string_here") // the code gets stored into the theCode Variable.
```

## Expamle:

`enc("soyokaze") -> 353343371343333311372321`
