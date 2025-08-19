import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
export type StoreSearchTypes =
  | 'Single Store'
  | 'Group'
  | 'Sub Group'
  | 'Store Id'
  | 'Version'
  | 'Store #'
  | '';

export interface IStore {
  storeid: number;
  check_Date: string;
  download_Sample: number;
  key_Contract: string;
  key_Number: string;
  last_Post: string;
  mail: number;
  manual_Mode: number;
  monitor_Date: string;
  pinpad: string;
  production_Version: string;
  rReports: number;
  reason: string;
  release: string;
  samples_Location: number;
  store_Login: string;
  store_Name: string;
  store_Number: number;
  term_Count: number;
  tigerpawid: string;
  version: string;
  version_Date: string;
  ze_Records: number;
  download_Samples: number;
}

export interface IGroup {
  group_Name: string;
  group_Id: string;
  company: string;
}

export interface ISubGroup {
  company: string;
  group_Id: number;
  group_Name: string;
}

export interface IScope {
  id: number;
  description: string;
  stores: number;
}

export interface StoresState {
  searchType: StoreSearchTypes;
  singleSearchString: string;
  groups: IGroup[];
  subGroups: ISubGroup[];
  selectedGroup: IGroup;
  selectedSubGroup: ISubGroup;
  storeid: string;
  storenumber: string;
  versions: string[];
  selectedVersion: string;
  scopes: IScope[];
  selectedScope: IScope;
  stores: IStore[];
  selectedStore: IStore;
}

export const initialState: StoresState = {
  searchType: '',
  singleSearchString: '',
  groups: [],
  subGroups: [],
  selectedGroup: {
    group_Id: '0',
    group_Name: '',
    company: '0',
  },
  selectedSubGroup: {
    group_Id: 0,
    group_Name: '',
    company: '0',
  },
  storeid: '',
  storenumber: '',
  versions: [],
  selectedVersion: '',
  scopes: [],
  selectedScope: {
    id: 0,
    description: '',
    stores: 0,
  },
  stores: [],
  selectedStore: {
    storeid: 0,
    check_Date: '',
    download_Sample: 0,
    key_Contract: '',
    key_Number: '',
    last_Post: '',
    mail: 0,
    manual_Mode: 0,
    monitor_Date: '',
    pinpad: '',
    production_Version: '',
    rReports: 0,
    reason: '',
    release: '',
    samples_Location: 0,
    store_Login: '',
    store_Name: '',
    store_Number: 0,
    term_Count: 0,
    tigerpawid: '',
    version: '',
    version_Date: '',
    ze_Records: 0,
    download_Samples: 0,
  },
};

export const storesSlice = createSlice({
  name: 'stores',
  initialState,
  reducers: {
    setSearchType: (state, action: PayloadAction<StoreSearchTypes>) => {
      state.searchType = action.payload;
    },
    setSingleSearchString: (state, action: PayloadAction<string>) => {
      state.singleSearchString = action.payload;
    },
    setGroups: (state, action: PayloadAction<IGroup[]>) => {
      state.groups = action.payload;
    },
    setSelectedGroup: (state, action: PayloadAction<IGroup>) => {
      state.selectedGroup = action.payload;
    },
    setSubGroups: (state, action: PayloadAction<ISubGroup[]>) => {
      state.subGroups = action.payload;
    },
    setSelectedSubGroup: (state, action: PayloadAction<ISubGroup>) => {
      state.selectedSubGroup = action.payload;
    },
    setStoreid: (state, action: PayloadAction<string>) => {
      state.storeid = action.payload;
    },
    setStorenumber: (state, action: PayloadAction<string>) => {
      state.storenumber = action.payload;
    },
    setVersions: (state, action: PayloadAction<string[]>) => {
      state.versions = action.payload;
    },
    setSelectedVersion: (state, action: PayloadAction<string>) => {
      state.selectedVersion = action.payload;
    },
    setScopes: (state, action: PayloadAction<IScope[]>) => {
      state.scopes = action.payload;
    },
    setSelectedScope: (state, action: PayloadAction<IScope>) => {
      state.selectedScope = action.payload;
    },
    setStores: (state, action: PayloadAction<IStore[]>) => {
      state.stores = action.payload;
    },
    setSelectedStore: (state, action: PayloadAction<IStore>) => {
      state.selectedStore = action.payload;
    },
  },
});

export const {
  setSearchType,
  setSingleSearchString,
  setGroups,
  setSelectedGroup,
  setSubGroups,
  setSelectedSubGroup,
  setStoreid,
  setStorenumber,
  setVersions,
  setSelectedVersion,
  setScopes,
  setSelectedScope,
  setStores,
  setSelectedStore,
} = storesSlice.actions;

export default storesSlice.reducer;
