try to use custom hook as an easy example.

## Example
```
import useImageLoad from 'use-image-load';

const { img, status } = useImageLoad('url')
```

The img only have value when load success, useImageLoad can return these status:
```
export enum LoadingStatus {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCUESS',
  FAIL = 'FAIL'
}
```
