import { create } from 'zustand'


interface State {
    searchText: string;
    setSearchText: (text: string) => void;
}

export const useProductStore = create<State>()((set) => ({

    searchText: '',
    setSearchText: (text) => set({searchText: text.trimStart()}),

}))