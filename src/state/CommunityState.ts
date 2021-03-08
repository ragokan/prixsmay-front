import create, { State, PartialState } from "zustand";
import { devtools } from "zustand/middleware";
import { ICommunity } from "../types/CommunityType";

interface ICommunityState extends State {
  communities: ICommunity[];
}

export const CommunityState = create<ICommunityState>(devtools(() => ({ communities: [] })));

export const setCommunityState = (partial: PartialState<ICommunityState>) => CommunityState.setState(partial);
export const getCommunityState = CommunityState.getState;
export const subCommunityState = CommunityState.subscribe;
