import { NavigatorScreenParams } from '@react-navigation/native';

export type TabParamList = {
    Home: undefined,
    Settings: undefined,
};

export type RootStackparamList = {
    Tabs: NavigatorScreenParams<TabParamList>;
    Details: { itemId: number };
}
