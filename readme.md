# Kinsman Session Adapter

A session-based adapter for [Kinsman](https://github.com/Aloompa/kinsman).

## Installation

```
npm i kinsman-session-adapter -D
```

## Usage

Just pass this adapter into Kinsman and it will use it. For more information, see the [Kinsman](https://github.com/Aloompa/kinsman) documentation.

```javascript
import kinsman from 'kinsman';
import sessionAdapter from 'kinsman-session-adapter';

const orm = kinsman({
    adapter: sessionAdapter(),
    models: {
        // ... models
    }
})({
    // Initial state
});
```

## Contributing

We encourage you to contribute to Kinsman by submitting bug reports and pull requests through [Github](http//github.com).

## License

Kinsman is released under The [MIT License](http://www.opensource.org/licenses/MIT) (MIT)

Copyright (c) [2017] [Aloompa LLC]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.