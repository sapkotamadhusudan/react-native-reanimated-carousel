import { runOnJS, useAnimatedReaction } from 'react-native-reanimated';
import { DATA_LENGTH } from '../constants';
export function useOnProgressChange(opts) {
  const {
    offsetX,
    rawData,
    size,
    onProgressChange
  } = opts;
  useAnimatedReaction(() => offsetX.value, _value => {
    let value = _value;

    if (rawData.length === DATA_LENGTH.SINGLE_ITEM) {
      value = value % size;
    }

    if (rawData.length === DATA_LENGTH.DOUBLE_ITEM) {
      value = value % (size * 2);
    }

    let absoluteProgress = Math.abs(value / size);

    if (value > 0) {
      absoluteProgress = rawData.length - absoluteProgress;
    }

    !!onProgressChange && runOnJS(onProgressChange)(value, absoluteProgress);
  }, [onProgressChange, rawData]);
}
//# sourceMappingURL=useOnProgressChange.js.map