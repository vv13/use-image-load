import { useEffect, useState } from 'react';

export enum LoadingStatus {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCUESS',
  FAIL = 'FAIL'
}
interface ILoadingStatus {
  img: string | undefined;
  status: LoadingStatus;
}

const defaultLoadingStatus = {
  img: undefined,
  status: LoadingStatus.LOADING,
};

export default function(source: string) {
  const [loadingStatus, setLoadingStatus] = useState<ILoadingStatus>(defaultLoadingStatus);
  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.onload = () => setLoadingStatus({img: source, status: LoadingStatus.SUCCESS});
    imageLoader.onerror = () => setLoadingStatus({img: undefined, status: LoadingStatus.FAIL});
    imageLoader.src = source;
  }, [source]);
  return loadingStatus;
}
