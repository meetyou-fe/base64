# Base64 libs

## usage
``` js

  var base64 = require('./index');

  base64.encode('whatever');
  base64.decode('d2hhdGV2ZXI=');

  base64.urlsafe_b64decode('d2hhdGV2ZXI=');
  base64.urlsafe_b64encode('whatever');

```
## API

### base64.encode
encode the arg input

### base64.decode

decode the arg input

### base64.urlsafe_b64encode
  1. call base64.encode
  2. replace char ```+``` to ```-```
  3. replace char ```/``` to ```_```
  4. return replace string

### base64.urlsafe_b64decode
1. replace char ```-``` to ```+```
2. replace char ```_``` to ```/```
3. call base64.decode
4. return decode string;

## test [mocha]

``` npm test```

## refs

- [base64 wiki](https://en.wikipedia.org/wiki/Base64)

- [base64 ietf](https://tools.ietf.org/html/rfc4648)
