import { RootStackParams } from 'src/routes/RootStackParams';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<RootStackParams>();

export function navigate<T extends keyof RootStackParams>(
  screen: T,
  params?: RootStackParams[T],
) {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(screen, params);
  }
}
