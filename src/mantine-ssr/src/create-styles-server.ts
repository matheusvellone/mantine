import { EmotionCache } from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';
import { getCache } from '@mantine/styles';

export function createStylesServer(cache?: EmotionCache) {
  return createEmotionServer(cache || getCache());
}
